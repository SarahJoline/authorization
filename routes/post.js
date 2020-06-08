const router = require("express").Router();
const verify = require("./verifyTokens");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "this is a post",
      description: "This is data you should not access",
    },
  });
});

module.exports = router;
