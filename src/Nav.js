import * as React from "react";
import { useSelector } from "react-redux";
import {
  selectStarted,
  selectedOutOfQuestions,
} from "./features/questions/questionsSlice";
import QuestionScreen from "./features/questions/QuestionScreen";
import WelcomeScreen from "./features/welcome/WelcomeScreen";
import OutOfQuestionsScreen from "./features/questions/OutOfQuestionsScreen";

function AppNavigator() {
  const started = useSelector(selectStarted);
  const outOfQuestions = useSelector(selectedOutOfQuestions);
  if (outOfQuestions) {
    return <OutOfQuestionsScreen />;
  }
  if (started) {
    return <QuestionScreen />;
  }

  return <WelcomeScreen />;
}

export default AppNavigator;
