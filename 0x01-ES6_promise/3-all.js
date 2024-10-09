/* eslint-disable */
import { createUser, uploadPhoto } from './utils';
// const {uploadPhoto, createUser} = require('./utils')

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      // console.log(`${value.body} ${value.firstName} ${value.lastName}`)
      let str = '';
      const array = [];
      for (const val of value) {
        for (const dict in val) {
          if (val[dict] === 200) {
            // Do Nothing
          } else {
            // if (dict === Object.keys(val)[Object.keys(val).length-1]){
            //     str += val[dict]
            // }
            // else {
            //     str += val[dict] + " "
            // }
            array.push(val[dict]);
          }
        }
      }
      // console.log(array);
      for (let i = 0; i < array.length; i++) {
        // str += array[i]
        if (i === array.length - 1) {
          str += array[i];
        } else {
          str += `${array[i]} `;
        }
      }
      console.log(str);
    })
    .catch((err) => {
      console.log('Signup system offline');
    });
}
