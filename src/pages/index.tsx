import { Box } from "@material-ui/core";
import React from "react";
import { HeaderLayout, PageLayout, PageContent, Lines, HeroPageTitle, HeroPageDescription } from "../components";
import styled from "@emotion/styled";

const PortraitImage = styled.img`
  width: 35%;
`;

export default function Home() {
  return (
    <PageLayout>
      <HeaderLayout title="CV" />
      <Lines />
      <PageContent>
        <Box>
          <HeroPageTitle>
            Eugene <br /> Belkovich
          </HeroPageTitle>
          <HeroPageDescription>software engineer</HeroPageDescription>
        </Box>

        <PortraitImage src="/images/photos/main.webp" alt="portrait" />
      </PageContent>
    </PageLayout>
  );
}
