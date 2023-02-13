import { useEffect, useRef, useState } from "react";

import { ButtonScrollTo, IconButton } from "components/core";
import MenuIcon from "icons/MenuIcon";
import { Logo } from "shared/Logo";
import styled, { css } from "styled-components";

import { HeaderMobileMenu } from "./HeaderMobileMenu";

export const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const { current } = headerRef;

    if (current) {
      const observerFnc = () => {
        const observer = new IntersectionObserver(
          ([entries]) => {
            setIsPinned(entries.intersectionRatio < 1);
          },
          { threshold: [1] }
        );

        observer.observe(current);

        return () => {
          observer.unobserve(current);
        };
      };

      observerFnc();

      window.addEventListener("scroll", observerFnc);
      window.addEventListener("resize", observerFnc);

      return () => {
        window.removeEventListener("scroll", observerFnc);
        window.removeEventListener("resize", observerFnc);
      };
    }
  }, []);

  return (
    <>
      <Block isPinned={isPinned} />
      <HeaderElement ref={headerRef} isPinned={isPinned}>
        <Nav>
          <LeftColumn>
            <Logo />
          </LeftColumn>
          <LinksGroup>
            <ButtonScrollTo elementId="about-me">About me</ButtonScrollTo>
            <ButtonScrollTo elementId="projects">Projects</ButtonScrollTo>
            <ButtonScrollTo elementId="contact">Contact</ButtonScrollTo>
          </LinksGroup>
          <MobileMenu>
            <IconButton title="Menu" onClick={() => setIsMenuOpen((prev) => !prev)}>
              <MenuIcon />
            </IconButton>
          </MobileMenu>
        </Nav>
        <HeaderMobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          isPinned={isPinned}
        />
      </HeaderElement>
    </>
  );
};

const Block = styled.div<{ isPinned: boolean }>`
  height: 50px;
  transition: background-color 0.2s, backdrop-filter 0.2s;

  ${({ isPinned }) =>
    isPinned &&
    css`
      background-color: ${({ theme }) => theme.background2}85;
      backdrop-filter: blur(12px);

      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    `}
`;

const HeaderElement = styled.header<{ isPinned: boolean }>`
  position: sticky;
  top: -1px;
  right: 0px;
  left: 0px;
  width: 100%;
  z-index: 50;
  transition: background-color 0.2s, backdrop-filter 0.2s;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0px;
    width: 100%;
    transform: translateX(-50%) scaleX(0);
    height: 1px;
    background-color: ${({ theme }) => theme.border1};
    transition: transform 0.2s;
  }

  ${({ isPinned }) =>
    isPinned &&
    css`
      background-color: ${({ theme }) => theme.background2}85;
      backdrop-filter: blur(12px);

      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    `}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 30px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-grow: 1;
`;

const LinksGroup = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 4px;
  }
`;

const MobileMenu = styled.div`
  display: flex;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`;
