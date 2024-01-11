import { LinkWrapper } from "./styles";

import { LinkIcon } from "../../icons";
import { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  kind: "default" | "select" | "disabled";
  options?: "link" | "inline" | "background";
  children?: ReactNode;
}

export const Link = ({ kind, options, children, ...rest }: LinkProps) => {
  return (
    <LinkWrapper kind={kind} options={options} {...rest}>
      {children}
      <LinkIcon kind={kind} options={options} />
    </LinkWrapper>
  );
};

export default Link;
