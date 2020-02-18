import React from "react";
import PropType from "prop-types";

import { 
    BackgroundWrapper 
} from "./index.js";

function Background(props) {

    const {
        bgUrl
    } = props;

  return (
    <BackgroundWrapper>
        <img className='bg-img' src={bgUrl} alt='众志成城，战胜疫情！'></img>
    </BackgroundWrapper>
  );
}

Background.PropType = {
    backgroundUrl: PropType.string.isRequired
};

export default Background;
