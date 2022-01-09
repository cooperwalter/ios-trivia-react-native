import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { styles as s } from "react-native-style-tachyons";
import Screen from "../../common/Screen";
import { selectCurrentQuestion, questionAnswered } from "./questionsSlice";
import AnswerButton from "./AnswerButton";

function QuestionScreen() {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const dispatch = useDispatch();
  const { prompt, answers } = currentQuestion;
  const onSelect = (selectedIndex) => () =>
    dispatch(questionAnswered(selectedIndex));
  return (
    <Screen style={[s.aic, s.jcc]}>
      <View style={[s.flx1, s.jcc]}>
        <Text h1>{prompt}</Text>
      </View>
      <View style={[s.aic, s.w100p, s.flx2]}>
        {answers.map(({ text }, index) => (
          <AnswerButton title={text} key={text} onPress={onSelect(index)} />
        ))}
      </View>
    </Screen>
  );
}

export default QuestionScreen;
