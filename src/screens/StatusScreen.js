import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StatusCard from "../status/component/StatusCard";

const StatusScreen = props => {
  return (
    <View style={{ backgroundColor: '#004d40', }}>
      <View style={styles.myContainer}>
        <StatusCard />
      </View>
      <View style={{ marginHorizontal: 10, }} >
        <Text style={styles.statusHeader}>Recent Updates</Text>
      </View>
      <View style={styles.statusContainer}>
        <StatusCard />
      </View>
      <View style={{ marginHorizontal: 10, }} >
        <Text style={styles.statusHeader}>Viewed Updates</Text>
      </View>
      <View style={styles.statusContainer}>
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </View>
    </View>
  )
}

export default StatusScreen;

const styles = StyleSheet.create({
  myContainer: {

  },
  statusContainer: {

  },
  statusHeader: {
    color: '#bdbdbd'
  }
})
