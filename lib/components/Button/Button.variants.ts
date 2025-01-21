import { tv } from "tailwind-variants";

export const variants = tv({
  base: [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "transition-all",
    "duration-200",
  ],
  variants: {
    variant: {
      primary: ["bg-blue-600", "text-white", "hover:bg-blue-700"],
      secondary: [
        "bg-transparent",
        "border",
        "border-blue-700",
        "text-blue-700",
        "hover:bg-blue-100",
      ],
      tertiary: ["bg-transparent", "text-blue-700", "hover:bg-blue-100"],
    },
    size: {
      sm: ["text-sm", "px-3", "py-2"],
      md: ["text-base", "px-4", "py-2"],
      lg: ["text-lg", "px-6", "py-3"],
    },
  },
  defaultVariants: {
    size: "lg",
    variant: "primary",
  },
});
