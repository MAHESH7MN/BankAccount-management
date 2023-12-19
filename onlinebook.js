function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  // Book constructor
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  
    // Method to get book information
    this.getBookInfo = function () {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author.name}`);
      console.log(`Birth Year of Author: ${this.author.birthYear}`);
      console.log(`Nationality of Author: ${this.author.nationality}`);
      console.log(`Genre: ${this.genre}`);
      console.log(`Price: $${this.price.toFixed(2)}`);
      console.log("--------------------");
    };
  }
  
  
  function OnlineBookstore() {
    this.books = [];
  
    
    this.addBook = function (book) {
      this.books.push(book);
    };
  
  
    this.displayBookDetails = function () {
      console.log("Bookstore Inventory:");
      console.log("--------------------");
  
      this.books.forEach(function (book) {
        book.getBookInfo();
      });
    };
  }
  
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const author2 = new Author("George Orwell", 1903, "English");
  
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 19.99);
  const book2 = new Book("1984", author2, "Dystopian", 15.99);
  
  const bookstore = new OnlineBookstore();
  
  bookstore.addBook(book1);
  bookstore.addBook(book2);
  
  
  bookstore.displayBookDetails();
  