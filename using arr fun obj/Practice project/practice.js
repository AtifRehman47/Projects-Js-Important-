let book = [{
       title : 'Old story' , inventor : 'Atif Rehman' , Price: 450 
       // title : 'Old story' , inventor : 'Atif Rehman' , Price: 450 ,
       // title : 'Old story' , inventor : 'Atif Rehman' , Price: 450 ,
       
}]

       // display book:-

       function displayBooks() {
              book.forEach ((book)=>{
                     console.log(`${book.title} by ${book.inventor} by ${book.Price}`);
                     

              })
       }


       // Add book:-

       function addBook(title , author , price) {
              book.push({title , author , price})
              console.log(`${title} by ${author} by ${price} new inventry`);
              
       }

       // find book :-

       // function findBook(title) {
       //        let book = book.find ((book) => book.title === title)
       //        if (book) {
       //               console.log(`found ${book.title} by ${book.author} by ${book.price}`);
       //        }else{
       //               console.log('book not found');
                     
       //        }
              
              
       // }


       function findBook(title) {
              let foundBook = book.find((book) => book.title === title); // Use a different variable name
              if (foundBook) {
                console.log(`found ${foundBook.title} by ${foundBook.author} by ${foundBook.price}`);
              } else {
                console.log('book not found');
              }
            }


       displayBooks()
       addBook('New Story' , 'Asim' , 350)
       findBook()