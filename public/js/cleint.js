const darkBtn = document.querySelector('#darkBtn')
const navbar = document.querySelector('nav')
const body = document.body
const articlesContainer = document.querySelectorAll('.card')
const readBtn = document.querySelectorAll('.btn')

darkBtn.addEventListener('input',()=>{
    navbar.classList.toggle('bg-dark')
    body.classList.toggle('bg-secondary')
    articlesContainer.forEach(article=> article.classList.toggle('bg-light'))
    readBtn.forEach(btn => btn.classList.toggle('btn-outline-dark'))
})