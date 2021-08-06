import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import ModalSetting from "../../Modals/ModalSetting";

import styles from "./styles";

export default function Avatar() {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={handleShowModal}
      >
        <View>
          <Text style={styles.hi}>
            Olá, <Text style={styles.name}>Anderson</Text>
          </Text>
          <Text style={styles.description}>Mantenha suas contas em dia</Text>
        </View>

        <View>
          <Image
            style={styles.imagem}
            source={{
              uri: "https://avatars.githubusercontent.com/u/65872811?s=400&u=03f258500b9cd9a7f72dbdc8fe1bd5bd25091f0a&v=4",
            }}
          />
        </View>
      </TouchableOpacity>
      <ModalSetting visible={showModal} onPress={handleShowModal} />
    </>
  );
}
