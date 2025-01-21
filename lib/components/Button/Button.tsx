import { forwardRef } from 'react'

import { variants } from './Button.styles'

import type * as T from './Button.types'

const Button = forwardRef<HTMLButtonElement, T.ButtonProps>(
  ({ size, variant, className, disabled, color, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={variants({ size, variant, color, className })}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export default Button
