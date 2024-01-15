function solution(k, m, score) {
    const sortedScore = score.sort((a, b) => {
        return b - a;
    })
    console.log(sortedScore);
    let result = 0;
    for (let i = m; i <= score.length; i += m) {
        result += sortedScore[i - 1] * m;
        // console.log(`i: `, i);
        // console.log(`sortedScore[${i - 1}]: `, sortedScore[i - 1]);
        // console.log(`result: `, result);
    }
    
    return result;
}

// k = 가장 높은 점수
// m = 포장을 위한 사과의 개수
// score = 각 사과의 개별 점수

// 포장된 사과들의 점수는 p * m으로 주어지며, 이 포장된 사과들로 얻을 수 있는 최대 이익을 구하라.
// 사과는 한 상자 단위로만 판매하며, 남은 사과는 버린다.

