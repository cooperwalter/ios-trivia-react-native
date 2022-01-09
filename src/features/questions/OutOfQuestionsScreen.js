import Screen from "../../common/Screen";
import { useDispatch } from "react-redux";
import { Text, Button } from "react-native-elements";
import { styles as s } from "react-native-style-tachyons";
import { restart } from "./questionsSlice";

const OutOfQuestionsScreen = () => {
  const dispatch = useDispatch();
  const onRestart = () => dispatch(restart());
  return (
    <Screen style={[s.jcsa, s.w100p, s.aic]}>
      <Text h1>You've Answered All the Questions!</Text>
      <Button
        title="Restart"
        containerStyle={[s.w80p, s.br5]}
        onPress={onRestart}
      />
    </Screen>
  );
};

export default OutOfQuestionsScreen;
