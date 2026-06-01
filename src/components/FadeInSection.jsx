import { Box } from '@mui/material';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

/**
 * FadeInSection
 * Wraps any content and fades it in (+ slides up) when it enters the viewport.
 *
 * Props:
 *  - delay     : animation delay in seconds  (default 0)
 *  - duration  : animation duration in seconds (default 0.7)
 *  - direction : 'up' | 'down' | 'left' | 'right'  (default 'up')
 *  - distance  : how far to slide in px (default 30)
 */
export default function FadeInSection({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  distance = 30,
  sx = {},
}) {
  const { ref, visible } = useFadeOnScroll();

  const getTransform = (isVisible) => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'down':  return `translateY(-${distance}px)`;
      case 'left':  return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'up':
      default:      return `translateY(${distance}px)`;
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: getTransform(visible),
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}