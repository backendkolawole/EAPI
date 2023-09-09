const notFound = (req, res) => {
    res.status(404).json({ msg: 'Something went wrong' })
}

module.exports = { notFound }