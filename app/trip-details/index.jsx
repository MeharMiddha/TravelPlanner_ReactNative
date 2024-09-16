import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null); // Initialize as null

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    if (trip) {
      try {
        const parsedTrip = JSON.parse(trip);
        setTripDetails(parsedTrip);
      } catch (error) {
        console.error("Error parsing trip data:", error.message);
      }
    }
  }, [trip]);

  if (!tripDetails) {
    return (
      <View>
        <Text>Loading trip details...</Text>
      </View>
    );
  }

  const tripDetailsData = JSON.parse(tripDetails.tripData);
  
  console.log(tripDetails?.tripPlan?.itinerary);
  

  return (
    <ScrollView>
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            tripDetailsData.locationInfo?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: "100%",
          height: 330,
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
          {tripDetailsData.locationInfo?.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Text
            style={{ fontFamily: "outfit", fontSize: 18, color: Colors.GRAY }}
          >
            {moment(tripDetailsData.startDate).format("DD MMM yyyy")}
          </Text>
          <Text
            style={{ fontFamily: "outfit", fontSize: 18, color: Colors.GRAY }}
          >
            - {moment(tripDetailsData.endDate).format("DD MMM yyyy")}
          </Text>
        </View>
        <Text
          style={{ fontFamily: "outfit", fontSize: 17, color: Colors.GRAY }}
        >
          🚎 {tripDetailsData.traveler.title}
        </Text>

        {/* Flight Information  */}
        <FlightInfo flightData={tripDetails?.tripPlan?.flight} />
        {/* Hotels List  */}
        <HotelList hotelList={tripDetails?.tripPlan?.hotel}/>
        {/* Trip Day Planner Information  */}
        <PlannedTrip details={tripDetails?.tripPlan?.itinerary} />
      </View>
    </ScrollView>
  );
}
