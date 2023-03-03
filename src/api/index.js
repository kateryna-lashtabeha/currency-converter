import { exchangeURL } from '../constants';

export const fetchCurrencyData = async (dispatch, successFn, failFn) => {
  await fetch(`${exchangeURL}/latest`).then(response => response.json())
    .then(
      data => {
        dispatch(successFn(data)) //Object.keys(data.rates).map((el) => {return {code: el}})
      },
      error => dispatch(failFn(error.message))
    )
};

export const fetchCurrencySymbols = async (dispatch, successFn, failFn) => {
  await fetch(`${exchangeURL}/symbols`).then(response => response.json())
  .then(
    data => {
      dispatch(successFn(data.symbols))
    },
    error => dispatch(failFn(error.message))
  )
}

export const fetchConvertCurrency = async (dispatch, successFn, failFn, ...rest) => {
  await fetch(`${exchangeURL}/convert?from=${rest[0]}&to=${rest[1]}&places=2`).then(response => response.json())
  .then(
    data => {
      dispatch(successFn(data))
    },
    error => dispatch(failFn(error.message))
  )
}

export const fetchChartData = async (dispatch, successFn, failFn, ...rest) => {
  await fetch(`${exchangeURL}/timeseries?start_date=${rest[0]}&end_date=${rest[1]}&symbols=${rest[2]}&amount=1`)
    .then(response => response.json())
    .then(
      data => {
        dispatch(successFn(data))
      },
      error => dispatch(failFn(error.message))
    )
}