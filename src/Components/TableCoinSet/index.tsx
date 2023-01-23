// import CoinRowMarkup from "../../OldProject/Components/CoinRowMarkup";
import { Table } from "./index.styled";
import { ICoin } from "../Types";
import React from "react";
import CoinRowMarkup from "../CoinRowMarkup";
interface IProp {
  coins: ICoin[];
}

const TableCoinSet: React.FC<IProp> = ({ coins }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price changed in 24H</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.id}>
            <CoinRowMarkup coin={coin} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableCoinSet;
