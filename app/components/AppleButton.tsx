import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type AppleButtonVariant = "primary" | "dark" | "outline" | "link";

type AppleButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: AppleButtonVariant;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

const variantClass: Record<AppleButtonVariant, string> = {
  primary: "apple-button apple-button-primary",
  dark: "apple-button apple-button-dark",
  outline: "apple-button apple-button-outline",
  link: "apple-link-button",
};

export function AppleButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: AppleButtonProps) {
  const classes = `${variantClass[variant]} apple-focus ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
