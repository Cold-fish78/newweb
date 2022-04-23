module.exports.blogpost = function(req,res){
    res.render('blogpost',{title : 'AWS not accepting debit/credit card [solved]'})
}
module.exports.search = function(req,res){
    res.render('search',{title : 'search results'});
}
module.exports.blogpost2 = function(req,res){
    return res.render('razorpayIntegration',{ title : 'razorpay integration with node js'});
}
module.exports.blogpost3 = function(req,res){
    return res.render('weatherApp',{ title : 'create weather app with flutter'});
}

module.exports.blogpost4 = function(req,res){
    return res.render('expandingCards',{title : 'create beautiful expanding cards with html, css and javascript'})
}