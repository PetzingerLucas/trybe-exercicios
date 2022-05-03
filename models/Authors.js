const connection = require("./connection");

const getAll = async () => {
  const [authors] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors;"
  );
  return authors;
};

const findById = async (id) => {
  const query =
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?";

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return authorData;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    "INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)",
    [firstName, middleName, lastName]
  );
  return author;
};

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  let query =
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors ";
  if (middleName) {
    query += "WHERE first_name = ? AND middle_name = ? AND last_name = ?";
  } else {
    query += "WHERE first_name = ? AND last_name = ?";
  }

  const params = middleName
    ? [firstName, middleName, lastName]
    : [firstName, lastName];

  // Executamos a consulta e retornamos o resultado
  const [authorData] = await connection.execute(query, params);

  // Caso nenhum author seja encontrado, devolvemos null
  if (authorData.length === 0) return null;

  // Caso contrário, retornamos o author encontrado
  return serialize(authorData);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
  findByName,
};
