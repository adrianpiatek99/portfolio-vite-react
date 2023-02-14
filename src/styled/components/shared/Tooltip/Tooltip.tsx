import type { ComponentPropsWithoutRef, ReactElement } from "react";

import Tippy from "@tippyjs/react";
import styled from "styled-components";

interface TooltipProps extends Omit<ComponentPropsWithoutRef<typeof Tippy>, "theme"> {
  children: ReactElement;
  content: string;
}

export const Tooltip = ({ children, content, ...props }: TooltipProps) => {
  return content ? (
    <TippyWrapper
      hideOnClick
      content={content}
      arrow={false}
      touch={["hold", 200]}
      placement="bottom"
      delay={[200, 0]}
      offset={[0, 7]}
      {...props}
    >
      {children}
    </TippyWrapper>
  ) : (
    children
  );
};

const TippyWrapper = styled(Tippy)`
  background-color: ${({ theme }) => theme.gray}40;
  color: ${({ theme }) => theme.color1};
  padding: 6px 8px;
  border-radius: 6px;
  ${({ theme }) => theme.text.xs}
`;
