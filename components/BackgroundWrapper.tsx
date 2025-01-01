import React from 'react';
import { ImageBackground, StyleSheet, View, ViewProps } from 'react-native';

interface BackgroundWrapperProps extends ViewProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children, style, ...props }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Adjust the path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={[styles.content, style]} {...props}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default BackgroundWrapper;
