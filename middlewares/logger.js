module.exports = (req, res, next) => {
    console.log(`Method: ${req.method} on ${req.url}`)
    next()
}