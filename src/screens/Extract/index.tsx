import React from "react";
import { View, FlatList } from "react-native";

import Avatar from "../../components/Avatar";
import BackgroundRadial from "../../components/BackgroundRadial";
import Header from "../../components/Header";
import Ticket from "../../components/Ticket";

import { useStorage } from "../../contexts/storage";

import styles from "./syles";

export default function Extract() {
  const { DATA } = useStorage();

  const [countExtract, setCountExtract] = React.useState<number>(0);

  React.useEffect(() => {
    let event: number = 0;
    DATA?.map((item) => (item.pay == true ? (event += 1) : null));

    setCountExtract(event);
  }, [DATA]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <BackgroundRadial height={106} cy="115%">
          <>
            <View style={styles.container}>
              <Avatar />

              <View style={styles.content}>
                <Header
                  title="Meus extratos"
                  count={
                    countExtract ? `${countExtract} no total` : "Nenhum extrato"
                  }
                />
              </View>
            </View>
          </>
        </BackgroundRadial>
      }
      data={DATA}
      renderItem={({ item }) =>
        item.pay == true ? <Ticket data={item} /> : null
      }
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={{ marginBottom: 90 }} />}
    />
  );
}
