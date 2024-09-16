import { View, Text, Image } from "react-native";
import React from "react";
import PlaceCard from "./PlaceCard";

export default function PlannedTrip({ details }) {
  console.log(details);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
        🏕️ Plan Details
      </Text>
      {Object.entries(details).map(([day, dayDetails]) => (
        <View>
          <Text
            style={{ fontFamily: "outfit-medium", fontSize: 20, marginTop: 20 }}
          >
            Day {parseInt(day) + 1}
          </Text>
          {dayDetails?.places.map((place, index) => (
            <PlaceCard place={place} />
          ))}
        </View>
      ))}
    </View>
  );
}
