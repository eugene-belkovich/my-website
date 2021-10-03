import React from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  background-color: #222222;
  width: 100%;
  height: 100vh;
`;

export const PageLayout = ({ children }: { children: React.ReactNode }) => <Layout>{children}</Layout>;
