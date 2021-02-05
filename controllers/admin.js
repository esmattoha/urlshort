exports.getHome = (req, res, next) =>{
    res.render('./admin/home.ejs',{
        pageTitle:'Home'
    })
}