const WhereBuilder = require('amenov.wherebuilderjs');

module.exports = () => (req, res, next) => {
  req.wherebuilder = (target, raw) => {
    let request = {};

    if (!Array.isArray(target)) target = target.split();

    target.forEach((el) => {
      request = { ...request, ...req[el] };
    });

    return new WhereBuilder(request, raw).get();
  };

  next();
};
