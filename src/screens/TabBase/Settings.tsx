import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Settings = () => {
  return <Text style={styles.settingsContainer}>Settings Screen</Text>;
};

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Settings;
