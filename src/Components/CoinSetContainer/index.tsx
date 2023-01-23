import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCoins } from "../API";
import React from "react";
import { LoadMoreBtn } from "./index.styled";
import Loader from "../Loader";
import { ICoin } from "../Types";
import TableCoinSet from "../TableCoinSet";
import { Box } from "../Box";

const CoinSetContainer: React.FC = () => {
  type TCoins = ICoin[] | [];
  const [coins, setCoins] = useState<TCoins>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCoins(page)
      .then((coins) => setCoins((prevCoins) => [...prevCoins, ...coins]))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);
  if (loading) {
    return <Loader />;
  }

  return (
    <Box as="section">
      <TableCoinSet coins={coins} />
      <LoadMoreBtn
        type="button"
        onClick={() => {
          setPage((currentPage) => currentPage + 1);
        }}
      >
        Load more
      </LoadMoreBtn>
      <Outlet />
    </Box>
  );
};

export default CoinSetContainer;
