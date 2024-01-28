// CountdownTimer.js
import React from 'react';
import { View, Text } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CountdownTimer = ({ duration, onComplete, label }) => {
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10, marginBottom: 10, color: '#000000' }}>
        {label}
      </Text>
      {/* Countdown Timer */}
      <CountdownCircleTimer
        size={130}
        isPlaying
        duration={duration}
        onComplete={onComplete}
        colors={['#004777', 0.4]}
      >
        {({ remainingTime, animatedColor }) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: animatedColor, fontSize: 20 }}>
              {label === 'Cycle Clock' ?
                `${Math.floor(remainingTime / 3600)}:${Math.floor((remainingTime % 3600) / 60)}:${remainingTime % 60}` :
                `${Math.floor(remainingTime / 60)}:${remainingTime % 60}`
              }
            </Text>
            <Text style={{ justifyContent: 'center' }}>Left</Text>
          </View>
        )}
      </CountdownCircleTimer>
    </View>
  );
};

export default CountdownTimer;
