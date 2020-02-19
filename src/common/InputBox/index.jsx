import React, { memo } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

import { InputBoxWrapper } from "./index.js";


const InputBox = memo((props) => {
	const {
		headerText,
		isRequired,
		maxLength,
		placeholder,
		pageId,
		qId,
		changeRegFormInput,
		value
	} = props;

	return (
		<InputBoxWrapper>
			<div className="header-text">{headerText} {isRequired ? <span>*</span> : ""}</div>

			<Input maxLength={maxLength} size='large' placeholder={placeholder} value={value} onChange={e => changeRegFormInput(pageId, qId, e.target.value)} />
		</InputBoxWrapper>
	);
});

InputBox.propTypes = {
	headerText: PropTypes.string.isRequired
}

export default InputBox;
