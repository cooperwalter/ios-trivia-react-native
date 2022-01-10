import { Button as RNEButton } from "react-native-elements";
import { styles as s } from "react-native-style-tachyons";

const Button = ({ titleStyle = [], buttonStyle = [], ...rest }) => {
  return (
    <RNEButton
      titleStyle={[{ fontFamily: "PlayfairDisplay_400Regular" }, ...titleStyle]}
      buttonStyle={[s.bg_primary, ...buttonStyle]}
      {...rest}
    />
  );
};

export default Button;
