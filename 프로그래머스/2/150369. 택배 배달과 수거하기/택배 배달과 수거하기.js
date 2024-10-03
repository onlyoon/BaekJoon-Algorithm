function solution(cap, n, deliveries, pickups) {
    let orders = [];
    for (let i = 0; i < n; i++) {
        if (deliveries[i] > 0 || pickups[i] > 0) {
            orders.push([i + 1, deliveries[i], pickups[i]]);
        }
    }

    let delivery = 0;
    let pickup = 0;
    let answer = 0;

    while (orders.length > 0) {
        let [i, d, p] = orders.pop();
        delivery += d;
        pickup += p;

        while (delivery > 0 || pickup > 0) {
            delivery -= cap;
            pickup -= cap;
            answer += 2 * i;
        }
    }

    return answer;
}