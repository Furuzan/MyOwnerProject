const counterDiv=document.querySelector('.counter span');
//Increment Button
const incBtn=document.querySelector('#increment');
let countInc=0;
incBtn.addEventListener('click',(e)=>{
    countInc+=1;
    counterDiv.textContent=countInc;
})

//Decrement Button
const decBtn=document.querySelector('#decrement');
decBtn.addEventListener('click',decrementFunction);
function decrementFunction(){
   let countDecr=counterDiv.textContent;
   countDecr-=1;
   counterDiv.textContent=countDecr;
}

//Reset Button
const resetBtn=document.querySelector('#reset');
resetBtn.addEventListener('click',resetFunction);
function resetFunction(){
    counterDiv.textContent=0;
}



/////Second Method to counter Implemention
const counterSpan=document.querySelector('.counterSpan span');
const allBtn=document.querySelectorAll('.btn');
let count=0;
allBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const classList=btn.classList;
        console.log(classList.value);
        if(classList.contains('decr'))count--;
        else if(classList.contains('incr'))count++;
        else count=0;
        if(count >0) counterSpan.style.color='green';
        else  counterSpan.style.color='red';
        counterSpan.textContent=count;
    })
    

})