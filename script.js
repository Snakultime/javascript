let myArray = [1,2,3,4,5]

function my_max(array) {
  console.log(Math.max(...array))
}

console.log(my_max(myArray))


var mot = 'Bite'

function vowel_count(str) {
  let m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

console.log(vowel_count(mot))

let text = "Bonjour monde !"

function reverse(str){
    return str.split("").reverse().join("");
}

console.log(reverse(text))
