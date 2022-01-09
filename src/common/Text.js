import { Text as RNEText } from "react-native-elements";

const Text = ({ children, style = [], ...rest }) => {
  return (
    <RNEText
      style={[{ fontFamily: "PlayfairDisplay_400Regular" }, ...style]}
      {...rest}
    >
      {children}
    </RNEText>
  );
};

export default Text;
