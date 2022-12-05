import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

// @ts-ignore
import ParticleBackground from "react-particle-backgrounds";

type Props = {
  children?: React.ReactNode;
};

const ParticleAnimation = ({ children }: Props) => {
  const [numOfParticles, setNumOfParticles] = useState<number>(150);
  const [color, setColor] = useState<string>("#94ecbe");

  const getRandomColor = useCallback(() => {
    const colors = [
      "#94ecbe",
      "#dded2a",
      "#8eed2a",
      "#335cf4",
      "#ff133c",
      "#4fecde",
      "#d23cd4",
    ];
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;
      setNumOfParticles(Math.ceil(windowWidth / 3));
    });

    return () => window.removeEventListener("resize", () => null);
  }, [getRandomColor, color]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setColor(getRandomColor());
    }, 3000);

    return () => clearInterval(timeout);
  });

  const settings = useMemo(
    () => ({
      canvas: {
        canvasFillSpace: true,
        width: "100%",
        height: "100%",
        useBouncyWalls: true,
      },
      particle: {
        particleCount: numOfParticles,
        color: color,
        minSize: 2,
        maxSize: 10,
      },
      velocity: {
        directionAngle: 0,
        directionAngleVariance: 360,
        minSpeed: 1,
        maxSpeed: 3,
      },
      opacity: {
        minOpacity: 0,
        maxOpacity: 1,
        opacityTransitionTime: 3000,
      },
    }),
    [numOfParticles, color],
  );

  return (
    <div className="relative  w-full h-full">
      <ParticleBackground
        settings={settings}
        className="absolute z-10 block bg-transparent"
      />
      {!!children && <div className="relative z-20 w-full h-full">{children}</div>}
    </div>
  );
};

export default ParticleAnimation;
