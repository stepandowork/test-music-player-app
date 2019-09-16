import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

export class AudioReference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  switchTrack = () => {
    this.props.switchTrack(this.props.trackId);
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.switchTrack()}>
        <View
          style={{
            ...styles.trackContainer,
            backgroundColor: this.props.isPlaying ? "#F7F4F3" : "#676565"
          }}
        >
          <Text style={styles.trackName}> {this.props.trackName} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: "row",
    height: 50,
    width: 5000,
    maxWidth: "100%",
    marginBottom: 10,
    paddingLeft: "15%",
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 5
  },
  light: {
    backgroundColor: "#F7F4F3"
  },
  dark: {
    backgroundColor: "#676565"
  }
});

export default AudioReference;
