var keystone = require("keystone");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = "faq";
	locals.filters = {
		category: req.params.category
	};
	locals.data = {
		posts: [],
		categories: []
	};

	view.on("init", function(next) {
		var q = keystone
			.list("Post")
			.model.find()
			.where("state", "published")
			.sort("-publishedDate")
			.populate("author")
			.limit(3);

		q.exec(function(err, results) {
			locals.data.posts = results;
			next(err);
		});
	});

	// Render the view
	view.render("faq");
};
