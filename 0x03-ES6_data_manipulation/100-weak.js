/* eslint-disable */
const weakMap = new WeakMap();
export {weakMap};

export function queryAPI(endpoint) {
    let count = weakMap.get(endpoint) || 0;
    count += 1;

    // console.log(`${weakMap.get(endpoint)} ` + 'weakmap length');

    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }

    weakMap.set(endpoint, count);
}
