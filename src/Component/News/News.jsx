import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const styles = {
  content: {
    textDecoration: "none",
  },
};

const News = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
          sx={{ marginTop: "50px" }}
        >
          <Typography variant="h4">Top News about Crypto Currencies</Typography>
          <Link style={styles.content} to="/news">
            <Typography variant="h6">Show All</Typography>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default News;
