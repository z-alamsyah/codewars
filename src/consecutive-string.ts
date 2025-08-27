export function longestConsec(strarr: string[], k: number): string {
  let result = "";

  console.log("Start");

  if (strarr.length < k || strarr.length == 0 || k <= 0) {
    return result;
  }
  const counter = k - 1;
  for (let i = counter; i < strarr.length; i++) {
    let strConcat = "";
    for (let j = counter; j < i - k; j++) {
      strConcat = strConcat.concat(strarr[j]);
    }

    if (result.length < strConcat.length) {
      result = strConcat;
    }
  }

  return result;
}
