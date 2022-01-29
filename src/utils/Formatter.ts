import IFormatter from "@/types/IFormatter";

const Formatter: IFormatter = {
  year(date) {
    const DateInstance = new Date(date) as Date;

    return DateInstance.getFullYear();
  },
  ampersandSeparator(items) {
    return items.join('&');
  },
  duration(min) {
    return `${min} min`;
  }
};

export default Formatter;
