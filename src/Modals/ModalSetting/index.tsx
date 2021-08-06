import React from "react";

import ButtonIcon from "../../components/ButtonIcon";

import UserSvg from "../../assets/svg/user.svg";
import { useAuth } from "../../contexts/auth";
import ModalView from "../../components/ModalView";

interface IModalSettingProps {
  visible: boolean;
  onPress(): void;
}

export default function ModalSetting({ visible, onPress }: IModalSettingProps) {
  const { signOut } = useAuth();

  return (
    <ModalView visible={visible} onPress={onPress}>
      <ButtonIcon icon={UserSvg} title={"Sair da conta"} onPress={signOut} />
    </ModalView>
  );
}
