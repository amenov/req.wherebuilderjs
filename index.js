const WhereBuilder = require('amenov.wherebuilderjs');

module.exports = () => (req, res, next) => {
  req.wherebuilder = (raw) => {
    return new WhereBuilder(req.query, raw).get();
  };

  next();
};
