var nunjucks = require("nunjucks");
var fs = require("fs");

fs.writeFile("index.html", nunjucks.render("index.njk"), function(err, data) {
  if (err) console.log(err);
  console.log("Compiled the Nunjucks, captain.");
});
