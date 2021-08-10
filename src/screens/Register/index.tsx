import React from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { RootTabParamList, ScannerStackProps } from "../../@Types/navigation";

import { AntDesign } from "@expo/vector-icons";

import InputIcon from "../../components/InputIcon";
import InputDateIcon from "../../components/InputDateIcon";

import {
  DigitalLineValidate,
  ScannerValidate,
} from "../../utils/decoderBarCode";

import FileSvg from "../../assets/svg/file.svg";
import DueDateSvg from "../../assets/svg/dueDate.svg";
import ValueSvg from "../../assets/svg/value.svg";
import CodeSvg from "../../assets/svg/code.svg";

import { IDatabaseProps } from "../../@Types/data";
import { useStorage } from "../../contexts/storage";

import styles from "./styles";
import ButtonLarge from "../../components/ButtonLarge";
import { Alert } from "react-native";

interface IRegisterProps extends ScannerStackProps, RootTabParamList {}

export default function Register({ navigation, route }: IRegisterProps) {
  const { StorageCREATE } = useStorage();

  const code = route?.params?.code;

  const [value, setValue] = React.useState<IDatabaseProps>({
    id: String(new Date().getTime()),
    title: "",
    dueDate: undefined,
    value: "",
    code: code ? code : "",
    pay: false,
  });

  React.useEffect(() => {
    if (code) {
      const data = ScannerValidate(code);
      setValue({
        ...value,
        dueDate: data.dueDate,
        value: data.value,
        code: code,
      });
    }

    if (!code && value?.code.length == 47) {
      const data = DigitalLineValidate(value.code);
      setValue({
        ...value,
        dueDate: data.dueDate,
        value: data.value,
      });
    }
    if (!code && value?.code.length != 47) {
      setValue({
        ...value,
        dueDate: undefined,
        value: "",
      });
    }
  }, [value.code]);

  async function handleStorageCREATE() {
    if (value.code && value.dueDate && value.title && value.value) {
      StorageCREATE(value);

      setValue({
        id: "",
        title: "",
        dueDate: undefined,
        value: "",
        code: "",
        pay: false,
      });

      navigation.popToTop();
      navigation.goBack();
    }
  }

  function handleRegularCodeBar(text: string) {
    // Remove Space Text
    text = text.replace(/\s/g, "");

    if (isNaN(Number(text))) {
      return;
    } else {
      setValue({ ...value, code: text });
    }
  }

  function handleGoBack() {
    if (value.code || value.dueDate || value.title || value.value) {
      Alert.alert("Tem certeza ?", "Deseja cancelar o cadastro do boleto ?", [
        {
          text: "Não",

          style: "cancel",
        },
        { text: "Sim", onPress: () => navigation.goBack() },
      ]);
    } else navigation.goBack();
  }
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={handleGoBack}>
              <AntDesign name="arrowleft" size={24} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.title}>Preencha os dados{"\n"}do boleto</Text>
          </View>

          <View>
            <InputIcon
              icon={FileSvg}
              placeHolder="Nome do boleto"
              onChangeText={(text) => setValue({ ...value, title: text })}
              value={value.title}
              keyboardType="default"
            />
            {value.dueDate && value.value && (
              <>
                <InputDateIcon
                  icon={DueDateSvg}
                  placeHolder="Vencimento"
                  value={value.dueDate}
                />
                <InputIcon
                  icon={ValueSvg}
                  placeHolder="Valor"
                  value={value.value.length >= 1 ? "R$ " + value.value : ""}
                  editable={false}
                />
              </>
            )}
            <InputIcon
              icon={CodeSvg}
              placeHolder="Código"
              onChangeText={(text) => handleRegularCodeBar(text)}
              value={value.code}
              editable={code ? false : true}
              keyboardType="decimal-pad"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonLarge
          style={styles.buttonText}
          title="Cancelar"
          onPress={handleGoBack}
        />
        <View style={styles.line} />
        <ButtonLarge
          style={styles.buttonTextOrange}
          title="Cadastrar"
          onPress={handleStorageCREATE}
        />
      </View>
    </>
  );
}
