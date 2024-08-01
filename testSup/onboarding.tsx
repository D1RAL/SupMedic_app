import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingItem from './onboardingItem';
import { RootStackParamList } from "./type";
import slides from './slides';
import useAuth from './hooks/useAuth';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<any>>(null);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { user } = useAuth();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNext = () => {
    if (slidesRef.current && currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleEnter = () => {
    if (user) {
      navigation.navigate('Home'); // Navigate to Home if user is logged in
    } else {
      navigation.navigate('Login'); // Navigate to Login if user is not logged in
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.buttonContainer}>
        {currentIndex < slides.length - 1 ? (
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.buttonText}>Suivant</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.enterButton} onPress={handleEnter}>
            <Text style={styles.enterButtonText}>COMMENCER</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: '80%',
    marginTop: 250,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vectorImage: {
    width: '180%',
    height: '100%',
    top: 240,
    right: 300,
    marginRight: 230,
    marginBottom: 1600,
  },
  vectorImageBis: {
    position: 'absolute',
    bottom: -40,
    width: '105%',
    height: '13%', // Ajustez la hauteur selon vos besoins
  },
  vectorImageBisBis:{
    position: 'absolute',
    top: -10,
    left:315,
    width: 150,
    height: 100, 
  },
  DoctorImage:{
    position: 'absolute',
    top: 270,
    left:51,
    width: 320,
    height: 300, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  enterButton: {
    backgroundColor: '#08BDBA',
    padding: 20,
    borderRadius: 30,
  },
  enterButtonText: {
    color: '#FFFF',
    fontSize: 16,
  },
});

export default Onboarding;
