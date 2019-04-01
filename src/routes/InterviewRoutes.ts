import { newInterview, editInterview, deleteInterview, searchAllInterview, searchUserInterviews} from "../controller/InterviewController";

const basicAuth = require('../controller/BasicAuth');
const writeAcess = require('../controller/writeAcess')
const readAcess = require('../controller/readAcess')
export default class InterviewRouter {

    _app;

    constructor(app){
        this._app = app
        this.InterviewRouter()
    }

    InterviewRouter(){

        this._app.post("/newInterview", basicAuth, writeAcess, newInterview);
        this._app.put("/editInterview/:id", basicAuth, writeAcess,editInterview)
        this._app.delete("/deleteInterview/:id", basicAuth, writeAcess,deleteInterview );
        this._app.get("/searchAllInterviews", basicAuth, readAcess,searchAllInterview);
        this._app.get("/searchInterview/:user", basicAuth, readAcess,searchUserInterviews );
        this._app.get("/searchInterview", basicAuth, searchUserInterviews );

    }
    
}
