import styled from "@emotion/styled";

export const HeroPageTitle = styled.h1`
  font-size: 6em;
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
  margin: 0;
  padding: 0;
`;

export const HeroPageDescription = styled.h3`
  font-size: 3em;
  font-weight: ${(p) => p.theme.typography.fontWeightBold};
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.identifier};
`;
export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.declaration};
  margin: 0 0 20px 0;
`;
