import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../../Services/cryptoApi";
import millify from "millify";

const styles = {
  card: {
    maxWidth: 400,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    marginRight: "1rem",
  },
  content: {
    textDecoration: "none",
  },
  cardHeader: {
    fontSize: "16px",
    letterSpacing: "1px",
  },
  cardDescription: {
    fontSize: "14px",
  },
};

const CryptoCoins = ({ simplified }) => {
  // only top 10 coins details will show in home page
  // this is why we pass props called simplified in home.jsx
  const count = simplified ? 10 : 100;
  // reserve data in cryptoList
  const { data: cryptoList, isFetching } = useGetCoinsQuery(count);

  // using optional chaining to avoiding undefined
  const [cryptoCoins, setCryptoCoins] = useState(cryptoList?.data?.coins);
  const [searchCoin, setSearchCoin] = useState("");

  // filter functionality
  useEffect(() => {
    const filterCoin = cryptoList?.data.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    );
    setCryptoCoins(filterCoin);
  }, [cryptoList, searchCoin]);

  if (isFetching) return <Typography variant="h1">Loading...</Typography>;

  return (
    <>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
          sx={{ marginTop: "50px", marginBottom: "30px" }}
        >
          <Typography variant="h4">Top 10 Crypto Currencies</Typography>
          <Link style={styles.content} to="/crypto-coins">
            <Typography variant="h6">Show All</Typography>
          </Link>
        </Stack>
        {/* search field will not be show in home page */}
        {!simplified && (
          <TextField
            onChange={(e) => {
              setSearchCoin(e.target.value);
            }}
            id="outlined-basic"
            label="Search Coin"
            variant="outlined"
          />
        )}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cryptoCoins?.map((coin) => (
            <Grid item xs={2} sm={4} md={3} key={coin.uuid}>
              <Link to={`crypto-coins/${coin.name}`} style={styles.content}>
                <Card style={styles.card}>
                  <CardHeader
                    title={
                      <div style={styles.header}>
                        <Typography variant="h6" style={styles.cardHeader}>
                          {coin.rank}.{coin.name}
                        </Typography>
                        <Avatar
                          src={coin.iconUrl}
                          alt={coin.name}
                          variant="square"
                          style={styles.avatar}
                        />
                      </div>
                    }
                  />
                  <CardContent>
                    <Typography variant="body1" style={styles.cardDescription}>
                      Price: {millify(coin.price)}
                    </Typography>
                    <Typography variant="body1" style={styles.cardDescription}>
                      Exchange : {millify(coin.change)}
                    </Typography>
                    <Typography variant="body1" style={styles.cardDescription}>
                      Market Cap: {millify(coin.marketCap)}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CryptoCoins;
