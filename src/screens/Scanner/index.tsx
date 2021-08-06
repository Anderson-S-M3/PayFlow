import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BackHandler } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { RegisterStackProps } from "../../@Types/navigation";

import { Camera } from "expo-camera";

import ButtonLarge from "../../components/ButtonLarge";

import styles from "./styles";
import LoadingIndicator from "../../components/LoadingIndicator";

interface IHandleBarCodeScanned {
  type: string;
  data: string;
}

export default function ScannerBarCode({ navigation }: RegisterStackProps) {
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(
    null
  );
  const [scanned, setScanned] = React.useState<boolean | string>();

  function goBack() {
    setHasPermission(null);
    navigation.goBack();
    return true;
  }
  React.useEffect(() => {
    (async () => {
      if (hasPermission !== null) {
        BackHandler.addEventListener("hardwareBackPress", goBack);
      } else {
        BackHandler.removeEventListener("hardwareBackPress", goBack);
      }

      const { status } = await Camera.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, [hasPermission == null]);

  const handleBarCodeScanned = ({ type, data }: IHandleBarCodeScanned) => {
    if (type != "128") setScanned(false);
    else if (data.length != 44) setScanned("error");
    else {
      navigation.navigate("Register", { code: data });
      setHasPermission(null);
      setScanned(false);
    }
  };

  const handleGoBack = () => {
    setHasPermission(null);

    return navigation.goBack();
  };
  const handleRegister = () => {
    setHasPermission(null);
    return navigation.navigate("Register");
  };

  if (hasPermission === null) {
    return <LoadingIndicator />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Sem acesso a câmera</Text>
        <ButtonLarge
          title="Solicitar permissão"
          style={styles.buttonOrange}
          onPress={() => setHasPermission(null)}
        />
      </View>
    );
  }
  return (
    <>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio="16:9"
        autoFocus="on"
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.overlayHeading} />
      <View style={styles.heading}>
        <View style={styles.headingIconContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={handleGoBack}>
            <AntDesign name="arrowleft" style={styles.headingIcon} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.headingContent}>
          <Text style={styles.headingText}>
            Escaneie o código de barras do boleto
          </Text>
        </View>
      </View>

      <View style={styles.lineScanner} />

      {scanned != "error" && (
        <>
          <View style={styles.overlayFooter} />
          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <View style={styles.buttonContainer}>
                <ButtonLarge
                  title="Inserir código do boleto"
                  style={styles.button}
                  onPress={handleRegister}
                />
              </View>
            </View>
          </View>
        </>
      )}
      {scanned === "error" && (
        <>
          <View style={styles.overlayError} />
          <View style={styles.footerTextContent}>
            <Text style={styles.textBold}>
              Não foi possivel identificar um código de barras.
            </Text>
            <Text style={styles.textNormal}>
              Tente escanear novamente ou digite o código do seu boleto.
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerContentDouble}>
              <View style={styles.buttonContainerDouble}>
                <ButtonLarge
                  title="Escanear novamente"
                  style={styles.buttonOrange}
                  onPress={() => {
                    setScanned(false);
                  }}
                />
                <View style={styles.line} />
                <ButtonLarge
                  title="Inserir código do boleto"
                  style={styles.button}
                  onPress={handleRegister}
                />
              </View>
            </View>
          </View>
        </>
      )}
    </>
  );
}
