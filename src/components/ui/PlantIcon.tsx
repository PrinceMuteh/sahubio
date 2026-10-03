/** Line illustration of a seedling used on the call-to-action banner. */
export function PlantIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 68 74"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 68.5h50" />
      <path d="M35 68.5c0-8.5-2.4-16.4-1.5-24.5.7-6 2.6-11 7.6-16" />
      <path d="M33.5 37c-4.5-7-13.5-12-22.5-11.5-3.5.2-5.5 1.5-5 3.5 2 8 12 15.5 21 14 4-.7 6.5-3 6.5-6Z" />
      <path d="M41.1 28c-1-10 4.9-19 15.9-21.5 3.5-.7 5.8 0 5.5 2.5-1 9-7.5 17-16.5 18.5-2 .3-4 .5-4.9.5Z" />
    </svg>
  );
}
