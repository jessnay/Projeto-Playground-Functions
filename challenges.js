/* eslint-disable prefer-template */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
// source: https://blog.betrybe.com/python/python-split/ */

// Desafio 4
function concatName(arrayDeStrings) {
  let concat = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6

// source:https://blog.betrybe.com/javascript/javascript-for/*/

function highestNumbers(arrayNumbers) {
  let maiorNumero = arrayNumbers[0];
  for (let number of arrayNumbers) {
    if (number > maiorNumero) {
      maiorNumero = number;
    }
  } return maiorNumero;
}

function highestCount(arrayNumbers) {
  let numeroRepeticao = 0;
  let maiorNumero = highestNumbers(arrayNumbers);
  for (let number of arrayNumbers) {
    if (number === maiorNumero) {
      numeroRepeticao += 1;
    }
  }
  return numeroRepeticao;
}

// Desafio 7

// source: https://ichi.pro/pt/algoritmo-javascript-gatos-e-um-rato-278592971346362*/
// https://www.tutorialspoint.com/How-to-convert-a-negative-number-to-a-positive-one-in-JavaScript#:~:text=Front%20End%20Technology-,To%20convert%20a%20negative%20number%20to%20a%20positive%20one%20in,absolute%20value%20of%20a%20number. //

function catAndMouse(mouse, cat1, cat2) {
  const distanceMouseAndCat1 = Math.abs(mouse - cat1);
  const distanceMouseAndCat2 = Math.abs(mouse - cat2);

  if (distanceMouseAndCat1 < distanceMouseAndCat2) {
    return 'cat1';
  } if (distanceMouseAndCat1 > distanceMouseAndCat2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(array) {
  let novaArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      novaArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      novaArray.push('fizz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9

// source: https://pt.stackoverflow.com/questions/529882/como-substituir-uma-letra-por-um-n%C3%BAmero-em-uma-string-em-javascript  e https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176 */

function encode(string) {
  let resultado = string.replace(/a/g, '1');
  resultado = resultado.replace(/e/g, '2');
  resultado = resultado.replace(/i/g, '3');
  resultado = resultado.replace(/o/g, '4');
  resultado = resultado.replace(/u/g, '5');
  return resultado;
}
function decode(string) {
  let resultado = string.replace(/1/g, 'a');
  resultado = resultado.replace(/2/g, 'e');
  resultado = resultado.replace(/3/g, 'i');
  resultado = resultado.replace(/4/g, 'o');
  resultado = resultado.replace(/5/g, 'u');
  return resultado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
