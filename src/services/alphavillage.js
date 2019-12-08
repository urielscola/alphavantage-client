import instance, { headers } from './instance';
import { toUnixEpoch, formatDate } from '../helpers/datetime';

const API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_TOKEN;
const url = process.env.REACT_APP_ALPHA_VANTAGE_API_URL;

const clearObject = payload => {
  return JSON.parse(JSON.stringify(payload).replace(/[0-9. ](?=\D+":)/g, ''));
};

const API = {
  getSymbols: async ({ keywords }) => {
    const { data } = await instance({
      url,
      method: 'GET',
      params: {
        keywords,
        apikey: API_KEY,
        function: 'SYMBOL_SEARCH'
      },
      headers: headers()
    });

    return clearObject(data.bestMatches);
  },

  getTimeSeriesDaily: async ({ symbol }) => {
    const { data } = await instance({
      url,
      method: 'GET',
      params: {
        symbol,
        apikey: API_KEY,
        interval: '5min',
        function: 'TIME_SERIES_DAILY'
      },
      headers: headers()
    });

    const transform = input =>
      Object.entries(input).map(([key, value]) => ({
        ...clearObject(value),
        date: key,
        timestamp: toUnixEpoch(key),
        formattedDate: formatDate(key)
      }));

    const payload = transform(data['Time Series (Daily)']);

    return payload;
  },

  getTimeSeriesIntraday: async ({ symbol }) => {
    const { data } = await instance({
      url,
      method: 'GET',
      params: {
        symbol,
        apikey: API_KEY,
        interval: '5min',
        function: 'TIME_SERIES_INTRADAY'
      },
      headers: headers()
    });

    const payload = clearObject(data['Time Series (5min)']);

    return payload;
  }
};

export default API;
