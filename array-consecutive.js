function solution(statues) {
    statues.sort((a, b) => a - b);
    let steps = 0;
    for(let i = 0; i < statues.length - 1; i++) {
        if(statues[i+1] >= 0 && ( (statues[i] +1) !== statues[i+1])) {
            steps += statues[i+1] - statues[i] - 1;
        }
        if(statues[i+1] < 0 && ( (statues[i] + 1) !== statues[i+1])) {
            steps += Math.abs(statues[i]) - Math.abs(statues[i+1] - 1);
        }
    }
    return steps;
}

console.log(solution([6, 2, 3, 8]));
console.log(solution([0, -10, -36]));