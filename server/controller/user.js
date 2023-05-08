const user = require('../models/user')
const asyncHandler = require('express-async-handler')

const register = asyncHandler(async (req, res) => {
    const { email, password, firstname, lastname } = req.body

    if (!email || !password || !firstname || !lastname) {
        return res.status(400).json({
            susess: false,
            mes: 'Missing input',

        })
    }
    const response = await user.create(req.body)
    return res.status(200).json({
        susess: response ? true : false,
        response
    })
})

module.exports = {
    register
}