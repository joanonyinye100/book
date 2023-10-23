function slideToHomePage() {
    const container = document.querySelector('.slide-container');
    container.style.transform = 'translateX(-100%)'; 
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 500); 

    
}


//to add book

let  btnAddBook = document.getElementById("btnAddBook");
let showBook= document.getElementById("showBook");
let  showbookdetails = document.getElementById(" showbookdetails");
let resultSshow = document.getElementById("resultSshow");

showbookdetails.addEventListener("click", display);
 function display(){
    retrieveName();
   // renderbooks();
 }
 function retrieveName(){
    let  addBook = document.getElementById("addBook");
    let book = addBook.value.trim();
    if(localStorage.getItem("book" )!=null){
        let book = localStorage.getItem("showBook");
        for (let i = 0; i < book.length; i++) {
            const element = book[i];
            display.innerHTML = `${element} `;
            
        }
       
    } else{
        display.innerHTML = `${book}`
    }
}
 
btnAddBook.addEventListener("click", addBook);
function addBook(){
    let  addBook = document.getElementById("addBook");
    let book = addBook.value.trim();
    if (book != ""){
       let newbook = {
        bookname : book

       };
       savebook(newbook);
       renderbooks();
       addBook.value= "";
       resultSshow.innerHTML = "book added to catalogue successfully";
}

}
function savebook(bookObject){
let booklist = localStorage.getItem("showBook");
if(booklist == null){
    let newbooks = [];
    newbooks.push(bookObject);
    localStorage.setItem("showBook", JSON.stringify(newbooks));

} else{
    booklist = JSON.parse(booklist);
    booklist.push(bookObject);
    localStorage.setItem("showBook", JSON.stringify(booklist))
}
}

function fetchbook(){
    let booklist = localStorage.getItem(showBook);
     if (booklist!= ""){
        return JSON.parse;
     } else {
        return [];
     }
}
 function renderbooks(){
   let newbooks = fetchbook();
   showBook.innerHTML= "";
   for (let i = 0; i < newbooks.length; i++) {
    const element = newbooks[i];
    
   }
   const li = document.createElement("li");
   li.innerHTML = newbooks.bookname;
   const deletebutton =document.createElement("button");
   deletebutton.innerHTML= "Delete";
   deletebutton.addEventListener("click",() => removebook(i));
   showBook.appendChild(li);


 }
 function removebook(){
    let books = fetchbook();
    if (books.length > 0){
        books.splice(index, 1);
        localStorage.setItem("showBook", JSON.stringify(books));
        
    }
    renderbooks();
 }

// to add to favourite
let favourite = document.querySelectorAll(".favourite");
  favourite.addEventListener("click", show)
function show(){
    favourite.style.color = "yellow";
}

  
    