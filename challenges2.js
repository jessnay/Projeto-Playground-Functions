// Desafio 10
function techList(arrayTec, name) {
 let list = [];

 if (arrayTec[0] === undefined) {
   return 'Vazio!';
 } else {

   arrayTec.sort();
   for (let i in arrayTec) {
     let object = {

     }
     object.tech = arrayTec[i];
     object.name = name;
     list.push(object);
   }
 }
 return list;
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {

let number = '';

if (arrayNumber.length !== 11){
  return number = "Array com tamanho incorreto.";
}

for (let i = 0; i < arrayNumber.length; i += 1) {

  let count = 0;

 for (let a = 0; a < arrayNumber.length; a += 1){
   if (arrayNumber[i] ===  arrayNumber[a]) {
     count += 1;
   }
 }
  if (arrayNumber[i] < 0 || arrayNumber[i] > 9 || count > 2) {
    return number = "não é possível gerar um número de telefone com esses valores";
  } else {
    number = '(' + arrayNumber[0] + arrayNumber[1] + ') ' + arrayNumber[2] + arrayNumber[3] + arrayNumber[4] + arrayNumber[5] + arrayNumber[6] + '-' + arrayNumber[7] + arrayNumber[8] + arrayNumber[9] + arrayNumber[10];
  }
}
return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  generatePhoneNumber,
  techList,
  triangleCheck,
};
