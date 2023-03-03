import { createAction } from "@reduxjs/toolkit";
import {
  CURRENCY_DATA_LOADING,
  CURRENCY_DATA_FETCHED,
  CURRENCY_DATA_ERROR,
  CURRENCY_SYMBOLS_LOADING,
  CURRENCY_SYMBOLS_FETCHED,
  CURRENCY_SYMBOLS_ERROR,
  CURRENCY_TIMESERIES_LOADING,
  CURRENCY_TIMESERIES_FETCHED,
  CURRENCY_TIMESERIES_ERROR,
} from '../constants/actionConstants';
// currency rate 
export const currencyDataLoading = createAction(CURRENCY_DATA_LOADING);
export const currencyDataFetched = createAction(CURRENCY_DATA_FETCHED);
export const currencyDataError = createAction(CURRENCY_DATA_ERROR);

// currency symbols list 
export const currencySymbolsLoading = createAction(CURRENCY_SYMBOLS_LOADING);
export const currencySymbolsFetched = createAction(CURRENCY_SYMBOLS_FETCHED);
export const currencySymbolsError = createAction(CURRENCY_SYMBOLS_ERROR);

// historic currency rate 
export const currencyTimeseriesLoading = createAction(CURRENCY_TIMESERIES_LOADING);
export const currencyTimeseriesFetched = createAction(CURRENCY_TIMESERIES_FETCHED);
export const currencyTimeseriesError = createAction(CURRENCY_TIMESERIES_ERROR);
