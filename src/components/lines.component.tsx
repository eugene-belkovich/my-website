import React, { memo } from "react";
import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

const color1 = "#C98287";
const color2 = "#C3A201";
const color3 = "#9C8EBE";
const color4 = "#222222";
const color5 = "#C84204";
const color6 = "#B3C1AA";

const colors = [color1, color2, color3, color4, color5, color6];
const Line = styled.div<{ color: string }>`
  background-color: ${(p) => p.color};
  width: 6px;
  height: 100vh;
`;

export const Lines = memo(() => (
  <Box position="absolute" left="80%" display="flex" height="100%">
    {[...colors, ...colors].map((color, index) => (
      <Line key={`${index}-${color}`} color={color} />
    ))}
  </Box>
));
