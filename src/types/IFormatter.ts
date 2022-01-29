type TFormat = string | number;

interface IFormatter {
  year(year: TFormat): TFormat,
  ampersandSeparator(items: string[]): string,
  duration(year: TFormat): string
}

export default IFormatter;
