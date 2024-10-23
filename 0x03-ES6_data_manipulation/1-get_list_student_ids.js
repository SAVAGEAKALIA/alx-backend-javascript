/* eslint-disable */
export default function getListStudentIds(objects) {
    if (objects && Array.isArray(objects)) {
        const arrayId = objects.map((object) => object.id);
        return arrayId;
    }
    // console.log('Object empty Or Object is string');
    return [];
}
