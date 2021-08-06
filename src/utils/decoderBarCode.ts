import { convertCointBRL } from "./convertCoin";

const baseDate = "1997/10/7";

interface IValidadeReturnProps {
  dueDate: Date;
  value: string;
}

// Scanner
export function ScannerValidate(code: string): IValidadeReturnProps {
  const dueDate = new Date(baseDate);
  dueDate.setDate(dueDate.getDate() + Number(code.substring(4, 8)));

  const value = convertCointBRL(code.substring(9, 19));

  return { dueDate, value };
}

// Digital Line
export function DigitalLineValidate(code: string): IValidadeReturnProps {
  const dueDate = new Date(baseDate);
  dueDate.setDate(dueDate.getDate() + Number(code.substring(33, 37)));

  const value = convertCointBRL(code.substring(37, 47));

  return { dueDate, value };
}
