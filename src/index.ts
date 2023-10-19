function calculateAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
}

const values = [10, 20, 30, 40, 50];
const average = calculateAverage(values);

console.log(`The average of [${values.join(", ")}] is ${average}`);
