import React from "react";
import { View, FlatList } from "react-native";

import Avatar from "../../components/Avatar";
import BackgroundRadial from "../../components/BackgroundRadial";
import Registered from "../../components/Registered";
import Header from "../../components/Header";
import Ticket from "../../components/Ticket";

import { useStorage } from "../../contexts/storage";

import styles from "./styles";

export default function Home() {
  const { DATA } = useStorage();

  const [countTicket, setCountTicket] = React.useState<number>(0);

  React.useEffect(() => {
    let event: number = 0;
    DATA?.map((item) => (item.pay == false ? (event += 1) : null));

    setCountTicket(event);
  }, [DATA]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <BackgroundRadial height={139}>
          <>
            <View style={styles.container}>
              <Avatar />

              <View style={styles.countTicket}>
                <Registered count={countTicket} />
              </View>

              <View>
                <Header
                  title="Meus boletos"
                  count={
                    countTicket ? `${countTicket} no total` : "Nenhum boleto"
                  }
                />
              </View>
            </View>
          </>
        </BackgroundRadial>
      }
      data={DATA}
      renderItem={({ item }) =>
        item.pay == false ? <Ticket data={item} /> : null
      }
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={{ marginBottom: 90 }} />}
    />
  );
}
