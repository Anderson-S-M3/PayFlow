import React from "react";
import { View, TextInput, KeyboardType } from "react-native";

import { SvgProps } from "react-native-svg";

import styles from "./styles";

interface IInputIconProps {
  icon: React.FC<SvgProps>;
  placeHolder: string;
  value: string | undefined;

  editable?: boolean;
  keyboardType?: KeyboardType;

  onChangeText?(text: string): void;
}

export default function InputIcon({
  icon: Icon,
  placeHolder,
  value,
  keyboardType,

  editable,

  onChangeText,
}: IInputIconProps) {
  return (
    <View style={styles.container}>
      <View>
        <Icon style={styles.icon} />
      </View>

      <View style={styles.line} />

      <View>
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}
