class Words {

  count(words) {
    let lowerCaseWordsArray = words.replace( /\n/g, " " ).toLowerCase().split(" ");
    let countObject = {};

    lowerCaseWordsArray.map(word => {
      if (word in countObject) {
        countObject[word] = countObject[word] + 1;
      } else {
        countObject[word] = 1;
      }
    });
    return countObject;
  }
}

export { Words }
