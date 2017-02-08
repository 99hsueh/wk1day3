function countLetters(str) {
  str = str.split(' ').join('');
  var counter = {};
  for (var i = 0; i < str.length; i++){
    var char = str[i];

    // if char is not pressented in counter
    //then add char to counter and
    //give it a value 1
    if (counter[char] === undefined) {
      counter[char] = 1;
    } else {
      counter[char] += 1;
    }


  }
  return counter;
}

console.log(countLetters("lighthouse in the house"));
