/* eslint-disable */
import ClassRoom from './0-classroom.js';

export default function initializeRoom() {
    const array = [19, 20, 34];
    const newArray = [];
    let room;
    // const newArray = array.map((arr) => new ClassRoom(arr));
    // return newArray;
    array.forEach((array) => {
        const room = new ClassRoom(array);
        newArray.push(room);
    });
    return newArray;
}
