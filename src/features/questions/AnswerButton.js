import * as React from "react";
import { styles as s } from "react-native-style-tachyons";

import { Button } from "react-native-elements";

const AnswerButton = (props) => {
  return (
    <Button containerStyle={[s.mv2, s.flx_1, s.w100p, s.br5]} {...props} />
  );
};

export default AnswerButton;
