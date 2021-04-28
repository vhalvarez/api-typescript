import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import passport from 'passport'
import passportMiddlewares from './middlewares/passport'

import authRoutes from './routes/auth.routes'
import privateRoutes from './routes/private.routes'

// initializations
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddlewares)

// routes
app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`)
})

app.use('/api/auth/', authRoutes)
app.use('/api/private/', privateRoutes)

export default app
