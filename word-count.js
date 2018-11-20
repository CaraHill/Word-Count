class Words {

  count(words) {
    let wordsArray = words.split(" ");
    let countObject = {};
    wordsArray.map(word => {
      if (word in countObject) {
        countObject[word] = countObject[word] +1;
      } else {
        countObject[word] = 1;
      }
    });
    return countObject;
  }
}

export { Words }
