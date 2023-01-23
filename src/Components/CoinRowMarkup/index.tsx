// import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import React from "react";
import { Box } from "../Box";
import PriceChange from "../PriceChange";
import { toFixPrice } from "../Tools";
import { CoinLink, CoinName } from "./index.style";
import { ICoin } from "../Types";

interface IProp {
  coin: ICoin;
}

const CoinRowMarkup: React.FC<IProp> = ({ coin }) => {
  const {
    id,
    name,
    market_cap_rank,
    image,
    current_price,
    price_change_24h,
    market_cap,
  } = coin;

  const changedPrice = Number(toFixPrice(price_change_24h));

  return (
    <>
      <td>{market_cap_rank}</td>

      <td>
        <CoinLink to={`/${id}`}>
          <Box display="flex" alignItems="center">
            <img src={image} alt={name} width="50px" />
            <CoinName> {name}</CoinName>
          </Box>
        </CoinLink>
      </td>
      <td>{current_price}$</td>
      <td>
        <PriceChange price={changedPrice} sign="$" />
      </td>

      <td>$ {market_cap} </td>
    </>
  );
};
export default CoinRowMarkup;
