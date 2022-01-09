import Screen from "../../common/Screen";
import { useDispatch } from "react-redux";
import { styles as s } from "react-native-style-tachyons";
import { restart } from "./questionsSlice";
import Text from "../../common/Text";
import ActionButton from "../../common/ActionButton";

const OutOfQuestionsScreen = () => {
  const dispatch = useDispatch();
  const onRestart = () => dispatch(restart());
  return (
    <Screen style={[s.jcsa, s.w100p, s.aic, s.pa4]}>
      <Text h1>You've Answered All the Questions!</Text>
      <ActionButton
        title="Restart"
        containerStyle={[s.w100p, s.br5]}
        onPress={onRestart}
      />
    </Screen>
  );
};

export default OutOfQuestionsScreen;
