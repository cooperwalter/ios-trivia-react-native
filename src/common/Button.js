import { Button as RNEButton } from "react-native-elements";

const Button = ({ titleStyle = [], ...rest }) => {
  return (
    <RNEButton
      titleStyle={[{ fontFamily: "PlayfairDisplay_400Regular" }, ...titleStyle]}
      {...rest}
    />
  );
};

export default Button;
