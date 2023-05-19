import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type GoalItemProps = {
  itemText: string;
  id: string;
  onDeleteItem: (id: string) => void;
};

const GoalItem: React.FC<GoalItemProps> = ({ itemText, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#58A4B0' }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemText}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#a9bcd0',
  },
  goalText: {
    padding: 8,
  },
  pressedItem: {
    opacity: 0.6,
  },
});
