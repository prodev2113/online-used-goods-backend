const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validateRegisterUser = require("../validation/validateRegisterUser");
const validateLoginUser = require("../validation/validateLoginUser");
const validateVerifySeller = require("../validation/validateVerifySeller");

// Register
exports.register = async (req, res) => {
  console.log("New user registered!", req.body.name);
  const errors = validateRegisterUser(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }
  const { name, email, password } = req.body;
  const role = req.body.seller ? "seller" : "user";
  const isVerified = !req.body.seller;

  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      isVerified,
    });
    await user.save().then(() => {
      // eslint-disable-next-line no-undef
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.cookie("token", token, { httpOnly: true });
      res.status(201).json({ message: "User created successfully!" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const errors = validateLoginUser(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials!" });
    // eslint-disable-next-line no-undef
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifySeller = async (req, res) => {
  const errors = validateVerifySeller(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }
  const {address, country, phone, skypeId, telegramId, discordId, linkedin, facebook, twitter} = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.address = address;
    user.country = country;
    user.phone = phone;
    if (skypeId) user.skypeId = skypeId;
    if (telegramId) user.telegramId = telegramId;
    if (discordId) user.discordId = discordId;
    if (linkedin) user.linkedin = linkedin;
    if (facebook) user.facebook = facebook;
    if (twitter) user.twitter = twitter;
    user.isVerified = true;
    await user.save();
    res.status(200).json({message: 'User verified successfully!'});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// Logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully!" });
};
