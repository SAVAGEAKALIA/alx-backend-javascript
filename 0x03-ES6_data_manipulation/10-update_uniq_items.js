/* eslint-disable */
export default function updateUniqueItems(map) {

    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }
    for (const [key, value] of map) {
        if (value === 1) {
            // map[key] = 100;
            map.set(key, 100);
            // console.log(map.get(key));
        }
    }
    return map;
}
