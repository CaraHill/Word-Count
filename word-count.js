class Words {
  prepareWords(words) {
    return words
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .split(" ");
  }

  count(words) {
    let countObject = Object.create(null);

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
