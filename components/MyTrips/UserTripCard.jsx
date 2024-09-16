import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import moment from "moment";
import { Colors } from "../../constants/Colors";

export default function UserTripCard({ trip }) {
  const tripData = JSON.parse(trip.tripData);
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      {/* <Image
        source={require("../../assets/images/plane.gif")}
        style={{ width: 100, height: 100, borderRadius:15 }}
      /> */}
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            tripData.locationInfo?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
      />
      <View>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 18 }}>
          {tripData?.locationInfo?.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 14, color: Colors.GRAY }}
        >
          {moment(tripData.startDate).format("DD MMM yyyy")}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 14, color: Colors.GRAY }}
        >
          Traveling: {tripData.traveler.title}
        </Text>
      </View>
    </View>
  );
}
