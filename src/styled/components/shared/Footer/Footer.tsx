import { Typography } from "components/core";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterSection>
      <InnerWrapper>
        <Typography size="l">
          Copyright &copy; {new Date().getFullYear()} Adrian Piątek. All Rights Reserved.
        </Typography>
      </InnerWrapper>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 64px 24px;
  background-color: ${({ theme }) => theme.background2};
  border-top: 1px solid ${({ theme }) => theme.border1};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;
