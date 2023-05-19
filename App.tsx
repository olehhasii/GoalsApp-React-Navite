import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

type GoalItem = {
  text: string;
  id: string;
};

export default function App() {
  const [goalsList, setGoalsList] = useState<GoalItem[]>([]);
  const [modalIsVisible, setModalIsVisivle] = useState<boolean>(false);

  const onOpenModal = () => {
    setModalIsVisivle(true);
  };

  const closeModal = () => {
    setModalIsVisivle(false);
  };

  const addGoalHandler = (newGoalText: string) => {
    setGoalsList(goals => [
      ...goals,
      { text: newGoalText, id: Math.random().toString() },
    ]);
    closeModal();
  };

  const deleteGoalHandler = (id: string) => {
    setGoalsList(goals => goals.filter(goal => goal.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color="#58A4B0" onPress={onOpenModal} />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
            onCloseModal={closeModal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={item => (
              <GoalItem
                itemText={item.item.text}
                id={item.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
