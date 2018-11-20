class Words {

  count(words) {
    let wordsArray = words.split(" ");
    let countObject = {};
    wordsArray.map(word => {
      countObject[word] = 1;
    });
    return countObject;
  }
}

export { Words }
