module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // create action
        console.log(req.body)
        res.send('Hello')
    });
};