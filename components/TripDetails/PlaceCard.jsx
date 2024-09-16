import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

export default function PlaceCard({ place }) {
  const [photoRef, setPhotoRef] = useState(null);

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(place.name);
    setPhotoRef(result);
  };

  const imageUrl = photoRef
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
    : 'https://via.placeholder.com/400x120.png?text=No+Image+Available';

  return (
    <View
      style={{
        backgroundColor: Colors.LIGHT_BLUE,
        padding: 10,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        marginTop: 20,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{ width: "100%", height: 140, borderRadius: 15 }}
      />
      <View style={{ marginTop: 5 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          {place?.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          {place?.details}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                marginTop: 5,
              }}
            >
              🎟️ Ticket Price:{" "}
              <Text style={{ fontFamily: "outfit-bold" }}>
                {place?.ticket_pricing}
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                marginTop: 5,
              }}
            >
              ⏱️ Time to Travel:{" "}
              <Text style={{ fontFamily: "outfit-bold" }}>
                {place?.time_to_travel}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 8,
              borderRadius: 7,
            }}
          >
            <Ionicons name="navigate" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
