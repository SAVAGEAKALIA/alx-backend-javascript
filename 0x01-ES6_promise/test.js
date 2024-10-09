/* eslint-disable */
// const newpromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true
//         if (success) {
//             resolve('Success!')
//         }
//         else {
//             reject('Failed!')
//         }
//     }, 50)
// })
// const newpromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(42)
//     }, 100)
// }); // This is not a promise but gets converted to one
// const newpromise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 90, "foo");
// });
//
// Promise.race([newpromise, newpromise2, newpromise3])
//    .then((values) => {
//        // for (const value of values) {
//        //     console.log(value);
//        // }
//        console.log(values)
//     })

// newpromise
//     .then((result) => {
//         console.log(result)
//         return "Processing data...";
//     })
//     .catch((er) => {
//         console.error(er)
//     })
//     .then((messae) => {
//         console.log(messae)
//     })
//     .finally(() => {
//         console.log('Finally!')
//     })

const fetchUserData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = {
      name: 'Alice',
      age: 25,
      id: 199,
    };
    resolve(user);
  }, 100);
});

function fetchUserById(userid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userid === 199) {
        const Post = [{ title: 'Post1' }, { title: 'Post2' }];
        resolve(Post);
      } else {
        reject(new Error('User not found'));
      }
    }, 100);
  });
}

fetchUserData
  .then((user) => {
    console.log(`User ${user.name}, ${user.age}, ${user.id}`);
    return fetchUserById(user.id);
  })
  .then((Post) => {
    console.log(`User Post ${Post}`);
  })
  .catch((error) => {
    console.error(error);
  });

function divide(a, b) {
  if (b === 0) {
    // throw new Error("Division by zero is not allowed.");
    const a = prompt('Enter input: ');
    const b = prompt('Enter input: ');
    divide(parseInt(a), parseInt(b));
  }
  return a / b;
}

console.log(divide(2, 0));
