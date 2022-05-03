// services/Authors.js

const Author = require("../models/Authors");

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) =>
  authorData.map((item) =>
    getNewAuthor({
      id: item.id,
      firstName: item.first_name,
      middleName: item.middle_name,
      lastName: item.last_name,
    })
  );

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== "string") return false;
  if (!lastName || typeof lastName !== "string") return false;
  if (middleName && typeof middleName !== "string") return false;

  return true;
};

const allAuthors = async () => {
  const authors = await Author.getAll();
  return serialize(authors);
};

const authorById = async (id) => {
  const author = await Author.findById(id);
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }
  return serialize(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);
  if (!validAuthor) return false;
  if (existingAuthor) {
      return {error: { code: 'alreadyExists', message: 'Uma pessoa autora já existe com esse nome completo',},};
    }
    const author = await Author.createAuthor(firstName, middleName, lastName);
    
  return getNewAuthor(author);
};

module.exports = {
  allAuthors,
  authorById,
  createAuthor,
};
