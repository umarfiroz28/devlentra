import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type AppleButtonVariant = "primary" | "dark" | "outline" | "link";

type AppleButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: AppleButtonVariant;
};

type AppleButtonLinkProps = AppleButtonBaseProps &
  { href: string } &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type AppleButtonNativeProps = AppleButtonBaseProps &
  { href?: never } &
  ButtonHTMLAttributes<HTMLButtonElement>;

type AppleButtonProps = AppleButtonLinkProps | AppleButtonNativeProps;

const variantClass: Record<AppleButtonVariant, string> = {
  primary: "apple-button apple-button-primary",
  dark: "apple-button apple-button-dark",
  outline: "apple-button apple-button-outline",
  link: "apple-link-button",
};

function isLinkButton(props: AppleButtonProps): props is AppleButtonLinkProps {
  return typeof props.href === "string";
}

function getElementProps<T extends AppleButtonBaseProps>(
  props: T,
): Omit<T, keyof AppleButtonBaseProps> {
  const elementProps = { ...props };

  Reflect.deleteProperty(elementProps, "children");
  Reflect.deleteProperty(elementProps, "className");
  Reflect.deleteProperty(elementProps, "variant");

  return elementProps as Omit<T, keyof AppleButtonBaseProps>;
}

export function AppleButton(props: AppleButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const classes = `${variantClass[variant]} apple-focus ${className}`.trim();

  if (isLinkButton(props)) {
    const anchorProps = getElementProps(props);

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = getElementProps(props);

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
