import { Text as RNEText } from "react-native-elements";
import { styles as s } from "react-native-style-tachyons";

const Text = ({ children, style = [], ...rest }) => {
  return (
    <RNEText
      style={[{ fontFamily: "PlayfairDisplay_400Regular" }, s.text, ...style]}
      {...rest}
    >
      {children}
    </RNEText>
  );
};

export default Text;
