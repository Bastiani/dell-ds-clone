import { ButtonHTMLAttributes, ReactNode } from 'react'
import { type VariantProps } from 'tailwind-variants'

import { variants as buttonVariants } from './Button.styles'

type ButtonVariants = VariantProps<typeof buttonVariants>

export type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  'data-testid': string
} & ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement>
