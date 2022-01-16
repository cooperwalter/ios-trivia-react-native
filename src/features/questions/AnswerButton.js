import * as React from "react";
import { styles as s } from "react-native-style-tachyons";

import Button from "../../common/Button";

const stateStyles = {
  correct: [s.bg_success],
  incorrect: [s.bg_error],
};

const AnswerButton = ({ containerStyle = [], state = "", ...rest }) => {
  return (
    <Button
      containerStyle={[s.mv2, s.flx_1, s.w100p, s.br5, containerStyle]}
      disabledStyle={stateStyles[state] || []}
      disabledTitleStyle={[state && s.textAlternate]}
      {...rest}
    />
  );
};

export default AnswerButton;
