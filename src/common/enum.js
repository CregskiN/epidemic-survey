
function isThisType(val) {
    for (let key in this) { // this指向当前对象
        if (parseInt(key) === val || this[key] === val) {
            return true;
        }
    }
    return false;
}

export const illinessType = {
    0: '干咳',
    1: '乏力',
    2: '咳痰',
    3: '鼻塞',
    4: '流涕',
    5: '呼吸困难',
    6: '头疼',
    7: '胸闷',
    8: '呕吐',
    9: '腹泻',
    10: '其他症状',
}

export const yOrNChoiceType = {
    0: '是',
    1: '否',
}


/**
 * 1XXX 社区代码
 */
export const communitiesType = {
    0: '幸福街社区',
    1: '新城社区',
    2: '朝阳街社区',
    3: '盐厂社区',
}

export const errorCodeType = {
    10000: '服务器异常',
    10100: '参数类型错误',
    10200: 'appkey认证错误',
    10300: '登陆失败',
    10400: '数据库添加失败',
    10410: '数据库查询无结果',
    isThisType: isThisType
}

export const operateErrorType = {
    20000: '删除时未获取user_id或user_name',
}
