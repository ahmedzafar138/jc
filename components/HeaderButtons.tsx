import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const HeaderButtons = () => {
  const router = useRouter();

  const handleLoginPress = () => {
    router.push('/(auth)/login');
  };

  const handleCartPress = () => {
    // router.push('/cart');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
        <Feather name="user" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCartPress} style={styles.button}>
        <Feather name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
  },
  button: {
    marginLeft: 30,
  },
});

export default HeaderButtons;

