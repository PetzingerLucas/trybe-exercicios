const Author = require("../services/Authors");

const getAll = async (_req, res) => {
  const authors = await Author.allAuthors();

  res.status(200).json(authors);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const author = await Author.authorById(id);
  if (author.error) return next(author.error);

  res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.createAuthor(first_name, middle_name, last_name);

  if (author.error) return next(author.error);


  res.status(201).json(author);
};

module.exports = {
  findById,
  getAll,
  createAuthor,
};
