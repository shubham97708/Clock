import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import DutyStatusButton from '../../components/DutyStatusButton';
import CountdownTimer from '../../components/CountdownTimer';
import {homeStyles} from './styles';
import {useTimers, useDutyStatus} from './homeCustomHooks';

const windowWidth = Dimensions.get('window').width;

const Home = () => {
  const {
    drivingTimer,
    setDrivingTimer,
    shiftTimer,
    setShiftTimer,
    cycleTimer,
    setCycleTimer,
    resetDrivingTimer,
    resetShiftTimer,
    resetCycleTimer,
  } = useTimers();

  const {activeDutyStatus, handleDutyStatusChange} = useDutyStatus();

  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.buttonContainer}>
        <TouchableOpacity
          style={{...homeStyles.button, backgroundColor: '#274E6F'}}>
          <Text style={homeStyles.buttonText}>Duty Status</Text>
        </TouchableOpacity>
      </View>

      <View style={homeStyles.dutyStatusContainer}>
        <DutyStatusButton
          status="Off Duty"
          activeDutyStatus={activeDutyStatus}
          onPress={handleDutyStatusChange}
        />
        <DutyStatusButton
          status="On Duty"
          activeDutyStatus={activeDutyStatus}
          onPress={handleDutyStatusChange}
        />
      </View>

      <View style={homeStyles.dutyStatusContainer}>
        <DutyStatusButton
          status="Sleeper"
          activeDutyStatus={activeDutyStatus}
          onPress={handleDutyStatusChange}
        />
        <DutyStatusButton
          status="Driving"
          activeDutyStatus={activeDutyStatus}
          onPress={handleDutyStatusChange}
        />
      </View>

      <View style={homeStyles.clockMainContainer}>
        <View style={homeStyles.logBookHeader}>
          <Text style={homeStyles.logBookHeaderText}>LogBook</Text>
        </View>

        <View style={homeStyles.clockContainer}>
          <CountdownTimer
            label="Driving Clock"
            duration={drivingTimer}
            onComplete={resetDrivingTimer}
          />
          <View style={homeStyles.countdownTimer}>
            <Text style={homeStyles.clockValue}>N/A</Text>
          </View>
        </View>

        <View style={homeStyles.clockContainer}>
          <CountdownTimer
            label="Shift Clock"
            duration={shiftTimer}
            onComplete={resetShiftTimer}
          />
          <CountdownTimer
            label="Cycle Clock"
            duration={cycleTimer}
            onComplete={resetCycleTimer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
