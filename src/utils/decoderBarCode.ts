import { convertCointBRL } from "./convertCoin";

interface IValidadeReturnProps {
  dueDate: Date;
  value: string;
}

// Scanner
export function ScannerValidate(code: string): IValidadeReturnProps {
  const baseDate = "1997/10/6";

  const dueDate = new Date(baseDate);
  dueDate.setDate(dueDate.getDate() + Number(code.substring(5, 9)));

  const value = convertCointBRL(code.substring(9, 19));

  return { dueDate, value };
}

// Digital Line
export function DigitalLineValidate(code: string): IValidadeReturnProps {
  const baseDate = "1997/10/6";

  const dueDate = new Date(baseDate);
  dueDate.setDate(dueDate.getDate() + Number(code.substring(33, 37)));

  const value = convertCointBRL(code.substring(37, 47));

  return { dueDate, value };
}
