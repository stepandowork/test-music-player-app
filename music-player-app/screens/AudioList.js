import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AudioReference from "../components/AudioReference";
import { Actions } from "react-native-router-flux";

class PlaylistItem {
  constructor(id, name, uri, image) {
    this.name = name;
    this.uri = uri;
    this.image = image;
    this.id = id;
  }
}

const PLAYLIST = [
  new PlaylistItem(
    "0",
    "Comfort Fit - “Sorry”",
    "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
    "https://facebook.github.io/react/img/logo_og.png"
  ),
  new PlaylistItem(
    "1",
    "Mildred Bailey – “All Of Me”",
    "https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3",
    "https://facebook.github.io/react/img/logo_og.png"
  ),
  new PlaylistItem(
    "2",
    "Podington Bear - “Rubber Robot”",
    "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3",
    "https://facebook.github.io/react/img/logo_og.png"
  )
];

export class AudioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackId: ""
    };
  }

  openPlayer = trackId => {
    this.switchTrackId(trackId);
    Actions.jump("audioplayer", {
      title: PLAYLIST[trackId].name,
      trackId: trackId,
      switchTrack: this.switchTrackId
    });
  };

  switchTrackId = trackId => {
    this.setState({
      trackId: trackId
    });
  };

  renderItem(item, index) {
    return (
      <AudioReference
        trackName={item.name}
        trackId={index}
        switchTrack={this.openPlayer}
        isPlaying={index === this.state.trackId}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={PLAYLIST}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={item => item.id}
          extraData={this.state}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30
  }
});

export default AudioList;
