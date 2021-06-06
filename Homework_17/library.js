class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (typeof this._title !== "string") {
      throw new Error("Error");
    }
    this._title = title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (typeof this._author !== "string") {
      throw new Error("Error");
    }
    this._author = author;
  }

  toString() {
    return `${this.author} ${this.title}`;
  }

  isTheSameBook(book) {
    if (book === this.title + this.author) {
      return true;
    }
    return false;
  }
}

class LibraryBookBase {
  constructor(title, author, bookId) {
    this._title = title;
    this._author = author;
    this._bookId = bookId;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (typeof this._title !== "string") {
      throw new Error("Error");
    }
    this._title = title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (typeof this._author !== "string") {
      throw new Error("Error");
    }
    this._author = author;
  }

  get bookId() {
    return this._bookId;
  }

  set bookId(bookId) {
    if (typeof this._bookId === "number" || Number.isNaN(this._bookId)) {
      throw new Error("Invalid Book ID");
    }
    this._bookId = bookId;
  }

  toString() {
    return `${this.author} ${this.title}`;
  }
}

class ReaderBook {
  constructor() {}
}

class Reader {
  constructor() {}
}

class Library {
  constructor() {}
}

class LibraryBook {
  constructor(title, author, bookId, quantity) {}
}

class Library {
  constructor() {}
}
