import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import ConvertRow from '../../components/convertRow';
import { errMessage } from '../../constants';
import ForwardIcon from '@mui/icons-material/Forward';
import Loader from '../../components/loader';
import { getCurrencyData, getCurrencySymbols, getConvertCurrency } from '../../middleware';
import './style.scss';

const Converter = () => {
  const [currencyArr, setCurrencyArr] = useState(null);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(null);
  const [rateFrom, setRateFrom] = useState(true);
  
  const dispatch = useDispatch();

  const currencyState = useSelector((state) => state.currencyDataFetched ? state.currencyDataFetched : null);
  const currencyFullName = useSelector((state) => state.currencySymbolsFetched ? Object.values(state.currencySymbolsFetched) : null);
  const currencyLoading = useSelector((state) => state.currencyLoading);
  const symbolsLoading = useSelector((state) => state.currencySymbolsLoading);
  const currencyError = useSelector((state) => state.currencyError);
  const symbolsError = useSelector((state) => state.currencySymbolsError);

  let toAmount, fromAmount;
  if (rateFrom) {
    fromAmount = amount;
    toAmount = amount * rate;
  } else {
    toAmount = amount;
    fromAmount = amount / rate;
  };

  useEffect(() => {
    if (currencyFullName && currencyState && currencyState?.base) {
      setCurrencyArr(() => {
        const currency = Object.keys(currencyState.rates).map((el) => { return { code: el } });
        return currency.map((el) => ({ ...el, ...currencyFullName?.find((el2) => el2.code === el.code) }))
      });
      const startCurr = Object.keys(currencyState?.rates)[0];
      setFromCurrency(currencyState?.base);
      setToCurrency(startCurr);
      setRate(() => currencyState?.rates[startCurr]);
    }
  }, [currencyFullName?.length, currencyState?.rates]);

  useEffect(() => {
    if (currencyState?.result) setRate(currencyState.result);
  }, [currencyState?.result])

  useEffect(() => {
    dispatch(getCurrencyData());
    dispatch(getCurrencySymbols());
  }, [dispatch]);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      dispatch(getConvertCurrency(fromCurrency, toCurrency));
    }
    
  }, [fromCurrency, toCurrency, dispatch]);

  const fromAmountChange = (e) => {
    setAmount(e.target.value);
    setRateFrom(true);
  }

  const toAmountChange = (e) => {
    setAmount(e.target.value);
    setRateFrom(false);
  }

  return (
    <Container maxWidth="md">
      <div className="container--centrated">
        <div className="converter__links">
          <a className="btn btn--rounded btn--inverted-hover" href="/">
            <HomeIcon />
            Home</a>
        </div>
        <h1 className="main__title">Converter</h1>
        {currencyError || symbolsError ?
          <p className="error-message">{errMessage}</p>
          : <>
            {!currencyLoading && !symbolsLoading ? (
              <div>
                <ConvertRow
                  label={'Currency #1'}
                  currency={currencyArr}
                  setSelectedCurrency={fromCurrency}
                  onChangeAmount={fromAmountChange}
                  onChangeCurrencyFn={e => setFromCurrency(e.target.value)}
                  amount={fromAmount}
                />
                <ConvertRow
                  label={'Currency #2'}
                  currency={currencyArr}
                  setSelectedCurrency={toCurrency}
                  onChangeCurrencyFn={e => setToCurrency(e.target.value)}
                  onChangeAmount={toAmountChange}
                  amount={toAmount}
                />
              </div>
            ) : <Loader />}
            {fromCurrency && toCurrency ? (
              <>
                <p>View the daily rates of the selected currency for the last two months:</p>
                <div className="block-wrapper">
                  <a className="btn" href={`/currency/${fromCurrency}&${toCurrency}`}>Forward
                    <ForwardIcon />
                  </a>
                </div>
              </>
            ) : <></>}
          </>
        }
      </div>
    </Container>
  );
}

export default Converter;