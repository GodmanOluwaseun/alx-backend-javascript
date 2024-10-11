export default function createIteratorObject(report) {
  function* objectIterator() {
    for (const array of Object.values(report.allEmployees)) {
      for (const value of array) {
        yield value;
      }
    }
  }
  return objectIterator;
}
