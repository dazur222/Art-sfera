
async function promptProccesor(prompt, juan, pepe) {
  let data = await getAllData()
















  let response = "testing"
  return response
}
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

async function getAllData() {
  await client.connect();
  const db = client.db('golfinBot');
  const users = db.collection('data');

  const all = await users.find().toArray(); // <- toArray is needed!
  console.log(all);
  return all
}

module.exports = promptProccesor