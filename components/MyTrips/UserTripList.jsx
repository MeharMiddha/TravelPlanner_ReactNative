import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import moment from "moment/moment";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const router = useRouter();

  const renderTripCard = ({ item, index }) => {
    const tripData = JSON.parse(item.tripData);
    
    return (
      <View style={{ marginBottom: 20 }}>
        <View style={{ marginTop: 20 }}>
          {tripData?.locationInfo?.photoRef ? (
            <Image
              source={{
                uri:
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                  tripData.locationInfo?.photoRef +
                  "&key=" +
                  process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
              }}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 15,
              }}
            />
          ) : (
            <Image
              source={require("../../assets/images/plane.gif")}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 15,
              }}
            />
          )}
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.locationInfo?.name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.GRAY,
                }}
              >
                {moment(tripData.startDate).format("DD MMM yyyy")}
              </Text>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.GRAY,
                }}
              >
                🚎 {tripData.traveler.title}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PRIMARY,
                padding: 15,
                borderRadius: 15,
                marginTop: 10,
              }}
              onPress={() =>
                router.push({
                  pathname: "/trip-details",
                  params: {
                    trip: JSON.stringify(item),
                  },
                })
              }
            >
              <Text
                style={{
                  color: Colors.WHITE,
                  textAlign: "center",
                  fontFamily: "outfit-medium",
                  fontSize: 15,
                }}
              >
                See your plan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={userTrips}
        renderItem={renderTripCard}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        scrollEnabled={false}
      />
    </View>
  );
}
