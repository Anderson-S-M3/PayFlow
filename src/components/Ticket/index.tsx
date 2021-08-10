import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { IDatabaseProps } from "../../@Types/data";
import ModalTicket from "../../Modals/ModalTicket";

import styles from "./styles";

interface ITicketProps {
  data: IDatabaseProps;
}

export default function Ticket({ data }: ITicketProps) {
  const [showModal, setShowModal] = React.useState(false);

  const date = new Date(String(data.dueDate));

  const handleOnPress = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.container}
        onPress={handleOnPress}
      >
        <View style={styles.titleDateContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.textDate}>
            Vence em{" "}
            <Text>{`${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`}</Text>
          </Text>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.textValue}>
            R$ <Text style={styles.value}>{data.value}</Text>
          </Text>
        </View>
      </TouchableOpacity>
      <ModalTicket
        onPress={handleOnPress}
        id={data.id}
        title={data.title}
        value={data.value}
        visible={showModal}
      />
    </>
  );
}
