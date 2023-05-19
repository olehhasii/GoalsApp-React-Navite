import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

type GoalInputProps = {
  onAddGoal: (newGoalText: string) => void;
  onCloseModal: () => void;
  visible: boolean;
};

const GoalInput: React.FC<GoalInputProps> = ({
  onAddGoal,
  visible,
  onCloseModal,
}) => {
  const [goalInput, setGoalInput] = useState<string>('');

  const goalInputHandler = (goalText: string) => {
    setGoalInput(goalText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                onAddGoal(goalInput);
                setGoalInput('');
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#373F51',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    marginRight: 8,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#A9BCD0',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
