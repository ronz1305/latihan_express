export const mainRoute = (req, res) => {
    return res.send('Hello world')
}

export const withCek = (req, res) => {
    return res.send('application is running')
}

export const withParam = (req, res) => {
    return res.send(`hello the query param is ${req.query.nama}`)
}

export const withBody = (req, res) => {
    return res.send(`the body is ${req.body.nama}`
)}

export const withBio = (req, res) => {
    return res.send(`your bio : nama ${req.query.nama}, alamat ${req.query.alamat}`
)}

export const withId = (req, res) => {
    return res.send(`hello the param is ${req.params.id}`)
}
