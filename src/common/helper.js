import { errorCodeType } from './enum';
/**
 * 
 * @param {*} getDay 生日代码-示例 20000214
 */
export const getDay = (birthCode) => {
    return {
        $y: parseInt(birthCode.slice(0, 4)),
        $M: parseInt(birthCode.slice(4, 6)),
        $D: parseInt(birthCode.slice(6, 8)),
    }
};


/**
 * 获取周岁年龄
 * @param {object} birthday {$y: number, $M: number, $D: number}
 * @param {object} currentDay {$y: number, $M: number, $D: number}
 */
export const getAge = (birthday, currentDay) => {
    let age;

    const monthSub = currentDay.$M - birthday.$M;
    const yearSub = currentDay.$y - birthday.$y;
    const daySub = currentDay.$D - birthday.$D;

    if (monthSub > 0) {
        age = yearSub + 1;
        return age;
    } else if (monthSub < 0) {
        age = yearSub - 1;
        return age;
    } else if (monthSub === 0) {
        if (daySub > 0) {
            age = yearSub;
            return age;
        }
    }
    age = 0;
    return age;
}

/**
 * 处理axios错误
 * @param {*} res 
 */
export const dealWithAxiosErrors = (res) => {
    const { error_code, msg } = res.data;
    if (errorCodeType.isThisType(error_code)) {
        alert(`${msg ? msg : errorCodeType[error_code]}`)
        return 'bad request';
    }
    if (typeof msg !== 'string') {
        return 'success';
    }
    alert(`${msg}`);
    return 'success'
}