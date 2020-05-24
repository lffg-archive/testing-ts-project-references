export function sumAll(values: number[]): number {
  return values.reduce((a, c) => a + c, 0);
}

export function toInt(values: string[]): number[] {
  return values.map((value) => parseInt(value, 10));
}
