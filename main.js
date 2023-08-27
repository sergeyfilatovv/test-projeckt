
const dropDownBtn = document.querySelector('.button--dropdown')
const dropDownIcon = document.querySelector('.dropdown__icon')
const dropDownList = document.querySelector('.dropdown__list')

console.log(dropDownIcon)

dropDownBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dropDownIcon.classList.toggle('dropdown__icon--edit')
    dropDownBtn.classList.toggle('button--active')
    dropDownList.classList.toggle('dropdown__list--visible')


})

