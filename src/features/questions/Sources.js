import { View } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import * as WebBrowser from "expo-web-browser";
import Text from "../../common/Text";

const Sources = ({ sources, ...rest }) => {
  if (!sources.length) {
    return null;
  }

  const openURL = (url) => () => WebBrowser.openBrowserAsync(url);
  return (
    <View {...rest}>
      <Text style={[s.bold, s.f5]}>
        Source{sources.length > 1 ? "s" : ""} ℹ️
      </Text>
      {sources.map((source) => (
        <Text
          style={[s.f6, s.underline]}
          key={source}
          onPress={openURL(source)}
        >
          {source}
        </Text>
      ))}
    </View>
  );
};

export default Sources;
