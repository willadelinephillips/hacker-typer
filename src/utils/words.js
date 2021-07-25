import {phrases} from "./phrases.js"

export const generate = (count = 10) => {

    return new Array(count)
      .fill()
      .map(_ => phrases())
      .join(' ');
  };
