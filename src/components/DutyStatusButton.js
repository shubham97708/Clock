// DutyStatusButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DutyStatusButton = ({ status, activeDutyStatus, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(status)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 25,
        backgroundColor: activeDutyStatus === status ? '#FF0000' : '#808080',
      }}>
      <Text style={{ fontSize: 14, fontWeight: '400', color: '#FFFFFF' }}>
        {status}
      </Text>
    </TouchableOpacity>
  );
};

export default DutyStatusButton;
