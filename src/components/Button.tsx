import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center items-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center items-center rounded-lg border font-medium py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
};

const variantStyles = {
  solid: {
    splendor: 'relative overflow-hidden bg-secondary text-white before:absolute before:inset-0 active:before:bg-transparent enabled:hover:before:bg-white/10 active:bg-splendor-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-splendor-900 enabled:hover:bg-white/90 active:bg-white/90 active:text-splendor-900/70',
    gray: 'bg-gray-800 text-white enabled:hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-white text-white enabled:hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
};

type ButtonProps = (
  | {
    variant?: 'solid'
    color?: keyof typeof variantStyles.solid
  }
  | {
    variant: 'outline'
    color?: keyof typeof variantStyles.outline
  }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })
  ) & {
    loading?: boolean
  }

const ButtonLoadingState = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        className="pointer-events-none h-5 w-5 animate-spin"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fillOpacity="0"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export function Button({ className, loading, children, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
    "disabled:cursor-not-allowed disabled:opacity-50",
    loading && "relative"
  );

  const content = (
    <>
      {loading && <ButtonLoadingState />}
      <span className={`${loading ? "invisible" : ""} flex items-center justify-center`}>{children}</span>
    </>
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} disabled={loading} {...props}>
      {content}
    </button>
  ) : (
    <Link className={className} {...props}>
      {content}
    </Link>
  );
};
