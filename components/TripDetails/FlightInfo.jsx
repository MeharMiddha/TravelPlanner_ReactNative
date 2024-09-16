import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: "outfit", fontSize: 17, marginTop: 7 }}>
        Airline: {flightData?.airline}
      </Text>
      <Text style={{ fontFamily: "outfit", fontSize: 17 }}>
        Price: {flightData.price}
      </Text>
    </View>
  );
}
