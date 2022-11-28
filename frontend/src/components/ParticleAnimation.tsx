import React, { useLayoutEffect, useMemo, useState } from "react";

// @ts-ignore
import ParticleBackground from "react-particle-backgrounds";

type Props = {
  children?: React.ReactNode;
};

const ParticleAnimation = ({ children }: Props) => {
  const [numOfParticles, setNumOfParticles] = useState<number>(150);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;
      setNumOfParticles(Math.ceil(windowWidth / 3));
    });

    return () => window.removeEventListener("resize", () => null);
  }, []);

  const settings = useMemo(
    () => ({
      canvas: {
        canvasFillSpace: true,
        width: "100%",
        height: "100%",
        useBouncyWalls: false,
      },
      particle: {
        particleCount: numOfParticles,
        color: "#94ecbe",
        minSize: 2,
        maxSize: 5,
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
    [numOfParticles],
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
