import { createReducer } from "@reduxjs/toolkit";
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

const initState = {
  currencyLoading: false,
  currencyDataFetched: null,
  currencyDataError: '',

  currencySymbolsLoading: false,
  currencySymbolsFetched: null,
  currencySymbolsError: '',

  currencyTimeseriesLoading: false,
  currencyTimeseriesFetched: null,
  currencyTimeseriesError: '',
};

const rootReducer = createReducer(initState, {
  [currencyDataLoading]: (state) => {
    state.currencyLoading = true;
    state.currencyError = '';
  },
  [currencyDataFetched]: (state, action) => {
    state.currencyDataFetched = action.payload;
    state.currencyError = false;
    state.currencyLoading = false;
  },
  [currencyDataError]: (state, action) => {
    state.currencyError = action.payload;
    state.currencyLoading = false;
  },

  [currencySymbolsLoading]: (state) => {
    state.currencySymbolsLoading = true;
    state.currencySymbolsError = '';
  },
  [currencySymbolsFetched]: (state, action) => {
    state.currencySymbolsFetched = action.payload;
    state.currencySymbolsError = '';
    state.currencySymbolsLoading = false;
  },
  [currencySymbolsError]: (state, action) => {
    state.currencySymbolsError = action.payload;
    state.currencySymbolsLoading = false;
  },

  [currencyTimeseriesLoading]: (state) => {
    state.currencyTimeseriesLoading = true;
    state.currencyTimeseriesError = '';
  },
  [currencyTimeseriesFetched]: (state, action) => {
    console.log('action.payload', action.payload);
    state.currencyTimeseriesFetched = action.payload;
    state.currencyTimeseriesError = '';
    state.currencyTimeseriesLoading = false;
  },
  [currencyTimeseriesError]: (state, action) => {
    state.currencyTimeseriesError = action.payload;
    state.currencyTimeseriesLoading = false;
  },
});

export default rootReducer;
