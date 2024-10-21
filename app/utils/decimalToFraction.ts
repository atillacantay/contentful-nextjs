const luVals = [
  0,
  0.125,
  0.143,
  0.1666,
  0.2,
  0.25,
  0.286,
  0.333,
  0.375,
  0.4,
  0.428,
  0.5,
  0.571,
  0.6,
  0.625,
  0.666,
  0.714,
  0.75,
  0.8,
  0.8333,
  0.857,
  0.875,
  0.9,
];
const luStrings = [
  "0",
  "1/8",
  "1/7",
  "1/6",
  "1/5",
  "1/4",
  "2/7",
  "1/3",
  "3/8",
  "2/5",
  "3/7",
  "1/2",
  "4/7",
  "3/5",
  "5/8",
  "2/3",
  "5/7",
  "3/4",
  "4/5",
  "5/6",
  "6/7",
  "7/8",
  "9/10",
];

export default function decToFrac(dec: number): string {
  // Handle whole numbers directly.
  if (parseInt(dec.toString()) === dec) {
    return dec.toString();
  }

  const prefix: number = Math.floor(dec);
  let fractionalPart: number = dec - prefix;

  // Constrain the decimal fraction to a particular range if needed.
  if (fractionalPart < 0.125) {
    fractionalPart = 0.125;
  } else if (fractionalPart > 0.9) {
    fractionalPart = 0.9;
  }

  // Find the closest matching fraction in luVals.
  let closestIndex: number = 0;
  let minDiff: number = Number.MAX_VALUE;
  for (let i = 0; i < luVals.length; i++) {
    const diff: number = Math.abs(fractionalPart - luVals[i]);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  }

  // Construct the final string with proper prefix handling.
  const prefixStr: string = prefix ? prefix.toString() + " " : "";
  return `${prefixStr}${luStrings[closestIndex]}`;
}
