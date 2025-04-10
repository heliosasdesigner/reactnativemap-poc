import { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Region extends Coordinates {
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function App() {
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [region, setRegion] = useState<Region>({
    latitude: 51.75053844542478,
    longitude: -0.32749495330699996,
    latitudeDelta: 1.1725,
    longitudeDelta: 1.1725,
  });

  const handleLocationChange = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
    console.log("Current location:", latitude, longitude);
  };

  const animateToLocation = (coordinates: Coordinates) => {
    mapRef.current?.animateToRegion(
      {
        ...coordinates,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      1000
    );
  };

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        followsUserLocation={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        showsTraffic={true}
        showsBuildings={true}
        showsPointsOfInterest={true}
        onUserLocationChange={handleLocationChange}
      >
        <Marker
          description="St Albans City railway station"
          coordinate={{
            latitude: 51.75053844542478,
            longitude: -0.32749495330699996,
          }}
        />
        <Marker
          description="Clarence Park"
          coordinate={{
            latitude: 51.75357026212249,
            longitude: -0.32384121038650526,
          }}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            animateToLocation({
              latitude: 51.75053844542478,
              longitude: -0.32749495330699996,
            })
          }
        >
          <Text style={styles.buttonText}>Go to Station</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            animateToLocation({
              latitude: 51.75357026212249,
              longitude: -0.32384121038650526,
            })
          }
        >
          <Text style={styles.buttonText}>Go to Park</Text>
        </TouchableOpacity>
      </View>
      {location && (
        <View style={styles.locationInfo}>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  locationInfo: {
    position: "absolute",
    top: 60,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#F5A524",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
