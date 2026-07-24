exports.profile = async (req, res) => {

    res.status(200).json({

        success: true,

        message: "Profile Retrieved",

        user: req.user

    });

};