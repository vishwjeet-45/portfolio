import { Star } from 'lucide-react';

// Read-only star display
export function StarRating({ rating = 0, size = 15 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= Math.round(rating) ? 'text-amber fill-amber' : 'text-line'}
        />
      ))}
    </div>
  );
}

// Interactive star picker for forms
export function StarPicker({ value = 0, onChange, size = 22 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className="transition-transform hover:scale-110"
          aria-label={`${n} star`}
        >
          <Star size={size} className={n <= value ? 'text-amber fill-amber' : 'text-line'} />
        </button>
      ))}
    </div>
  );
}
