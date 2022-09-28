const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		// change to username
            const user = await User.findOne({ userName: req.body.userName });
		if (!user)
			return res.status(401).send({ message: "Invalid Username or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in very well" });
	} catch (error) {
		res.status(500).send({ message: "Internal  Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({ // check up
		userName: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
