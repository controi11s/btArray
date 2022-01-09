let numberArray = []; // global variable

function addNumberToArray() {
  let numberEl = document.getElementById("number").value;
  numberArray.push(+numberEl);

  console.log(tongLon0());
  console.log(countSoDuong());
  console.log(minNumEl());
  console.log(changceViTri());
  console.log(xapXep());
  console.log(findPrimeNumber());
  let countResult = soSanh();
  console.log("So Duong: ", countResult[0], " So am: ", countResult[1]);
}

function tongLon0() {
  let tongNguyenDuong = 0;
  numberArray.forEach((num) => {
    if (num > 0) {
      tongNguyenDuong += num;
    }
  });
  return tongNguyenDuong;
}

function countSoDuong() {
  let countNum = 0;
  numberArray.forEach((num) => {
    if (num > 0) {
      countNum++;
    }
  });
  return countNum;
}
function minNumEl() {
  numberArray.sort();

  return numberArray[0];
}
function minNum2El() {
  let posArr = numberArray.filter((num) => {
    return num > 0;
  });
  posArr.sort();
  return posArr[0];
}
function findLastEvenNumber() {
  for (let index = numberArray.length - 1; index >= 0; index--) {
    if (numberArray[index] % 2 === 0) {
      return numberArray[index];
    }
  }
  return -1;
}
function changceViTri() {
  console.log("Truoc khi doi: ", numberArray);
  let viTri1El = +document.getElementById("vitri1").value;
  let viTri2El = +document.getElementById("vitri2").value;
  if (viTri1El < 0 || viTri1El > numberArray.length - 1) {
    alert("invalid possition");
    return;
  }
  console.log(numberArray[viTri1El], numberArray[viTri2El]);
  let temporary = 0;
  temporary = numberArray[viTri1El];
  numberArray[viTri1El] = numberArray[viTri2El];
  numberArray[viTri2El] = temporary;
  console.log("sau khi doi: ", numberArray);
}
function xapXep() {
  numberArray.sort();
  return numberArray;
}

function findPrimeNumber() {
  let result = -1;
  for (const score of numberArray) {
    if (isPrime(score)) {
      result = score;
      break;
    }
  }
  return result;
}

function isPrime(num) {
  for (let n = 2; n < num; n++) {
    if (num % n === 0) {
      return false;
    }
  }
  return num > 1;
}

function soSanh() {
  let countNumP = 0;
  numberArray.forEach((num) => {
    if (num > 0) {
      countNumP++;
    }
  });

  let countNumN = 0;
  numberArray.forEach((numN) => {
    if (numN < 0) {
      countNumN++;
    }
  });
  // return [3, 5];
  return [countNumP, countNumN];
}
