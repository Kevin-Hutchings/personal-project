const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const db = req.app.get("db");
  const result = await db.user.find_user([username]);
  const existingUser = result[0];

  try {
    if (existingUser) {
      res.status(409).json("User already exists");
    } else if (username !== "" && password !== "") {
      const hash = bcrypt.hashSync(password, 10);
      const registeredUser = await db.user.create_user([username, email, hash]);
      const user = registeredUser[0];
      req.session.user = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      res.status(201).json(req.session.user);
    }
  } catch (err) {
    res.status(500).json("Error registering account");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");
  const foundUser = await db.user.find_user([username]);
  const user = foundUser[0];

  try {
    if (!user) {
      res.status(401).json("User not found");
    } else {
      const isAuthenticated = bcrypt.compareSync(password, user.password);
      if (!isAuthenticated) {
        res.sendStatus(403);
      } else {
        req.session.user = {
          id: user.id,
          username: user.username,
        };
        res.status(200).send(req.session.user);
      }
    }
  } catch (err) {
    res.sendStatus(403);
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

const getUser = (req, res) => {
  const user = req.session.user;
  if (user) {
    res.status(200).json(user);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  register,
  login,
  logout,
  getUser,
};
