import React from "react";
import { View, Text, ModalProps } from "react-native";

import ButtonMedium from "../../components/ButtonMedium";
import ButtonIcon from "../../components/ButtonIcon";

import TrashSvg from "../../assets/svg/trash.svg";

import { useStorage } from "../../contexts/storage";

import styles from "./styles";
import { colors } from "../../styles/global";
import ModalView from "../../components/ModalView";

interface IModalTicket extends ModalProps {
  id: string;
  title: string;
  value: string;
  onPress(): void;
  visible: boolean;
}

export default function ModalTicket({
  id,
  title,
  value,
  onPress,
  visible,
}: IModalTicket) {
  const { StorageDELETE, StorageUPDATE } = useStorage();

  function handleDeleteItem() {
    StorageDELETE(id);

    return onPress();
  }

  function handleUpdateItem(pay: boolean) {
    StorageUPDATE(id, pay);

    return onPress();
  }

  return (
    <ModalView visible={visible} onPress={onPress}>
      <>
        <View>
          <Text style={styles.text}>
            O boleto <Text style={styles.title}>{title}</Text>
            {"\n"}
            no valor de RS$ <Text style={styles.title}>{value}</Text>
            {"\n"}
            foi pago ?
          </Text>
        </View>
        <View style={styles.containerButton}>
          <ButtonMedium
            onPress={() => handleUpdateItem(false)}
            title={"Ainda não"}
            color={colors.text.buttons}
            borderColor={colors.shapes.stroke}
            backgroundColor={colors.shapes.boxes}
          />
          <View style={{ width: 16 }} />
          <ButtonMedium
            onPress={() => handleUpdateItem(true)}
            title={"Sim"}
            color={colors.brand.background}
            backgroundColor={colors.brand.primary}
          />
        </View>
        <View style={styles.delete}>
          <ButtonIcon
            title={"Deletar boleto"}
            icon={TrashSvg}
            onPress={handleDeleteItem}
          />
        </View>
      </>
    </ModalView>
  );
}
