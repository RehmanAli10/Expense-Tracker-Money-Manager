import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

function Loader({size, color}) {
  return <ActivityIndicator size={size} color={color} />;
}

export default Loader;

const styles = StyleSheet.create({});
