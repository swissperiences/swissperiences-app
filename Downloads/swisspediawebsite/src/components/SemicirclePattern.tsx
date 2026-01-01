// Semicircle pattern component - Brand element from Studio Véras design system
// Used subtly as background texture to enhance brand consistency

interface SemicirclePatternProps {
  opacity?: number;
  color?: string;
}

export const SemicirclePattern = ({
  opacity = 0.03,
  color = '#2C2F3B'
}: SemicirclePatternProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="semicircle-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Top-left semicircle */}
            <path
              d="M 0 60 A 60 60 0 0 1 60 0 L 0 0 Z"
              fill={color}
              opacity={opacity}
            />
            {/* Bottom-right semicircle */}
            <path
              d="M 120 60 A 60 60 0 0 1 60 120 L 120 120 Z"
              fill={color}
              opacity={opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#semicircle-pattern)" />
      </svg>
    </div>
  );
};
