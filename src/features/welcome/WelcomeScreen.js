import Screen from "../../common/Screen";
import { useDispatch } from "react-redux";
import { Text, Button } from "react-native-elements";
import { styles as s } from "react-native-style-tachyons";
import { quizStarted } from "../questions/questionsSlice";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const onStart = () => dispatch(quizStarted());
  return (
    <Screen style={[s.jcsa, s.w100p, s.aic]}>
      <Text h1>Welcome!</Text>
      <Button
        title="Start"
        containerStyle={[s.w80p, s.br5]}
        onPress={onStart}
      />
    </Screen>
  );
};

export default WelcomeScreen;
