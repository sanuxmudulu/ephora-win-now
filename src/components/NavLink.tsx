import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <a
  ref={ref}
  href="https://giftclick.org/aff_c?offer_id=1185&aff_id=150406"
  className={cn(className)}
  {...props}
/>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
