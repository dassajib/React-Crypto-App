import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useGetCoinsQuery } from "../../Services/cryptoApi";
import millify from "millify";
import CryptoCoins from "../CryptoCoins/CryptoCoins";
import News from "../News/News";

const Home = () => {
  const cryptoItemRender = import.meta.env.VITE_REACT_APP_FRONT_PAGE_CRYPTO_ITEM_RENDER;
  const { data, isFetching } = useGetCoinsQuery(cryptoItemRender);
  // using optional chaining to avoiding undefined
  const coinsStats = data?.data?.stats;

  if (isFetching) return <Typography variant="h1">Loading...</Typography>;

  return (
    <>
      <Container sx={{ marginTop: "14px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Global Crypto Currency Statistics
        </Typography>
        <Container sx={{ marginTop: "24px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sm={3}>
              <Typography
                sx={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
                variant="h6"
              >
                Total Crypto Currencies
              </Typography>
              <Typography variant="h5">
                {millify(coinsStats.totalCoins)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sm={3}>
              <Typography
                sx={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
                variant="h6"
              >
                Total Exchanges
              </Typography>
              <Typography variant="h5">
                {millify(coinsStats.totalExchanges)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sm={3}>
              <Typography
                sx={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
                variant="h6"
              >
                Total Market Cap
              </Typography>
              <Typography variant="h5">
                {millify(coinsStats.totalMarketCap)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sm={3}>
              <Typography
                sx={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
                variant="h6"
              >
                Total Volume
              </Typography>
              <Typography variant="h5">
                {millify(coinsStats.total24hVolume)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sm={3}>
              <Typography
                sx={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
                variant="h6"
              >
                Total Markets
              </Typography>
              <Typography variant="h5">
                {millify(coinsStats.totalMarkets)}
              </Typography>
            </Grid>
          </Grid>
        </Container>
        {/* here passes props simplified for conditional purpose and by default it is true */}
        <CryptoCoins simplified />
        <News simplified />
      </Container>
    </>
  );
};

export default Home;
