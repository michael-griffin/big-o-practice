// add whatever parameters you deem necessary & write doc comment

// Can you spell the word using the available letters?

//Inputs word + letters

//Output boolean: (t or f)

// letters


// evaluate the available letters, record into obj
// Check if letters in word are available in obj
// Return true if you are able to spell word,
    //else return false





function canConstructWord(word, letters) {
  // evaluate the available letters, record into obj
  const wordBank = {};
  const letterBank = {};

  for (let char of word){
    const charCount = (wordBank[char] || 0) + 1;
    wordBank[char] = charCount;
  }

  for (let char of letters){
    const charCount = (letterBank[char] || 0) + 1;
    letterBank[char] = charCount;
  }

  // Check if letters in word are available in obj
  for (let key in wordBank){
    if(wordBank[key] > letterBank[key]
       || (!letterBank[key])){
      return false;
    }
  }
  return true;
}
