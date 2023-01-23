import { Box } from "../Box";
import React from "react";
import Container from "../Container";

import { HeaderEl, Logo } from "./index.style";

interface IProp {
  children?: React.ReactNode;
}

const Header: React.FC<IProp> = ({ children }) => {
  return (
    <HeaderEl>
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Logo to="/">CoinInfo</Logo>

          {children ? children : null}
        </Box>
      </Container>
    </HeaderEl>
  );
};

export default Header;
