import { hello } from "./index.js";

const get = async(req,res,next) => {
    try {
        const result = await hello()
        res.status(200).json({
            message : result
        })
    } catch (error) {
        next(error)
    }

}
export default{get}