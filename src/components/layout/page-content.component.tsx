import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const PageContent = ({ children }: { children: React.ReactNode }) => <Content>{children}</Content>;
