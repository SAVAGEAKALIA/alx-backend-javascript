/* eslint-disable */
export default function hasValuesFromArray(set, subset) {
    for (const elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
