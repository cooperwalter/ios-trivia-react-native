import { View } from "react-native";
import { styles as s } from "react-native-style-tachyons";

const Screen = ({ children, style = [], ...rest }) => {
  return (
    <View style={[s.bg_near_white, s.flx1, ...style]} {...rest}>
      {children}
    </View>
  );
};

export default Screen;
