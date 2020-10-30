const axios = require("axios");
const URL = "http://localhost:3000/api/random_word";

const fun = async () => {
  try {
    const res = await axios.get(URL);
    const { word } = res.data;
    console.log(word);
  } catch (error) {
    throw error;
  }
};

fun();
