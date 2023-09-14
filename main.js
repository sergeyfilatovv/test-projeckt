
const dropDownBtn = document.querySelector('.button--dropdown')
const dropDownIcon = document.querySelector('.dropdown__icon')
const dropDownList = document.querySelector('.dropdown__list')
const form = document.querySelector('.form')
const range = document.querySelector('.range-slider__percent')
const rangeInput = document.querySelector('.range-slaider__track')

function func1(){
    if(rangeInput.value != 0){
        range.innerHTML = rangeInput.value + ' %'
    }
    else{
        range.innerHTML = ''
    }
    
}

dropDownBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dropDownIcon.classList.toggle('dropdown__icon--edit')
    dropDownBtn.classList.toggle('button--active')
    dropDownList.classList.toggle('dropdown__list--visible')


})


dropDownList.addEventListener('click', (e) =>{
    const itemList = e.target.innerText;

    dropDownBtn.innerText = itemList;

    
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('form submit')
})



