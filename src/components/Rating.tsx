import { Star } from './Icons';


export const Rating: React.FC<{ value: number }> = ({ value }) => (
  <div aria-label={`${value} de 5`} className="inline-flex gap-1 text-amber-500">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={i < value ? 'opacity-100' : 'opacity-30'} />
    ))}
  </div>
);