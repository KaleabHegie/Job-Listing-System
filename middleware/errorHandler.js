const {constants} = require('../constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode){
        case constants.VALIDATION_ERRORS:
            res.json({
                message : 'Not Found'
            })
            break
        case constants.NOT_FOUND:
            res.json({
                message : 'Bad Request'
            })
            break
        case constants.SERVER_ERROR:
            res.json({
                message : 'Internal Server Error'
            })  
            break
        case constants.FORBIDDEN:
            res.json({
                message : 'Forbidden'
            })
            break     
        case constants.UNAUTHORIZED:
            res.json({
                message : 'Unauthorized'
        })   
        default:
            res.json({
                message : 'Internal Server Error'
            })
    }    
}


module.exports = {errorHandler}