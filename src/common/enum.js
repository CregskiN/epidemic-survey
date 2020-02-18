
function isThisType(val) {
    for (let key in this) { // this指向当前对象
        if (this[key] === val) {
            return true;
        }
    }
    return false;
}

const illinessType = {
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
    isThisType,
}

