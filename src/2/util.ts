export const getDistances = (arr: number[]) => {
  return arr.map((num, k) => {
    const next = arr[k + 1];

    if (typeof next === "undefined") {
      return;
    }

    return num - next;
  }).filter((v) => typeof v === "number");
};

export const getSafe = (distances: number[]): boolean => {
  return distances.some((v) => v === 0 || Math.abs(v) > 3) === false &&
    (distances.every((v) => v > 0) || distances.every((v) => v < 0));
};
