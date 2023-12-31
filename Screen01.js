import { useState } from "react";
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
    image: require("./assets/imageItem1.png"),
    shop: "Devang",
    name: "Ca nấu lẩu, nấu mì mini",
  },
  {
    image: require("./assets/imageItem2.png"),
    shop: "LTD Food",
    name: "1KG Khô gà bơ tỏi",
  },
  {
    image: require("./assets/imageItem3.png"),
    shop: "Thế giới đồ chơi",
    name: "Xe cẩu đa năng",
  },
  {
    image: require("./assets/imageItem4.png"),
    shop: "Thế giới đồ chơi",
    name: "Đồ chơi dạng mô hình",
  },
  {
    image: require("./assets/imageItem5.png"),
    shop: "Minh Long Book",
    name: "Lãnh đạo đơn giản",
  },
  {
    image: require("./assets/imageItem6.png"),
    shop: "Minh Long Book",
    name: "Hiểu lòng con trẻ",
  },
  {
    image: require("./assets/imageItem7.png"),
    shop: "Minh Long Book",
    name: "Donal Trump Thiên tài lãnh đạo",
  },
];
export default function Screen01() {
  const [isHovered, setIsHovered] = useState(false);
  const [indexPress, setIndexPress] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("./assets/left-arrow.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
        <Text style={{ fontSize: 18, color: "#fff" }}>Chat</Text>
        <Image
          source={require("./assets/cart.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
      </View>
      <Text style={{ fontSize: 18, marginTop: 30, padding: 35 }}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>
      <View style={styles.itemContainer}>
        {itemList.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setIsHovered(true);
              setIndexPress(index);
            }}
          >
            <View
              style={[
                styles.item,
                isHovered && indexPress == index ? styles.itemHovered : null,
              ]}
              key={index}
            >
              <Image
                source={item.image}
                style={{ width: 75, height: 75 }}
              ></Image>
              <View
                style={{
                  position: "absolute",
                  left: 90,
                  alignSelf: "flex-start",
                }}
              >
                <Text style={{ fontSize: 18, color: "black" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 18, color: "red" }}>{item.shop}</Text>
              </View>
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: "#F31111",
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "white" }}>Chat</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
    flexDirection: "column",
    gap: 5,
  },

  item: {
    padding: 5,
    paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    borderBottomWidth: 1,
  },

  itemHovered: {
    padding: 5,
    paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    transform: "scale(1.1)",
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
