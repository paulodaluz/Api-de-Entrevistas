import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from '../routes/routes';
import * as expressValidator from 'express-validator';
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(morgan('combined'))
app.use(cors())

routes(app)

export default app