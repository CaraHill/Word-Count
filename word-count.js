class Words {
  prepareWords(words) {
    let preparedWords = words
      .replace(/\s\s+|\n|\t/g, " ")
      .toLowerCase()
      .split(" ");
    return preparedWords;
  }

  count(words) {
    let countObject = {};

    this.prepareWords(words).map(word => {
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
