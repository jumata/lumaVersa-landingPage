import React from 'react';


type ChipProps = React.HTMLAttributes<HTMLSpanElement>;


export function Chip({ className = '', ...props }: ChipProps) {
const base = 'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold bg-brand-50 text-brand-700';
return <span className={`${base} ${className}`.trim()} {...props} />;
}