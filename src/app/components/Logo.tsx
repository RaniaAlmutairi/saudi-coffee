import { motion } from "motion/react";

interface LogoProps {
  size?: number;
  animated?: boolean;
}

export function Logo({ size = 200, animated = false }: LogoProps) {
  const Container = animated ? motion.svg : 'svg';
  const Path = animated ? motion.path : 'path';
  const Circle = animated ? motion.circle : 'circle';
  
  return (
    <Container
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...(animated && {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" }
      })}
    >
      {/* Simple solid colors - professional developer palette */}
      <defs>
        {/* No gradients - using solid basic colors */}
      </defs>

      {/* Hexagon background - representing cells/structure in web development */}
      <Path
        d="M 100 20 L 160 60 L 160 140 L 100 180 L 40 140 L 40 60 Z"
        fill="#0EA5E9"
        opacity="0.1"
        {...(animated && {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 0.1 },
          transition: { duration: 0.6 }
        })}
      />

      {/* Code brackets with pixel/grid style */}
      {/* Left bracket < with nodes */}
      <Path
        d="M 70 65 L 50 85 L 50 115 L 70 135"
        stroke="#0EA5E9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...(animated && {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1, delay: 0.3 }
        })}
      />
      <Circle
        cx="50"
        cy="85"
        r="3"
        fill="#0EA5E9"
        {...(animated && {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.3, delay: 0.6 }
        })}
      />
      <Circle
        cx="50"
        cy="115"
        r="3"
        fill="#0EA5E9"
        {...(animated && {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.3, delay: 0.7 }
        })}
      />

      {/* Right bracket > with nodes */}
      <Path
        d="M 130 65 L 150 85 L 150 115 L 130 135"
        stroke="#0EA5E9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...(animated && {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1, delay: 0.4 }
        })}
      />
      <Circle
        cx="150"
        cy="85"
        r="3"
        fill="#0EA5E9"
        {...(animated && {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.3, delay: 0.8 }
        })}
      />
      <Circle
        cx="150"
        cy="115"
        r="3"
        fill="#0EA5E9"
        {...(animated && {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.3, delay: 0.9 }
        })}
      />

      {/* Creative "R" formed with geometric shapes and the forward slash */}
      {/* Vertical bar */}
      <Path
        d="M 80 70 L 80 130"
        stroke="#1E293B"
        strokeWidth="7"
        strokeLinecap="round"
        {...(animated && {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.6, delay: 0.6 }
        })}
      />

      {/* Top curve of R - more geometric/modern */}
      <Path
        d="M 80 70 L 105 70 C 118 70, 120 78, 120 87 C 120 96, 118 100, 105 100 L 80 100"
        stroke="#1E293B"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        {...(animated && {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.8, delay: 0.8 }
        })}
      />

      {/* Diagonal leg styled as forward slash "/" - in orange accent */}
      <Path
        d="M 95 100 L 118 130"
        stroke="#F97316"
        strokeWidth="7"
        strokeLinecap="round"
        {...(animated && {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.6, delay: 1 }
        })}
      />

      {/* Decorative elements - pixels/dots representing digital/web */}
      {/* Orange accent dots */}
      <Circle
        cx="125"
        cy="70"
        r="4"
        fill="#F97316"
        {...(animated && {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.3, delay: 1.2 }
        })}
      />
      
      {/* Small grid dots - representing code structure */}
      <Circle cx="70" cy="100" r="2" fill="#0EA5E9" opacity="0.6" />
      <Circle cx="122" cy="115" r="2" fill="#0EA5E9" opacity="0.6" />
    </Container>
  );
}