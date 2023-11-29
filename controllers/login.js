
const index = ((req, res) => {
    res.render('login');
})
const login = ((req, res) => {
    //do something 
    // const loggedinUser = dasfhsjdfgsjdfgskdf sdjfgjsdfi mongoose
    res.render('dashboard',{user: loggedinUser});
})

module.exports = {
    index,
    login
}