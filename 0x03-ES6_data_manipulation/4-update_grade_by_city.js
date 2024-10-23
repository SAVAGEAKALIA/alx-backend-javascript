/* eslint-disable */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
    if (Array.isArray(getListStudents) && Array.isArray(newGrades)) {
        const newUpdateStudent = getListStudents.map((update) => update)
            .filter((update) => {
                if (update.location === city) {
                    for (const idx of newGrades) {
                        if (update.id === idx.studentId) {
                            update.grade = idx.grade;
                            return {update, done: true};
                        } else {
                            //update.grade = idx.grade;
                            update.grade = 'N/A';
                            //return {update, done: true};
                        }
                    }
                    return update;
                }
            });

        return newUpdateStudent;
    }
    console.log(`One of the following has issues: ${getListStudents} or ${city} or ${newGrades}`);
    // console.log(getListStudents);
    // console.log(newGrades);
}
