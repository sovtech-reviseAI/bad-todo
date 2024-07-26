require('dotenv').config();
const axios = require("axios");

// env variables
const pullNumber = process.env.PR_NUMBER;
const token = process.env.GITHUB_TOKEN

const url = `https://api.github.com/repos/littlevegasdavids/todo-hatch-2024/issues/${pullNumber}/comments`;

const testComment = "Comment from script";

const headers = {
  Authorization: `token ${token}`,
  Accept: "application/vnd.github.v3+json",
};

const data = {
  body: testComment,
};

async function postComment() {
  if(!pullNumber){
    console.log(pullNumber)
    console.error("PR_NUMBER not defined in CLI. Please provide a pull request number");
    return
  }

  try {
    await axios.post(url, data, { headers });
    console.log("Comment successfully posted");
  } catch (error) {
    console.error("Error posting comment:", error.response.data);
  }
}

postComment();