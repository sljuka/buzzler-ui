export const mediaQueries = (small, mid) => ({
  small: `@media (max-width: ${small}px)`,
  medium: `@media (min-width: ${small + 1}px) and (max-width: ${mid}px)`,
  big: `@media (min-width: ${mid + 1}px)`
})
