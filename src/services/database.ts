import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDatabaseProps } from "../@Types/data";

export async function DatabaseCREATE({
  id,
  title,
  dueDate,
  value,
  code,
  pay,
}: IDatabaseProps) {
  const listItem = {
    id,
    title,
    dueDate,
    value,
    code,
    pay,
  };

  let savedItems = [];
  const response = await AsyncStorage.getItem("tickets");

  if (response) savedItems = JSON.parse(response);

  savedItems.push(listItem);

  return await AsyncStorage.setItem("tickets", JSON.stringify(savedItems));
}

export async function DatabaseREAD(): Promise<[IDatabaseProps] | []> {
  const response = await AsyncStorage.getItem("tickets");
  if (response) return Promise.resolve(JSON.parse(response));
  else return Promise.resolve([]);
}

export async function DatabaseUPDATE(id: string, pay: boolean) {
  let savedItems = await DatabaseREAD();
  const index = savedItems.findIndex((item) => item.id === id);
  savedItems[index].pay = pay;

  return await AsyncStorage.setItem("tickets", JSON.stringify(savedItems));
}

export async function DatabaseDELETE(id: string) {
  let savedItems = await DatabaseREAD();

  const index = savedItems.findIndex((item) => item.id === id);
  savedItems.splice(index, 1);

  return await AsyncStorage.setItem("tickets", JSON.stringify(savedItems));
}
