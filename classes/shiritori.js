class Shiritori {
  constructor(word) {
    this.word = word;
    this.wordsArr = [];
  }

  words(){
      return this.wordsArr
  }

  play(word) {
    word = word.toLowerCase().trim();
    const isEmptyArr = this.wordsArr.length === 0;
    if (isEmptyArr) {
      this.wordsArr.push(word);
      return this.wordsArr;
    }

    const lastWordInArr = this.wordsArr[this.wordsArr.length - 1];
    const lastLetter = lastWordInArr[lastWordInArr.length - 1];
    const coincidenceLetters = word[0] === lastLetter;
    const notIncludesWordInArr = !this.wordsArr.includes(word);
    if (coincidenceLetters && notIncludesWordInArr) {
      this.wordsArr.push(word);
      return this.wordsArr;
    }
    if (notIncludesWordInArr) {
      return `invalid! - beach should start with "${lastLetter}"`;
    }
    return `invalid! - "${word}" has already been said`;
  }

  restart(){
      this.wordsArr = [];
      return "game restarted"
  }
}

let a = new Shiritori();
a.play("Moscow");
a.play("Warszawa");
console.log(a.play("Ararat"));