import { stockSymbol } from './stockData';

export const apiPriceChangeURL = `https://financialmodelingprep.com/api/v3/stock-price-change/${stockSymbol}?apikey=${process.env.REACT_APP_FMP_API_KEY}`;

export const apiImgURL = (symbol) => `https://financialmodelingprep.com/image-stock/${symbol}.png`;

export const apiDetails = (queryFunction, symbol) => `https://www.alphavantage.co/query?function=${queryFunction}&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;

export const apiFinnhubPrice = (symbol, resolution, fromUnixTimeStamp, toUnixTimeStamp) => `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${fromUnixTimeStamp}&to=${toUnixTimeStamp}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`;
export const apiFinnhubCurrentPrice = (symbol) => `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`;
