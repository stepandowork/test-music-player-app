import React from "react";
import { StyleSheet } from "react-native";
import AudioPlayer from "./screens/AudioPlayer";
import AudioList from "./screens/AudioList";
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Tabs
          key="tabbar"
          hideNavBar
          wrap={false}
          tabBarStyle={{
            backgroundColor: "black",
            color: "white",
            paddingBottom: 15
          }}
        >
          <Scene title="AudioList">
            <Scene key="audiolist" component={AudioList} title="AudioList" />
          </Scene>
          <Scene title="AudioPlayer">
            <Scene
              key="audioplayer"
              component={AudioPlayer}
              title="AudioPlayer"
              back
            />
          </Scene>
        </Tabs>
      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  }
});
