import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const itemList = [
  {
    image: require("./assets/usb1.png"),
    shop: "Devang",
    name: "Cáp chuyển từ Cổng USB sang PS2",
  },
  {
    image: require("./assets/usb2.png"),
    shop: "LTD Food",
    name: "Cáp chuyển từ Cổng USB sang PS2",
  },
  {
    image: require("./assets/usb3.png"),
    shop: "Thế giới đồ chơi",
    name: "Cáp chuyển từ Cổng USB sang PS2",
  },
  {
    image: require("./assets/usb4.png"),
    shop: "Thế giới đồ chơi",
    name: "Cáp chuyển từ Cổng USB sang PS2",
  },
  {
    image: require("./assets/usb5.png"),
    shop: "Minh Long Book",
    name: "Cáp chuyển từ Cổng USB sang PS2",
  },
  {
    image: require("./assets/usb6.png"),
    shop: "Minh Long Book",
    name: "Cáp chuyển từ Cổng USB sang PS2",
  },
];
export default function Screen02() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("./assets/left-arrow.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
        <TouchableOpacity
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "flex-center",
            gap: 10,
            backgroundColor: "white",
            width: "70%",
          }}
        >
          <Image
            source={require("./assets/search.png")}
            style={{ width: 24, height: 24 }}
          ></Image>
          <Text style={{ fontSize: 18, color: "#BEADAD" }}>Dây cáp usb</Text>
        </TouchableOpacity>

        <Image
          source={require("./assets/cart.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
      </View>

      <View style={styles.itemContainer}>
        {itemList.map((item, index) => (
          <View style={styles.item} key={index}>
            <Image
              source={item.image}
              style={{ width: 155, height: 90 }}
            ></Image>
            <Text style={{ fontSize: 15, fontWeight: 500, color: "black" }}>
              {item.name}
            </Text>
            <Image
              source={require("./assets/stars.png")}
              style={{ width: 106, height: 13 }}
            ></Image>
            <Text style={{ fontSize: 15, fontWeight: 700, color: "black" }}>
              69.000VND -39%
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.footerContainer}>
        <Image
          source={require("./assets/icon1.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
        <Image
          source={require("./assets/icon2.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
        <Image
          source={require("./assets/icon3.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#1BA9FF",
    position: "fixed",
    top: 0,
    left: 0,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },

  item: {
    padding: 5,
    paddingRight: 20,
    width: "45%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  footerContainer: {
    width: "100%",
    backgroundColor: "#1BA9FF",
    position: "fixed",
    bottom: 0,
    left: 0,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
