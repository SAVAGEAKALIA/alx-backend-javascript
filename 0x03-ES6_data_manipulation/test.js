// const buffer = new ArrayBuffer(16);
// if (buffer.byteLength === 16) {
//     console.log("Yes, it's 16 bytes.");
// } else {
//     console.log("Oh no, it's the wrong size!");
// }
//
// const int16View = new Int16Array(buffer);
//
// for (let i = 0; i < int16View.length; i++) {
//     // int16View[i] = i * 2;
//     console.log(int16View[i]);
// }
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
