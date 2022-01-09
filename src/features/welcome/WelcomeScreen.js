import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import { styles as s } from "react-native-style-tachyons";
import { quizStarted } from "../questions/questionsSlice";
import Screen from "../../common/Screen";
import Image from "../../common/Image";
import Text from "../../common/Text";
import Button from "../../common/Button";

const logo = require("../../../assets/logo/logo_transparent_background.png");

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const onStart = () => dispatch(quizStarted());
  return (
    <Screen style={[s.w100p, s.aic, s.pa4]}>
      <View style={[s.w100p]}>
        <Image source={logo} style={[s.w4, s.h4, s.asc]} />
        <Text h2 style={[s.mv3]}>
          Learn the Delightful History of iOS{" "}
          <Icon name="apple1" type="ant-design" size={30} /> and the iPhone 📱
        </Text>
      </View>
      <View style={[s.flx1, s.w100p, s.aic, s.jcc]}>
        <Button
          title="Begin"
          containerStyle={[s.w100p, s.br5]}
          onPress={onStart}
        />
      </View>
    </Screen>
  );
};

export default WelcomeScreen;
