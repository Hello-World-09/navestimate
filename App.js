import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerNavigation from './src/CustomDrawerNavigation';

const MyCustomApp = () => {
  return (
    <NavigationContainer>
      <CustomDrawerNavigation />
    </NavigationContainer>
  );
};

export default MyCustomApp;
