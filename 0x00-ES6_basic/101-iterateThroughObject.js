export default function iterateThroughObject(reportWithIterator) {
  let result = "";

  for (let value of reportWithIterator) {
    result += value + " | ";
  }

  if (result.endsWith(" | ")) {
    result = result.slice(0, -3);
  }

  return result;
}
