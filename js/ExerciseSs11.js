// for (let i = 1; i <= 3; i++) {
//   console.log(i);
//   for (let j = 1; j < 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//     if ((i == 3) & (j == 1)) {
//       break;
//     }
//   }
//   if (i == 3) {
//     break;
//   }
// }
// Bài 6

// let N = parseInt(prompt("Mời bạn nhập số N"));
// if (N < 2 || N > 100) {
//   console.log("Mời bạn nhập lại");
// } else {
//   for (let i = 2; i <= N; i++) {
//     let square = Math.pow(i, 2);
//     if (square % 2 === 0) {
//       console.log("Square: ", square);
//     }
//   }
// }

// let count = 0;
// let number = 2;

// while (count < 20) {
// count sẽ đếm từ 0 đến 19 là 20 lần
// let isPrime = true;
// Lặp qua ddeer kiểm tra xem có phải là số nguyên tố
// for (let i = 2; i <= Math.sqrt(number); i++) {
// Kiểm tra xem number có chia hết cho i không
// Nếu chia hết thì không phải là số nguyên tố và thoát vòng lặp
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime === true) {
//     console.log(number);
//     count++;
//   }
//   number++;
// }
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let N = parseInt(prompt("Mời bạn nhập số N"));
// let check = true;
// for (let i = 2; i <= Math.sqrt(N, 2); i++) {
//   if (N % i === 0) {
//     check = false;
//     break;
//   }
// }
// if (check) {
//   console.log(N + " La so nguyen to");
// } else {
//   console.log(N + " Khong la so nguyen to");
// }

// let random = Math.floor(Math.random() * 10);
// console.log(random);

// for (let i = 1; i <= random; i++) {
//   console.log(console.log(`\x1b[3${i}m%s\x1b[0m`, "Chữ màu"));
// }

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// for (let i = 10; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
