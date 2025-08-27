/**
 The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

*/

function convertToHex(val: number): string {
  let value = 0;
  if (val < 0) {
    value = 0;
  } else if (val > 255) {
    value = 255;
  } else {
    value = val;
  }

  return value.toString(16).padStart(2, "0").toUpperCase();
}

export function rgb(r: number, g: number, b: number): string {
  return `${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}`;
}
