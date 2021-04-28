import {Router}from 'express'
import passport from 'passport'
const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({msg: 'Success'})
})

export default router