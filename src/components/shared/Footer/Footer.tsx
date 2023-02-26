import { Typography } from "components/core";

export const Footer = () => {
  return (
    <footer className="flex flex-col py-[64px] px-[24px] bg-background2 border-t border-border1">
      <div className="flex flex-col max-w-[1240px] w-full mx-auto">
        <Typography className="text-l">
          Copyright &copy; {new Date().getFullYear()} Adrian Piątek. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
};
