const jwt = require("jsonwebtoken");

exports.requireUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  // eslint-disable-next-line no-undef
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = decoded;
    next();
  });
};

exports.requireAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  // eslint-disable-next-line no-undef
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    if (decoded.role === "admin") {
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ message: "Forbidden" });
    }
  });
};

exports.requireSeller = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  // eslint-disable-next-line no-undef
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    if (decoded.role === "seller" || decoded.role === "admin") {
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ message: "Forbidden" });
    }
  });
};
