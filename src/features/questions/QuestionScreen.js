import * as React from "react";
import { LayoutAnimation, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { styles as s } from "react-native-style-tachyons";
import Screen from "../../common/Screen";
import {
  selectCurrentQuestion,
  selectIsAnswered,
  selectedAnsweredById,
  questionAnswered,
  nextQuestionRequested,
} from "./questionsSlice";
import AnswerButton from "./AnswerButton";
import ActionButton from "../../common/ActionButton";
import Text from "../../common/Text";

const getButtonState = (index, answeredIndex, correctIndex) => {
  if (index === correctIndex) {
    return "correct";
  } else if (index === answeredIndex) {
    return "incorrect";
  }

  return "";
};

function QuestionScreen() {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const isAnswered = useSelector(selectIsAnswered);
  const answered = useSelector(selectedAnsweredById);
  const dispatch = useDispatch();
  const { prompt, answers } = currentQuestion;
  const onSelect = (selectedIndex) => () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(750, "easeInEaseOut", "opacity")
    );
    dispatch(questionAnswered(selectedIndex));
  };

  const onNext = () => dispatch(nextQuestionRequested());
  return (
    <Screen style={[s.aic, s.pa4]}>
      <View style={[s.flx1, s.jcc]}>
        <Text h1>{prompt}</Text>
      </View>
      <View style={[s.aic, s.w100p, s.flx2, s.jcsb]}>
        <View style={[s.aic, s.w100p]}>
          {answers.map(({ text }, index) => (
            <AnswerButton
              title={text}
              key={text}
              onPress={onSelect(index)}
              state={
                !isAnswered
                  ? ""
                  : getButtonState(
                      index,
                      answered[currentQuestion.id].answeredIndex,
                      currentQuestion.correctIndex
                    )
              }
              disabled={isAnswered}
            />
          ))}
        </View>
        <ActionButton
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
