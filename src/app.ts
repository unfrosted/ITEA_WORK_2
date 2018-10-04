showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

console.log('Hi');
//  ------------------------------------------------

// Task 01, 02
enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular
}

// Task #1.1
function getAllBooks(): any[] {
  let books = [
    {
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript
    },
    {
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript
    },
    {
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS
    },
    {
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ];

  return books;
}

// Task #1.2
function logFirstAvailable(books: any[]): void {
  console.log(`Length of books : ${books.length}`);

  for (const book of books) {
    if (book.available) {
      console.log('Title of first book : ' + book.title);
      break;
    }
  }
}
// Task #1.3
logFirstAvailable(getAllBooks());

// Task #2.3
function getBookTitlesByCategory(category: Category): Array<string> {
  let titles: Array<string> = [];

  for (const book of getAllBooks()) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }

  return titles;
}

// Task #2.4
function logBookTitles(titles: Array<string>): void {
  titles.forEach(element => console.log(element));
}

logBookTitles(getBookTitlesByCategory(Category.CSS));
