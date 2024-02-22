module.exports = {
    get: (req, res) => {
      const data = { message: "Hello world!" };   
      res.status(200).json(data);
    }
  };
  