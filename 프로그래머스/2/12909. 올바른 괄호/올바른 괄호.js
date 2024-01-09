function solution(s){
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    let line = s.split("");
    if (line.length % 2 !== 0) {
        return false;
    }
    let stack = [];
    for (let i = 0; i < line.length; i++) {
        if (line[i] === '(') {
            stack.push("(");
        } else {
            if (stack[stack.length - 1] === "(") {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
}