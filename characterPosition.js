function countLetters(str) {
  str = str.split(' ').join('');
  var counter = {};
  for (var i = 0; i < str.length; i++){
    var char = str[i];

    // if char is not pressented in counter
    //then add char to counter and
    //give it a value 1
    if (counter[char] === undefined) {
      counter[char] = [i]; //[i] is index of as an array, in order to use push()
    }
    //console.log(typeof counter[char])
    else {
      counter[char].push(i); //indicate new positions(indexOf) for the keys
    }
  }
  return counter;
}

console.log(countLetters("lighthouse in the house"));

