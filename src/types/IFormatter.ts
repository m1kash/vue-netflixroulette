type TFormat = string;

interface IFormatter {
  year(year: TFormat): number,
  separator(items: string[], separator: string): string,
  duration(min: number): string
}

export default IFormatter;
