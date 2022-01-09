import * as React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { styles as s } from "react-native-style-tachyons";
import Screen from "../../common/Screen";
import {
  selectCurrentQuestion,
  selectIsAnswered,
  questionAnswered,
  nextQuestionRequested,
} from "./questionsSlice";
import AnswerButton from "./AnswerButton";

function QuestionScreen() {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const isAnswered = useSelector(selectIsAnswered);
  const dispatch = useDispatch();
  const { prompt, answers } = currentQuestion;
  const onSelect = (selectedIndex) => () =>
    dispatch(questionAnswered(selectedIndex));

  const onNext = () => dispatch(nextQuestionRequested());
  return (
    <Screen style={[s.aic]}>
      <View style={[s.flx1, s.jcc]}>
        <Text h1>{prompt}</Text>
      </View>
      <View style={[s.aic, s.w80p, s.flx2, s.jcsb]}>
        <View style={[s.aic, s.w100p]}>
          {answers.map(({ text }, index) => (
            <AnswerButton
              title={text}
              key={text}
              onPress={onSelect(index)}
              disabled={isAnswered}
            />
          ))}
        </View>
        <Button
          title="Next"
          containerStyle={[s.w100p, s.br5, !isAnswered && s.o_0]}
          disabled={!isAnswered}
          onPress={onNext}
        />
      </View>
    </Screen>
  );
}

export default QuestionScreen;
