let inputs = document.querySelectorAll('input')
let text;
let success = document.querySelector('.success')
inputs.forEach(item => {
    item.onfocus = () => {
        item.classList.add('active')
        let firstparent = item.parentNode 
         text =  firstparent.querySelector('span')
        text.classList.add('text')
    }
    item.onblur = () => {
        item.classList.add('inactive')
        text.classList.remove('text')
    }
})

let check = document.querySelectorAll('.check')
let btn = document.querySelector('button')
let error = document.querySelector('.error')
let zero = document.querySelector('.zero') 
let age = document.querySelector('.age')
let smth = document.querySelector('.smth')
btn.onclick = () => {
    check.forEach(elem => {
    if(!elem.value){
        elem.classList.add('redBorder')
        let parent = elem.parentNode
        let errors = parent.querySelector('.error')
        let errorsImg = parent.querySelector('.error-img')
        errors.innerHTML = 'Пустая строка не может быть ответом!'
        errorsImg.style.display = 'inline'
        btn.classList.add('new-active')
        zero.innerHTML++
    } else if(isFinite(elem.value)) {
        
        elem.classList.add('redBorder')
        let parent3 = elem.parentNode
        let errors3 = parent3.querySelector('.error')
        let errors3img = parent3.querySelector('.error-img')
        errors3img.style.display = 'inline'
        errors3.innerHTML = 'Цифра не может быть именем!'
        btn.classList.add('new-active')
        zero.innerHTML++
    }
    else{
        elem.classList.add('inactive') 
        success.innerHTML++    
    }
    })
     if(!age.value){
        age.classList.add('redBorder')
        let ageParent = age.parentNode
        let er = ageParent.querySelector('.smth')
        let erimg = ageParent.querySelector('.error-img')
        erimg.style.display = 'inline'
        er.innerHTML = 'Пустая строка не может быть ответом!'
        btn.classList.add('new-active')
    } else if(!isFinite(age.value)){
        age.style.border = '2px solid red'
        let agetxt = age.parentNode
        let txter = agetxt.querySelector('.smth')
        let imgNum = agetxt.querySelector('.error-img')
        txter.innerHTML = 'Строка не может быть возрастом!'
        imgNum.style.display = 'inline'
        btn.classList.add('new-active')
        zero.innerHTML++
    }
}

