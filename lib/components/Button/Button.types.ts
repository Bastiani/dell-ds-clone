import { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps } from "tailwind-variants";

import { variants as buttonVariants } from "./Button.variants";

type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  asChild?: boolean;
  "data-testid": string;
} & ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement>;
