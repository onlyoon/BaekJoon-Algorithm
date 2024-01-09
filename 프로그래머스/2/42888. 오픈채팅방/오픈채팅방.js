function solution(record) {
    const result = [];
    const stateObject = {};
    for (let i = 0; i < record.length; i++){
        let chatRecord = record[i].split(" ");
        switch (chatRecord[0]) {
            case ('Enter'):
                result.push(`${chatRecord[1]}님이 들어왔습니다.`);
                stateObject[chatRecord[1]] = chatRecord[2];
                break;
            case ('Change'):
                stateObject[chatRecord[1]] = chatRecord[2];
                break;
            case ('Leave'):
                result.push(`${chatRecord[1]}님이 나갔습니다.`);
                break;
        }
    }
    const finalResult = result.map((cur) => {
        let line = cur.split("님이");
        return cur.replace(line[0], stateObject[line[0]]);
    });
    return finalResult;
}