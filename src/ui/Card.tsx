import React from 'react';


type CardProps = React.HTMLAttributes<HTMLDivElement>;


export function Card({ className = '', ...props }: CardProps) {
const base = 'bg-white rounded-xl shadow-elev';
return <div className={`${base} ${className}`.trim()} {...props} />;
}