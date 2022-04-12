export const checkAutKey = (req, res, next) => {
    if(req.headers.authkey == "#4311") {
        next()
    }
    return res.send("invalid key")
}