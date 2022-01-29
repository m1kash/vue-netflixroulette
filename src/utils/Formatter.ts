import IFormatter from "@/types/IFormatter";

const Formatter: IFormatter = {
  year(date) {
    const DateInstance = new Date(date) as Date;

    return DateInstance.getFullYear();
  },
  separator(items, separator) {
    return items.join(separator);
  },
  duration(min) {

    return `${min || 0} min`;
  }
};

export default Formatter;
