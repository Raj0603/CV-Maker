const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
 
         // username change
		const user = await User.findOne({ userName: req.body.userName,
		                                  email: req.body.email});
		if (user)
			return res
				.status(409)
				.send({ message: "Following username or email id already Exists!" });
		
		// 		const user2 = await User.findOne({ email: req.body.email})
		// if (user2)
		// 	return res
		// 	 .status(420)
		// 	 .send({message: "Following Email Id is already utilized"})

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ alert: "joined up successfully ," });
	} catch (error) {
		res.status(500).send({ message: "Internal  Error" });
	}
});

module.exports = router;

