function decimalToHex(decimal: number) {
  return Math.round(decimal).toString(16).padStart(2, '0');
}

function getColor(hex: string, index: number) {
  return parseInt(hex.slice(index, index + 2), 16);
}

function getRGBs(hex: string) {
  return [getColor(hex, 1), getColor(hex, 3), getColor(hex, 5)];
}

function scaledValue(start: number, delta: number, t: number) {
  return start + delta * t;
}

/**
 * Interpolates between two hex colors (e.g., `#ff0000` to `#00ff00`).
 *
 * @param fromColor The starting color in hex format.
 * @param toColor The ending color in hex format.
 *
 * @see https://stackoverflow.com/a/78235391
 */
export function interpolateHex(fromColor: string, toColor: string) {
  const [fromRed, fromGreen, fromBlue] = getRGBs(fromColor);
  const [toRed, toGreen, toBlue] = getRGBs(toColor);
  const deltaRed = toRed - fromRed;
  const deltaGreen = toGreen - fromGreen;
  const deltaBlue = toBlue - fromBlue;

  return (t: number) => {
    const red = scaledValue(fromRed, deltaRed, t);
    const green = scaledValue(fromGreen, deltaGreen, t);
    const blue = scaledValue(fromBlue, deltaBlue, t);
    return '#' + decimalToHex(red) + decimalToHex(green) + decimalToHex(blue);
  };
}
