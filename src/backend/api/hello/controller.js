module.exports = {
    get: (req, res) => {
      const data = { message: "hello world!" };
      res.status(200).json(data);
    }
  };
  