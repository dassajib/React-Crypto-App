import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import CryptoCoins from "../Component/CryptoCoins/CryptoCoins";
import Exchanges from "../Component/Exchanges/Exchanges";
import News from "../Component/News/News";
import CoinDetails from "../Component/CoinDetails/CoinDetails";
import NotFound from "../Component/NotFound/NotFound";
import Header from "../Component/Header/Header";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/crypto-coins" element={<CryptoCoins />} />
          <Route exact path="/crypto-coins/:coinName" element={<CoinDetails />} />
          <Route exact path="/exchanges" element={<Exchanges />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
