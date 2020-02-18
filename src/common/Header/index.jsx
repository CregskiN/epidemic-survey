import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./index.js";

const _headerTextSwitch = (pageId) => {
	switch (pageId) {
		case 1:
			return "科普小知识";
		case 2:
			return "疫情上报登记表";
		case 3:
			return "社区人员填写情况";
		default:
			return;
	}
};

const Header = memo(function (props) {
	console.log("Header组件渲染了！");

	const { pageId } = props;

	return <HeaderWrapper>{_headerTextSwitch(pageId)}</HeaderWrapper>;
});

Header.propTypes = {
	pageId: PropTypes.number.isRequired
};

export default Header;
