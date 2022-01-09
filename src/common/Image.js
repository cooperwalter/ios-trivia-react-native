import React from "react";
import FastImage from "react-native-fast-image";

/**
 * Correctly handles both static images and network images passed to it's
 * `src` property. If a `source` property is passed, then it is used instead.
 *
 * Does not handle .svg files.
 *
 * Uses react-native-fast-image for better performance.
 */
const Image = ({ src, source: srcOverride, ...rest }) => {
  let source = srcOverride;
  if (!source) {
    if (typeof src === "number") {
      source = src;
    } else {
      source = { uri: src };
    }
  }
  return <FastImage source={source} {...rest} />;
};

Image.resizeMode = FastImage.resizeMode; // include resize mode enum from FastImage

export default Image;
