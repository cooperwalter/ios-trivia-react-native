import { styles as s } from "react-native-style-tachyons";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen = ({ children, style = [], ...rest }) => {
  return (
    <SafeAreaView style={[s.bg_background, s.flx1, ...style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;
