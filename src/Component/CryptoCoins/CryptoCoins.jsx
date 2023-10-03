import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
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
  
  const { data, isFetching } = useGetCoinsQuery();
  // using optional chaining to avoiding undefined
  const allCoins = data?.data?.coins;

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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allCoins?.map((coin) => (
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
