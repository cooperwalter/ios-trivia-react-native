import * as React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentQuestion, questionAnswered } from "./questionsSlice";

import { Text, Button } from "react-native-elements";

function QuestionScreen() {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const dispatch = useDispatch();
  const { prompt, answers } = currentQuestion;
  const onSelect = (selectedIndex) => () =>
    dispatch(questionAnswered(selectedIndex));
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text h1>{prompt}</Text>
      {answers.map(({ text }, index) => (
        <Button title={text} key={text} onPress={onSelect(index)} />
      ))}
    </View>
  );
}

export default QuestionScreen;
