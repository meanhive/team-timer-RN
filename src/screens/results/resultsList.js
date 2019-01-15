import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// import sharedStyles from '../../styles/sharedStyles';

export default class ResultsList extends Component {

  static navigationOptions = {
    title: 'Saved Workouts',
    headerBackTitle: 'Workouts',
  }

  render(){
    // const { workoutData, timer } = this.props.navigation.state.params;
    // console.log("workoutData", workoutData);

    return(
      <View>
        <Button
          title="Jan 14 - 5 x 200m"
          onPress={() => this.props.navigation.navigate(`WorkoutDetail`)} />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	}
// });