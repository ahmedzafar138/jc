import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Info from "../components/Info";
import Topbar from "../components/Top";
import Foodcard from "../components/Foodcard";
import { useLocalSearchParams } from "expo-router";
import HeaderButtons from "../components/HeaderButtons"; 

const { width } = Dimensions.get("window");

const Foods = {
  Deals: [
    { name: "Deal 1", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 999, image : "../assets/img/meal1.jpg"},
    { name: "Deal 2", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1899, image : "../assets/img/meal1.jpg"},
    { name: "Deal 3", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1799, image : "../assets/img/meal1.jpg"},
    { name: "Deal 4", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 2599, image : "../assets/img/meal1.jpg"},
    { name: "Deal 5", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1649, image : "../assets/img/meal1.jpg"},
    { name: "Deal 6", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 2999, image : "../assets/img/meal1.jpg"},
    { name: "Deal 7", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1249, image : "../assets/img/meal1.jpg"},
    { name: "Deal 8", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 2799, image : "../assets/img/meal1.jpg"},
  ],
  Appetizers: [
    { name: "JC Signature Loaded Fries", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 850 },
    { name: "Mozeralla Sticks", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 750 },
    { name: "Tempura Onion Rings", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 450 },
    { name: "Flaming Hot Bytes", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 650 },
    { name: "Baked Tender Wings", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 650 },
    { name: "Mexican tax Mex Loaded Fries", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 850 },
  ],
  Beef_Burgers: [
    { name: "The Pulled Chuck", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 990 },
    { name: "Juicy Lucy Angus", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 950 },
    { name: "Classic Cheddar and Jalapeno Burger", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 850 },
    { name: "Creamy Mushroom Melt", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 850 },
    { name: "Cheesy Boy Tripple Patty", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1600 },
    { name: "Classic Oklahoma Smashed", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 800 },
    { name: "Angus egg and Cheese Burger", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
  ],
  Chicken_Burgers: [
    { name: "Grilled Cheesy Mushroom Burger", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 800 },
    { name: "Grilled Peri Peri Burger", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 800 },
    { name: "Dyanmite Chicken Burger", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 750 },
    { name: "Nasville Hot Burger", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 800 },
    { name: "Flaming Hot Burger", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 850 },
    { name: "Smoked Grill", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 800 },
  ],
  Chiefs_Special: [
    { name: "Beef Tenderloin Steak", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 2250 },
    { name: "Chief's special Stuffed", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1550 },
    { name: "Chicken Tender Steak", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1499 },
  ],
  Pizzas: [
    { name: "Awesome Alfredo", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 1400 },
    { name: "JC Special Garlic Knots Pizza", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1550 },
    { name: "Ranch Jalapeno", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1300 },
    { name: "Chicken Cheese Stuffed", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1400 },
    { name: "Four Seasons Pizza", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1500 },
    { name: "Tikka De Polo", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1300 },
    { name: "Creamy Stuff Kebab", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1400 },
    { name: "Flaming Hot Crown Crust", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1500 },
    { name: "Peri Peri Pizza", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1500 },
  ],
  Pasta: [
    { name: "JC Special Stuffed Chicken pasta", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 1050 },
    { name: "Awesome Alfredo Pasta", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1150 },
    { name: "Canoli Chicken Pasta", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1150 },
    { name: "Mac and Cheese with Chicken", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1400 },
  ],
  Winter_Special: [
    { name: "London Fish and Chips", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 1450 },
    { name: "Crispy Fish Burger", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 950 },
    { name: "Pan Seared Fish", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1550 },
  ],
  Desserts: [
    { name: "Sizzling Skillet Brownie", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 650 },
    { name: "Molten Lava", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 650 },
  ],
  Beverages: [
    { name: "Coke", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 150 },
    { name: "Sprite", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 150 },
    { name: "Fanta", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 150 },
    { name: "Marinda", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 150 },
    { name: "Pepsi", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 150 },
    { name: "7 UP", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 150 },
  ],
};

const App = () => {
  const { branchName, branchAddress, branchPhoneNo, orderType } = useLocalSearchParams<{
    branchName: string;
    branchAddress: string;
    branchPhoneNo: string;
    orderType: string;
  }>();
  const [selectedTab, setSelectedTab] = useState<string>("Deals");

  const scrollViewRef = useRef<ScrollView>(null);
  const tabScrollViewRef = useRef<ScrollView>(null);

  const tabs = Object.keys(Foods);

  const handleTabPress = (tab: string, index: number) => {
    setSelectedTab(tab);
    scrollViewRef.current?.scrollTo({ x: width * index, animated: true });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setSelectedTab(tabs[index]);

    // Scroll the tab navigation to align the selected tab
    tabScrollViewRef.current?.scrollTo({
      x: (index - 1) * 100, // Adjust scrolling to focus on the selected tab
      animated: true,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderButtons /> {/* Added HeaderButtons component */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Image */}
        <Image style={styles.topImage} source={require("../assets/img/burger.jpg")} />

        {/* Top Bar */}
        <Topbar branchName={branchName} orderType={orderType} />

        {/* Info Section */}
        <Info branchName={branchName} branchAddress={branchAddress} branchPhoneNo={branchPhoneNo} />

        {/* Tab Navigation */}
        <ScrollView
          ref={tabScrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.tabContainer}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTabPress(tab, index)}
                style={styles.tab}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === tab && styles.selectedTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Scrollable Content */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {tabs.map((tab, index) => (
            <View style={styles.page} key={index}>
              <Foodcard foods={Foods[tab as keyof typeof Foods]} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topImage: {
    width: "100%",
    height: 200,
  },
  page: {
    width,
    padding: 10,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,
  },
  tabText: {
    fontSize: 16,
    color: "#444",
    marginLeft : 30
  },
  selectedTabText: {
    color: "#d32f2f",
    fontWeight: "900",
    borderBottomColor: "red",
    borderBottomWidth: 2.5,
  },
});

export default App;

