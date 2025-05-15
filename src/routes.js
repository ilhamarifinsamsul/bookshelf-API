// Membuat routes
const {
  addBookHandler,
  getAllBookshandler,
  getBookByIdhandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookshandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdhandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
