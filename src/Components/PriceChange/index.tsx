import React from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { PriceSpan } from "./index.styled";

interface IProps {
  price: number;
  sign?: string;
}

const PriceChange: React.FC<IProps> = ({ price, sign = "%" }) => {
  if (price > 0) {
    return (
      <PriceSpan style={{ color: "yellowgreen" }}>
        {price}
        {sign} <HiTrendingUp color="inherit" size="1.5rem" />
      </PriceSpan>
    );
  }
  if (price < 0) {
    return (
      <PriceSpan style={{ color: "tomato" }}>
        {price}
        {sign} <HiTrendingDown color="tomato" size="1.5rem " />
      </PriceSpan>
    );
  }

  return <PriceSpan style={{ color: "blue" }}>0</PriceSpan>;
};
export default PriceChange;
