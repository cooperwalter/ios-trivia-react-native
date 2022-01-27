import { Easing, LayoutAnimation, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { styles as s, sizes } from "react-native-style-tachyons";
import {
  restart,
  selectedAnsweredAllIds,
  selectedAnsweredCorrectIds,
} from "./questionsSlice";
import Screen from "../../common/Screen";
import Text from "../../common/Text";
import ActionButton from "../../common/ActionButton";
import React from "react";

const OutOfQuestionsScreen = () => {
  const dispatch = useDispatch();

  const numAnswered = useSelector(selectedAnsweredAllIds).length;
  const numCorrect = useSelector(selectedAnsweredCorrectIds).length;
  const percentCorrect = Math.round((numCorrect / numAnswered) * 100);

  const progressRef = React.useRef(null);

  React.useEffect(() => {
    const timeoutId = setTimeout(
      () => progressRef.current.animate(percentCorrect, 1000, Easing.linear),
      500
    );

    return () => clearTimeout(timeoutId);
  }, [percentCorrect]);

  const onRestart = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(750, "easeInEaseOut", "opacity")
    );
    dispatch(restart());
  };

  return (
    <Screen style={[s.jcsa, s.w100p, s.aic, s.pa4]}>
      <View style={[s.aic]}>
        <Text h1>You've Answered All the Questions</Text>
        <Text style={[s.mt3]} h3>
          Great Job!
        </Text>
      </View>
      <View style={[s.aic, { top: -20 }]}>
        <AnimatedCircularProgress
          ref={progressRef}
          size={150}
          width={15}
          fill={0}
          backgroundColor={s.primaryLight.color}
          tintColor={s.secondary.color}
          onAnimationComplete={() => console.log("onAnimationComplete")}
        >
          {(fill) => (
            <Text style={[s.secondary]} h3>
              {fill.toFixed(0)}%
            </Text>
          )}
        </AnimatedCircularProgress>
        <Text style={[s.secondary, s.absolute, { bottom: -sizes.ma5 }]} h3>
          {numCorrect} / {numAnswered}
        </Text>
      </View>
      <ActionButton
        title="Play Again"
        containerStyle={[s.w100p, s.br5]}
        onPress={onRestart}
      />
    </Screen>
  );
};

export default OutOfQuestionsScreen;
