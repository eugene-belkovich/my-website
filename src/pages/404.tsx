import React from "react";
import styled from "@emotion/styled";

import { HeaderLayout, PageLayout } from "../components";

const PageContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
  color: ${(p) => p.theme.palette.text.primary};
`;
const ImageWrapper = styled.div`
  width: 150px;
  margin: 0 auto;
  img {
    filter: invert(1);
  }
`;
const Text = styled.p`
  text-align: center;
  color: ${(p) => p.theme.palette.text.primary};
`;

export default function NotFoundPage() {
  return (
    <>
      <HeaderLayout title="Page Not Found" />
      <PageLayout>
        <HeaderLayout title="Page Not Found" />
        <PageContent>
          <MainTitle>404 Page Not Found</MainTitle>
          <ImageWrapper>
            <img src="/svg/ufo-and-cow.svg" alt="ufo and cow" />
          </ImageWrapper>
          <Text>
            Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
          </Text>
        </PageContent>
      </PageLayout>
    </>
  );
}
