import * as React from "react";
import { useSelector } from "react-redux";
import { selectStarted } from "./features/questions/questionsSlice";
import QuestionScreen from "./features/questions/QuestionScreen";
import WelcomeScreen from "./features/welcome/WelcomeScreen";

function AppNavigator() {
  const started = useSelector(selectStarted);
  if (started) {
    return <QuestionScreen />;
  }

  return <WelcomeScreen />;
}

export default AppNavigator;
