import {
  currencyDataLoading,
  currencyDataFetched,
  currencyDataError,
  currencySymbolsLoading,
  currencySymbolsFetched,
  currencySymbolsError,
  currencyTimeseriesLoading,
  currencyTimeseriesFetched,
  currencyTimeseriesError,
} from '../actions';

import * as api from '../api';

export const getCurrencyData = () => (dispatch) => {
    dispatch(currencyDataLoading());
    api.fetchCurrencyData(dispatch, currencyDataFetched, currencyDataError);
}

export const getCurrencySymbols = () => (dispatch) => {
    dispatch(currencySymbolsLoading());
    api.fetchCurrencySymbols(dispatch, currencySymbolsFetched, currencySymbolsError);
}

export const getConvertCurrency = (...args) => (dispatch) => {
    dispatch(currencyDataLoading());
    api.fetchConvertCurrency(dispatch, currencyDataFetched, currencyDataError, ...args);
}

export const getChartData = (...args) => (dispatch) => {
    dispatch(currencyTimeseriesLoading());
    api.fetchChartData(dispatch, currencyTimeseriesFetched, currencyTimeseriesError, ...args);
}
