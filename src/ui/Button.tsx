import React from 'react';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: 'primary' | 'ghost';
asChild?: boolean;
href?: string;
};


export function Button({ variant = 'primary', className = '', asChild, href, ...props }: ButtonProps) {
const base = 'inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-semibold shadow-sm active:translate-y-px transition';
const variantClass = variant === 'primary'
? 'bg-brand-600 text-white hover:bg-brand-700'
: 'border border-brand-100 text-brand-700 bg-transparent';
const classes = `${base} ${variantClass} ${className}`.trim();


if (asChild && href) {
return <a href={href} className={classes}>{props.children}</a>;
}
return <button className={classes} {...props} />;
}