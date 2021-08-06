import React from "react";
import { View, Modal, ModalProps, TouchableOpacity } from "react-native";

import styles from "./styles";

interface IModalView extends ModalProps {
  children: JSX.Element;
  visible: boolean;
  onPress(): void;
}

export default function ModalView({ children, visible, onPress }: IModalView) {
  return (
    <Modal visible={visible} transparent={true}>
      <TouchableOpacity
        onPressIn={onPress}
        activeOpacity={1}
        style={styles.overlay}
      >
        <View style={styles.barContainer}>
          <View style={styles.bar} />
        </View>
      </TouchableOpacity>
      <View>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
}
