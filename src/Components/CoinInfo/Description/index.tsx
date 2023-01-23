import React from "react";
import { Box } from "../../Box";
import { Title, Text } from "./index.styled";
interface IProp {
  text: string;
}

const Description: React.FC<IProp> = ({ text }) => {
  return (
    <Box maxWidth="600px" m="0 auto">
      <Title>Description</Title>
      {text.length ? (
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <Text>Oops, there is no description for this coin</Text>
      )}
    </Box>
  );
};

export default Description;
