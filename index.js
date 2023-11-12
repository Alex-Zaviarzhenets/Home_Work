// Создайте класс Book со свойствами title, author и 
// yearPublished. Добавьте статическое свойство, где будут 
// сохранены все экземпляры Book.  Добавьте статический 
// метод listAuthors, который возвращает массив со  
// всеми именами авторов.

class Book{
    static allBooks = new Set();

    constructor(title, author, yearPunlished ){
        this.title = title;
        this.author = author;
        this.yearPunlished = yearPunlished;

        Book.allBooks.add(this);
    }
    static listAuthors(){
        Book.allBooks.forEach((author)=> {
            console.log(`${Book.allBooks.author}`)
        });
    }
}


const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("1984", "George Orwell", 1949);


const authors = Book.listAuthors();
console.log(`Авторы книг:" ${authors}`);



// Роза не могу сделать это задание подскажи пожалуйста в 
// коментах дз в чем ошибка