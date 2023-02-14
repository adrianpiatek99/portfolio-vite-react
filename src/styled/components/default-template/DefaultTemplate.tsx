import { Footer } from "shared/Footer";
import { Header } from "shared/Header";
import styled from "styled-components";

import { DefaultTemplateAboutMe } from "./DefaultTemplateAboutMe";
import { DefaultTemplateBackground } from "./DefaultTemplateBackground";
import { DefaultTemplateContact } from "./DefaultTemplateContact";
import { DefaultTemplateProjects } from "./DefaultTemplateProjects";

export const DefaultTemplate = () => {
  return (
    <Main>
      <Header />
      <InnerWrapper>
        <DefaultTemplateBackground />
        <DefaultTemplateAboutMe />
        <DefaultTemplateProjects />
        <DefaultTemplateContact />
      </InnerWrapper>
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
`;
