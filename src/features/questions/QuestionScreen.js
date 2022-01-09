import * as React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import * as R from "ramda";
import { selectCurrentQuestion } from "./questionsSlice";

import { Text, Button } from "react-native-elements";

function QuestionScreen() {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const { prompt, answers } = currentQuestion;
  console.log(currentQuestion);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text h1>{prompt}</Text>
      {R.pipe(
        R.map(({ text }) => text),
        R.map((text) => <Button key={text} title={text} />)
      )(answers)}
    </View>
  );
}

export default QuestionScreen;
