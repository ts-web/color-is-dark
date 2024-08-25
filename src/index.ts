
/**
 * Returns whether the given rgb color array has a YIQ brightness value of less than 128 (50% brightness), or the given brightness threshold.
 */
export const colorIsDark = (
  [r, g, b]: number[],
  brightnessThreshold = 128,
): boolean => {
  const yiqBrightness = (
    (r * 299) +
    (g * 587) +
    (b * 114)
  ) / 1000;
  return yiqBrightness < brightnessThreshold;
};
