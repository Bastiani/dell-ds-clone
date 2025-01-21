import { tv } from 'tailwind-variants'

export const variants = tv({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-200',
    'disabled:bg-grey-200',
    'disabled:stroke-grey-400',
    'disabled:text-grey-400',
    'disabled:cursor-not-allowed',
    'text-white'
  ],
  variants: {
    variant: {
      primary: ['bg-blue-600', 'hover:bg-blue-700', 'active:bg-blue-800'],
      secondary: [
        'bg-transparent',
        'border',
        'border-blue-700',
        'text-blue-700',
        'hover:bg-blue-100',
        'active:bg-blue-200'
      ],
      tertiary: ['bg-transparent', 'text-blue-700', 'hover:bg-blue-100', 'active:bg-blue-200']
    },
    size: {
      sm: ['text-sm', 'px-3', 'py-2'],
      md: ['text-base', 'px-4', 'py-2'],
      lg: ['text-lg', 'px-6', 'py-3']
    },
    color: {
      default: ['bg-blue-600', 'hover:bg-blue-700', 'active:bg-blue-800'],
      destructive: ['bg-red-600', 'hover:bg-red-700', 'active:bg-red-800'],
      transactional: ['bg-green-600', 'hover:bg-green-700', 'active:bg-green-800'],
      editorial: ['bg-gray-900', 'hover:bg-gray-700', 'active:bg-gray-800']
    }
  },
  defaultVariants: {
    size: 'lg',
    variant: 'primary'
  }
})
