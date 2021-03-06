import React from "react";
import styled from "@emotion/styled";

import { ThemeProvider } from "../contexts";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <PageWrapper>{children}</PageWrapper>
  </ThemeProvider>
);

export default layout;
