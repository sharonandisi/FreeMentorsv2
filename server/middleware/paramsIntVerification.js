import responseHelpler from '../helpers/responseHelper'
import messageHelper from '../helpers/messageHelper';


export default async (req, res, next) => {
    const param = req.params.id;
    if (parseInt(param) < 1 || parseInt(param) > 1000 || typeof(param) === 'number') 
        return responseHelpler(res, 400, messageHelper.users.failed.failed)
    next();
}