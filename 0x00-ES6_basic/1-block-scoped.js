export default function taskBlock(trueOrFalse) {
  const task = trueOrFalse ? true : false;
  const task2 = trueOrFalse ? false : true;

  return [task, task2];
}
