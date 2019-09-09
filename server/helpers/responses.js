
class Responses {
    static validationsError(statusCode, data, res) {
        res.status(statusCode).json({
            status: statusCode,
            error: data,
        });
    }
    static Postsuccess(statusCode, data, res) {
        res.status(statusCode).json({
            status: statusCode,
            message: "success",
        });
    }


    static catchErrors(statusCode, data, res) {
        res.status(statusCode).json({
            status: statusCode,
            error: data,
        });
    }
}
export default Responses;