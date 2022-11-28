import { toLower } from "lodash";

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

export const lowerArray = (arr: string[]): string[] => {
  return arr.map((val) => toLower(val));
};
