import Button from "./Button";
import { styles as s } from "react-native-style-tachyons";

const ActionButton = ({ buttonStyle = [], ...rest }) => {
  return <Button buttonStyle={[s.bg_green, ...buttonStyle]} {...rest} />;
};

export default ActionButton;
