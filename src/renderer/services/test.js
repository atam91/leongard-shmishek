import { YES, NO, LIE } from '../data/constants'
import { RESULT_MAP } from '../data/test'


export const getResult = (answers) => {
    const result = { types: [] };

    const getAnswersScore = (answersMap, answer) => {
        return answersMap.map(number => number - 1).filter(index => answers[index] === answer).length;
    };

    Object.keys(RESULT_MAP).forEach(type => {
        const typeMap = RESULT_MAP[type];
        let score = 0;

        if (typeMap[YES]) {
            score += getAnswersScore(typeMap[YES], YES);
        }
        if (typeMap[NO]) {
            score += getAnswersScore(typeMap[NO], NO);
        }
        score *= typeMap.ratio;

        if (type === LIE) {
            result[LIE] = score;
        } else {
            result.types.push({ type, score });
        }
    });

    return result;
};