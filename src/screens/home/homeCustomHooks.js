import { useState } from 'react';

export const useTimers = () => {
  const [drivingTimer, setDrivingTimer] = useState(60 * 60);
  const [shiftTimer, setShiftTimer] = useState(2 * 60 * 60);
  const [cycleTimer, setCycleTimer] = useState(24 * 60 * 60);

  const resetDrivingTimer = () => setDrivingTimer(60 * 60);
  const resetShiftTimer = () => setShiftTimer(2 * 60 * 60);
  const resetCycleTimer = () => setCycleTimer(24 * 60 * 60);

  return {
    drivingTimer,
    setDrivingTimer,
    shiftTimer,
    setShiftTimer,
    cycleTimer,
    setCycleTimer,
    resetDrivingTimer,
    resetShiftTimer,
    resetCycleTimer,
  };
};

export const useDutyStatus = () => {
  const [activeDutyStatus, setActiveDutyStatus] = useState(null);

  const handleDutyStatusChange = (status) => {
    console.log(`Duty Status changed to: ${status}`);
    setActiveDutyStatus(status);
  };

  return {
    activeDutyStatus,
    handleDutyStatusChange,
  };
};
