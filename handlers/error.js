module.exports.notfound = (req, res, next) => {
    const err = new Error('not found');
    err.status = 404


    next(err);
};

module.exports.errors = (req, res, next) => {
    res.status(err.status || 500).json({
        err: err.message || 'Something went wrong'
    }); 
};