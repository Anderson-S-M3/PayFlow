import React from "react";
import { View, TextInput } from "react-native";

import { SvgProps } from "react-native-svg";

import styles from "./styles";

interface IInputDateIconProps {
  icon: React.FC<SvgProps>;
  placeHolder: string;
  value: Date | undefined;
}

export default function InputDateIcon({
  icon: Icon,
  placeHolder,
  value,
}: IInputDateIconProps) {
  const [date, setDate] = React.useState<string>();

  React.useEffect(() => {
    if (value) {
      setDate(
        `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}
      `
      );
    }
  }, [value]);

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
          editable={false}
          value={date}
        />
      </View>
    </View>
  );
}
