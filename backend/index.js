const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "7d6f8cf2-7501-489b-8256-cdd24fe1f6b0";
const CHAT_ENGINE_PRIVATE_KEY = "8cc6f413-c4af-4f79-a24a-793a5e7c9372";

app.post("/authenticate", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { 
        username, secret, email, first_name, last_name
      },
      {
        headers: {"private-key": CHAT_ENGINE_PRIVATE_KEY}
      }
  )
  return res.status(r.status).json(r.data)
  } catch (err) {
    return res.status(err.response.status).json(err.response.data)
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // Fetch this user from Chat Engine in this project!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);