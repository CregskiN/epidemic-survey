import React, { memo } from 'react';
import PropType from 'prop-types';
import { Radio, Checkbox } from 'antd';
import { fromJS } from 'immutable';

import { InputCheckoutboxWrapper } from './index.js'
import InputBox from '../InputBox/index.jsx';

const InputCheckoutbox = memo((props) => {
	const {
		item,
		choiceType,
		changeRegFormInput,
		changeRegFormCheckout
	} = props;

	const [headerText, isRequired, pageId, qId] = [item.get('headerText'), item.get('isRequired'), item.get('pageId'), item.get('qId')]

	if (choiceType === 1) {
		const placeholder = item.get('placeholder');
		const maxLength = item.get('maxLength');
		return (
			<InputBox headerText={headerText} isRequired={isRequired} placeholder={placeholder} maxLength={maxLength} pageId={pageId} qId={qId} changeRegFormInput={changeRegFormInput} />
		)

	} else if (choiceType === 2) { /* 单选 */
		const options = item.get('options');
		const value = item.get('value');
		return (
			<InputCheckoutboxWrapper>
				<div className="header-text">{headerText} {isRequired ? <span>*</span> : ""}</div>
				<Radio.Group value={value} onChange={e => changeRegFormCheckout(pageId, qId, e.target.value, choiceType)}>
					{
						options.map((option, index) => {
							return (
								<Radio key={option.get('content')} value={index}>{option.get('content')}</Radio>
							)
						})
					}
				</Radio.Group>
			</InputCheckoutboxWrapper>
		)

	} else if (choiceType === 3) {/* 多选 */
		const options = item.get('options').toJS();
		const value = item.get('value').toJS();

		return (
			<InputCheckoutboxWrapper>
				<div className="header-text">{headerText} {isRequired ? <span>*</span> : ""}</div>
				<Checkbox.Group options={options} defaultValue={value} onChange={e => changeRegFormCheckout(pageId, qId, fromJS(e), choiceType)} />
			</InputCheckoutboxWrapper>
		)
	}
})


InputCheckoutbox.propType = {
	item: PropType.object.isRequired,
	choiceType: PropType.number.isRequired,
	changeRegFormInput: PropType.func.isRequired,
	changeRegFormCheckout: PropType.func.isRequired,
}

export default InputCheckoutbox;