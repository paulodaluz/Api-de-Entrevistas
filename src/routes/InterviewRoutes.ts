import { Teste } from "../controller/InterviewController";

const basicAuth = require('../controller/BasicAuth')
export default class ShippingRouter {

    _app;

    constructor(app){
        this._app = app
        this.InterviewRouter()
    }

    InterviewRouter(){

        this._app.get('/frete-jamef/cotacao',basicAuth, Teste)

    }
}
