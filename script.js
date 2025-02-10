const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    ISBN: "9780061120084",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
    imageURL: "to-kill.png",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    ISBN: "9780553380163",
    description:
      "An extraordinary book that delves into the nature of space, time, and the universe.",
    imageURL: "brief-history-of-time.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    ISBN: "9780451524935",
    description:
      "A dystopian novel set in a totalitarian society ruled by Big Brother.",
    imageURL: "1984.jpeg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    ISBN: "9780743273565",
    description:
      "A classic novel that explores themes of wealth, love, and the American Dream.",
    imageURL: "the-great-gatsby.jpeg",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    ISBN: "9780062316110",
    description:
      "A groundbreaking narrative of humanity’s creation and evolution.",
    imageURL: "brief-history-of-humankind.jpeg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    ISBN: "9781503290563",
    description:
      "A timeless love story about the interplay of love, class, and society in 19th-century England.",
    imageURL: "prideandprejudice.jpeg",
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    genre: "Romance",
    ISBN: "9781455582877",
    description:
      "A touching story of love that spans decades, showing the enduring power of commitment.",
    imageURL: "the-notebook.jpeg",
  },
];

const bookContainer = document.getElementById("book-container");
const detailsContainer = document.getElementById("details-container");

function displayBooks(filteredBooks = books) {
  bookContainer.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
        <img src="${book.imageURL}" alt="${book.title}" class="book-image">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.description.substring(0, 50)}...</p>
      `;

    bookCard.addEventListener("click", () => showBookDetails(book));
    bookContainer.appendChild(bookCard);
  });
}

function showBookDetails(book) {
  detailsContainer.innerHTML = `
      <h2>${book.title}</h2>
      <img src="${book.imageURL}" alt="${book.title}">
      <h3>Author: ${book.author}</h3>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>ISBN:</strong> ${book.ISBN}</p>
      <p><strong>Description:</strong> ${book.description}</p>
    `;

  detailsContainer.scrollIntoView({ behavior: "smooth" });
}

function searchBooks(query) {
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase())
  );
  displayBooks(filteredBooks);
}

function filterBooks(genre) {
  const filteredBooks = books.filter((book) => book.genre === genre);
  displayBooks(filteredBooks);
}

displayBooks();

// Get the "Home" link by ID
const homeLink = document.getElementById("home-link");

// Add a click event listener to display all books
homeLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  displayBooks(); // Reset the book display to show all books
  detailsContainer.innerHTML = ""; // Clear the book details section
});
