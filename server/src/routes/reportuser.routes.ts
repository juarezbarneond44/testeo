import{Router} from 'express'
const router=Router();
var cors = require('cors')
 
import  {GetMoviesPago, GetPago, GetUser, Index} from "../controllers/reportuser.controller"

    router.route("/").get(Index)
    router.route("/GetUser").post(GetUser)
    router.route("/GetPago").post(GetPago)
    router.route("/GetMoviesPago").post(GetMoviesPago)

export default router;