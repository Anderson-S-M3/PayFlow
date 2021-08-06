import React from "react";
import { View, Text, Image } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import BackgroundRadial from "../../components/BackgroundRadial";

import Banner from "../../assets/img/banner.png";
import SimboloIcon from "../../assets/svg/simbolo.svg";
import GoogleIcon from "../../assets/svg/google.svg";

import styles from "./styles";
import { useAuth } from "../../contexts/auth";
import LoadingIndicator from "../../components/LoadingIndicator";

export default function SignIn() {
  const [signInLoading, setSignInLoading] = React.useState<boolean>(false);
  const { signIn } = useAuth();

  function handleSignIn() {
    setSignInLoading(true);
    signIn();
  }

  return (
    <BackgroundRadial height={316} cy="70%" scroll={true}>
      <View style={styles.container}>
        <Image source={Banner} style={styles.image} />

        <SimboloIcon style={styles.simboloIcon} />

        <View>
          <Text style={styles.title}>
            Organize seus {"\n"}
            boletos em um {"\n"}
            só lugar
          </Text>
        </View>

        {signInLoading ? (
          <View style={styles.button}>
            <LoadingIndicator />
          </View>
        ) : (
          <RectButton style={styles.button} onPress={handleSignIn}>
            <View style={styles.contentButton}>
              <GoogleIcon style={styles.googleIcon} />

              <View style={styles.line} />

              <View style={{ flex: 1 }}>
                <Text style={styles.text}>Entrar com o Google</Text>
              </View>
            </View>
          </RectButton>
        )}
      </View>
    </BackgroundRadial>
  );
}
