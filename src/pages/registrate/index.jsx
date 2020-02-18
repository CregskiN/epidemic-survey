import React, { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { createSelector } from 'reselect';

/* 组件引入 */
import Background from "../../common/Background/index.jsx";
import RegistrateForm from "./component/RegistrateForm/index.jsx";
import RegistrateFormDetail from './component/RegistrateFormDetail/index.jsx';

/*  actionCreators引入 */
import { actionCreators } from './store/index.js';

/* style-components & 静态资源引入 */
import {
	RegistrateWrapper,
	RegistrateFormWrapper,
	BackgroundWrapper,
} from "./index.js";
import backgroundUrl from "../../static/imgs/background.png";

const toTop = () => {
	document.documentElement.scrollTop = 0;
}

function Registrate() {
	console.log('页面组件渲染了!');

	// 获取数据 // TODO: 可优化，将selector分散到两个registrateForm组件内
	const regSelector = createSelector(state => state, state => state.registrate);
	const reg = useSelector(regSelector, shallowEqual);
	const [regContents, regDetailContents, pageId] = [reg.get('regContents'), reg.get('regDetailContents'), reg.get('pageId')];

	const dispatch = useDispatch();

	const changePage = useCallback((toPageId) => {
		toTop();
		dispatch(actionCreators.changePageTo(toPageId));
	}, [dispatch])

	const changeRegFormInput = useCallback((page, qId, newValue) => {
		dispatch(actionCreators.changeRegFormInputAction(page, qId, newValue))
	}, [dispatch])

	const changeRegFormCheckout = useCallback((pageId, qId, newValue, choiceType) => {
		dispatch(actionCreators.changeRegFormCheckoutAction(pageId, qId, newValue, choiceType));
	}, []);

	return (
		<RegistrateWrapper>

			{
				getRegistrateFrom(
					pageId, regContents, regDetailContents,
					changePage, changeRegFormInput, changeRegFormCheckout
				)
			}

			<BackgroundWrapper>
				<Background bgUrl={backgroundUrl} />
			</BackgroundWrapper>

			<footer className='footer'>—— 全面落实党中央决策部署&emsp;坚决打赢疫情防控战 ——</footer>

		</RegistrateWrapper>
	);
}

const getRegistrateFrom = (
	pageId, regContents, regDetailContents,
	changePage, changeRegFormInput, changeRegFormCheckout
) => {

	switch (pageId) {
		case 1:
			return (
				<RegistrateFormWrapper >
					<RegistrateForm
						changePage={changePage}
						regContents={regContents}
						changeRegFormInput={changeRegFormInput}
					/>
				</RegistrateFormWrapper>
			)
		case 2:
			return (
				<RegistrateFormWrapper >
					<RegistrateFormDetail
						changePage={changePage}
						regDetailContents={regDetailContents}
						changeRegFormInput={changeRegFormInput}
						changeRegFormCheckout={changeRegFormCheckout}
					/>
				</RegistrateFormWrapper>
			)
		default:
			return;
	}
}

export default Registrate;
