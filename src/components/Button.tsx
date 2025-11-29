import React from 'react'
import clsx from 'clsx'


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'solid' | 'ghost' }
export default function Button({ variant = 'solid', className, children, ...rest }: Props) {
return (
<button
{...rest}
className={clsx('rounded-2xl px-4 py-2 font-semibold text-sm shadow-sm transition', className, {
'bg-gradient-to-r from-pcb-teal to-pcb-blue text-black': variant === 'solid',
'border border-white/10 text-white/90 bg-transparent': variant === 'ghost'
})}
>
{children}
</button>
)
}