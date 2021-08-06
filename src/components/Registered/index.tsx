import React from "react";
import { View, Text } from "react-native";

import SimboloWSvg from "../../assets/svg/simboloW.svg";

import styles from "./styles";

interface IRegistered {
  count: number;
}

export default function Registered({ count }: IRegistered) {
  return (
    <View style={styles.container}>
      <SimboloWSvg style={styles.simboloWSvg} />

      <View style={styles.line} />

      {count ? (
        <Text style={styles.text}>
          Você tem{" "}
          <Text style={styles.numberTicket}>
            {count} {count <= 1 ? "boleto" : "boletos"}
          </Text>{" "}
          {"\n"} {count <= 1 ? "cadastrado" : "cadastrados"} para pagar
        </Text>
      ) : (
        <Text style={styles.text}>
          Você não possui <Text style={styles.numberTicket}>boletos</Text>
          {"\n"} cadastrados para pagar
        </Text>
      )}
    </View>
  );
}
