import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from '../routes/routes';
import * as expressValidator from 'express-validator';


const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())

routes(app)

export default app