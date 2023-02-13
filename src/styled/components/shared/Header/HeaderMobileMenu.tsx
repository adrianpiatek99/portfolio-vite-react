import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";

import { ButtonScrollTo, IconButton } from "components/core";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "icons/CloseIcon";
import styled from "styled-components";

interface HeaderMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isPinned: boolean;
}

export const HeaderMobileMenu = ({ isOpen, onClose, isPinned }: HeaderMobileMenuProps) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClick={onClose} />
          <FocusLock autoFocus={false}>
            <Panel
              isPinned={isPinned}
              initial="inactive"
              animate="active"
              exit="inactive"
              variants={panelVariants}
            >
              <TopRow>
                <IconButton title="Close" onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </TopRow>
              <Menu>
                <li>
                  <ButtonScrollTo onClick={onClose} elementId="about-me" fullWidth textAlign="left">
                    About me
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo onClick={onClose} elementId="projects" fullWidth textAlign="left">
                    Projects
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo onClick={onClose} elementId="contact" fullWidth textAlign="left">
                    Contact
                  </ButtonScrollTo>
                </li>
              </Menu>
            </Panel>
          </FocusLock>
        </>
      )}
    </AnimatePresence>,
    document.getElementById("modals")!
  );
};

const panelVariants = {
  inactive: {
    scale: 0.85,
    opacity: 0,
    originY: 0,
    transition: { duration: 0.15 }
  },
  active: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.15 }
  }
};

const Panel = styled(motion.div)<{ isPinned: boolean }>`
  position: fixed;
  top: ${({ isPinned }) => (isPinned ? "10px" : "60px")};
  right: 17px;
  left: 17px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border1};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background2};
  z-index: 55;
  box-shadow: 0 4px 7px ${({ theme }) => theme.background1};
  transition: top 0.1s;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0px;
`;
