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

	// Render the view
	view.render("faq");
};
