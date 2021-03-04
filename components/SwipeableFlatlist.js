import React, { Component } from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

export default class SwipeableFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotifs: this.props.allNotifs,
    };
  }

  onSwipeValueChange = (swipeData) => {
    var allNotifs = this.state.allNotifs;
    const { key, value } = swipeData;
    if (value < -Dimensions.get("window").width) {
      const newData = [...allNotifs];
      this.updateMarkAsRead(allNotifs[key]);
      newData.splice(key, 1);
      this.setState({
        allNotifs: newData,
      });
    }
  };

  updateMarkAsRead = (notifications) => {
    db.collection("allNotifs").doc(notifications.doc_id).update({
      notifications_status: "read",
    });
  };

  render() {
    return <View></View>;
  }
}
