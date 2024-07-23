function analyzeSentence(sentence) {

    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
  

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
    let lastCharWasSpace = true;
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      length += 1;
  

      if (vowels.has(char)) {
        vowelCount += 1;
      }
  
      if (char === ' ') {
        lastCharWasSpace = true;
      } else if (char !== '.') {
        if (lastCharWasSpace) {
          wordCount += 1;
        }
        lastCharWasSpace = false;
      }
    }
  
    // Output the results
    console.log("Length of the sentence:", length);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
  }
  
  