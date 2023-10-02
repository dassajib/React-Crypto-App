import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//   rapid api headers
const cryptoHeaders = {
  "X-RapidAPI-Key": "8cf55815aemshcfe908feaec3141p1f4a8ejsn4fe6b67e9451",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

//   rapid api base url
const baseUrl = "https://coinranking1.p.rapidapi.com";

// to access api data we need to pass headers with url.
// so, this function will take headers as obj and url
const createRequest = (url) => ({ url, headers: cryptoHeaders });

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      // to access api data we need to pass headers with url
      query: () => createRequest("/coins"),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery } = cryptoApi;
