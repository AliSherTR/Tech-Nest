function sendErrorDev(err, res) {
    res.status(404).json({
        status: "fail",
        error: err,
    });
}

function sendErrorProd(err, res) {
    if (err.name == "MulterError") {
        res.status(500).json({
            status: "fail",
            message: "Invalid File Type sent",
        });
        if (err.name == "TokenExpiredError") {
            res.status(403).json({
                status: "fail",
                message: "Please login again",
            });
        }
    }
}

const errorHandler = (err, req, res, next) => {
    // console.log(err);
    if (process.env.NODE_ENV === "development") {
        sendErrorDev(err, res);
    } else sendErrorProd(err, res);
};

module.exports = errorHandler;
