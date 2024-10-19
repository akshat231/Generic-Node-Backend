
module.exports = (err, req, res, next) => {
    if (err && !err.custom) {
        err.errorMessage = 'Some error occurred while processing request';
    }

    return res.status(400).json({success: false, message: err.message});
};