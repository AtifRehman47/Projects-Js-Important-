// let books = [
//        { title: "The Alchemist", author: "Paulo Coelho", price: 300, inStock: true },
//        { title: "Atomic Habits", author: "James Clear", price: 450, inStock: false },
//        { title: "Clean Code", author: "Robert C. Martin", price: 600, inStock: true }
//      ];


//      displayBooks:-


//      function displayBooks() {
//        books.forEach((book) => {
//          console.log(`${book.title} by ${book.author} - ₹${book.price} - In Stock: ${book.inStock}`);
//        });
//      }
     

//      function add a book:-


// function addBook(title, author, price, inStock) {
//        books.push({ title, author, price, inStock });
//        console.log(`${title} added to the inventory.`);
//      }

     
//      function find book title:-


// function findBook(title) {
//        let book = books.find((book) => book.title === title);
//        if (book) {
//          console.log(`Found: ${book.title} by ${book.author} - ₹${book.price}`);
//        } else {
//          console.log("Book not found.");
//        }
//      }

     
//      Function to Filter In-Stock Books:-


// function filterInStockBooks() {
//        let inStockBooks = books.filter((book) => book.inStock);
//        console.log("Books in stock:");
//        displayBooks(inStockBooks);
//      }

     
//      Function to Calculate Total Price of In-Stock Books:-

// function totalPriceInStock() {
//        let totalPrice = books
//          .filter((book) => book.inStock)
//          .reduce((total, book) => total + book.price, 0);
//        console.log(`Total price of all in-stock books: ₹${totalPrice}`);
//      }

     
//      usage example:-


// displayBooks();  // Display all books
// addBook("Sapiens", "Yuval Noah Harari", 500, true);  // Add new book
// findBook("Atomic Habits");  // Find a specific book
// filterInStockBooks();  // Display only books in stock
// totalPriceInStock();  // Calculate total price of in-stock books



