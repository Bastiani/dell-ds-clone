import { forwardRef } from "react";

import { variants } from "./Button.variants";

import type * as T from "./Button.types";

const Button = forwardRef<HTMLButtonElement, T.ButtonProps>(
  ({ size, variant, className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={variants({ size, variant, className })}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
