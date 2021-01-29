const WhereBuilder = require('amenov.wherebuilderjs');

module.exports = () => (req, res, next) => {
  req.wherebuilder = (abstractions) => {
    try {
      const whereBuilder = new WhereBuilder(req.query, abstractions);

      whereBuilder.run();

      return whereBuilder.where;
    } catch (err) {
      console.log(err);
    }
  };

  next();
};
