/* eslint-disable */
export default function getStudentsByLocation(getListStudents, location) {
    const arrayLocation = getListStudents.filter((locat) => {
        if (locat.location === location) {
            return locat;
        }
    });
    return arrayLocation;
}
