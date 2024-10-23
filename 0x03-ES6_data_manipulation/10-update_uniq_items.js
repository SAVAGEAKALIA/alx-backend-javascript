/* eslint-disable */
export default function updateUniqueItems(map) {
    for (const [key, value] of map) {
        if (value === 1) {
            // map[key] = 100;
            map.set(key, 100);
            // console.log(map.get(key));
            if (map.get(key) === 1 || map.get(key) === undefined) {
                throw new Error('Cannot process');
            }
        }
    }
    return map;
}
