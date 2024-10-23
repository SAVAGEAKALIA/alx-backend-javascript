/* eslint-disable */
// const getListStudents = require('./0-get_list_students');

export default function getStudentIdsSum(getListStudents) {
    if (getListStudents && Array.isArray(getListStudents)) {
        const newList = getListStudents.map((student) => student.id)
            .reduce((acc, student) => acc + student, 0);

        return newList;
    }
    console.log('getListStudents is empty or not an array');
}
