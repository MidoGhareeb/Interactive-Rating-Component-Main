let one=document.getElementById('one')
let two=document.getElementById('two')
let three=document.getElementById('three')
let four=document.getElementById('four')
let five=document.getElementById('five')
let re=document.getElementById('re')
let first=document.getElementById('first')
let second=document.getElementById('second')
let sumbit=document.getElementById('Submit')
let result;
one.onclick=function (){
    result=one.value
}
two.onclick=function (){
    result=two.value
}
three.onclick=function (){
    result=three.value
}
four.onclick=function (){
    result=four.value
}
five.onclick=function (){
    result=five.value
}
sumbit.onclick=function (){
    if (result != undefined){
    re.innerHTML=result
    first.classList.add('hide')
    second.classList.remove('hide')}
}