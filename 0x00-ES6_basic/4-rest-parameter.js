/* eslint-disable */
export default function returnHowManyArguments(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += 1;
  }
  return total;
}
