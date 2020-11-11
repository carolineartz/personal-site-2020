import React from "react";

import "styled-components/macro";
import { GlobalStyles } from "./globalStyles";
import { Grommet, Box, Text, Heading, ResponsiveContext, HeadingProps } from "grommet";
import { theme } from "./theme";
import { CodingCatEmbed } from "../CodingCatEmbed";
import { Portfolio } from "../Portfolo";
import styled from "styled-components";

const AppContent = () => {
  const screenSize = React.useContext(ResponsiveContext);
  console.log(screenSize);
  const [size] = screenSize === "small" ? ["100px"] : screenSize === "medium" ? ["150px"] : ["150px"];
  return (
    <>
      {/* "page" 1 - intro*/}
      <Box id="section-intro" height="100vh" tag="section">
        <HeadingText fontSize={size}>CAROLINE ARTZ</HeadingText>
        <Box justify="center" align="center" height={{ min: "100vh" }}>
          <CodingCatEmbed />
        </Box>
      </Box>
      {/* "page" 2 - portfolio */}

      <Box id="section-portfolio" height="100vh" tag="section" background="white">
        <Portfolio />
      </Box>
    </>
  );
};

type HeadingTextProps = HeadingProps & {
  fontSize: string;
};

const HeadingText = styled(Heading)<HeadingTextProps>`
  /* font-family: CoreCircus; */
  font-family: Livvic;
  font-weight: 900;
  text-shadow: 0.09em 0.09em 0px #a5cbcc;
  // text-shadow: 10px 10px 0px #3f7fbf;
  position: absolute;
  font-size: ${(props) => props.fontSize};
  mix-blend-mode: color-dodge;
  color: black;
  line-height: 1;
  pointer-events: none;
`;

export default () => {
  return (
    <Grommet css="min-height: 100vh; background-color: #1a1e2d;" theme={theme}>
      <GlobalStyles />
      <AppContent />
    </Grommet>
  );
};
