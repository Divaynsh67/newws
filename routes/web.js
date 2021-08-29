const router = require('express').Router()
const fetch = require('node-fetch');
const { hideExtra } = require('../helpers/methods');

router.get('/' , async (req , res)=>{
    const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey="+process.env.NEWS_API_KEY
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles
    res.render("index",{
        articles,
        cutExtra:hideExtra
    })
})




module.exports  = router