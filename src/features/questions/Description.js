import { View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import Text from "../../common/Text";

const Description = ({ children, ...rest }) => {
  if (!children) {
    return null;
  }
  return (
    <View {...rest}>
      <Text style={[s.bold]}>Description 📝</Text>
      <Text p>{children}</Text>
    </View>
  );
};

export default Description;
