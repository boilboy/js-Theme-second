const num_bth = document.querySelectorAll('.num_bth');
let display = document.getElementById('display'); 
let result = 0;
let state ='start';

//1から９の数字を押した時
const one_nine = document.querySelectorAll('.one_nine');
one_nine.forEach(index => {
 index.addEventListener('click', () => {
   if(state ==='start') {
     result = index.dataset.indexId;
   }else if(state === 'finish') {
     reset();
     result = index.dataset.indexId;
   }else if(state === 'calculation'||state === 'calBtn') {
     result += index.dataset.indexId;
   }
   display.textContent = result;
   state = 'calculation'
 }) //click   
})//forEach

//演算子ボタンを押した時
const cal = document.querySelectorAll('.cal');
cal.forEach(index => {
 index.addEventListener('click', () => {
  if(state ==='start') {
     return;
  }else if(state === 'calculation') {
    result += index.dataset.indexId;
  }else if(state === 'finish') {
    result = display.textContent
    result += index.dataset.indexId;
    display.textContent = 0
  }else if(state === 'calBtn') {
    result = result.slice(0,-1)
    result += index.dataset.indexId;
  }
  display.textContent = result;
  state = 'calBtn'
 }) //click   
})//forEach

//イコールボタンを押した時
const equal_btn = document.getElementById('equal_btn');
equal_btn.addEventListener('click',() =>{
 console.log(eval(result));
 display.textContent = eval(result);
 state = 'finish'
});

//AC(リセット)ボタンを押した時
const clear = document.getElementById('clear')
clear.addEventListener('click',() => {
 reset();
})

//リセットを行う関数
function reset() {
 result = 0;
 display.textContent = 0;
}

/*0ボタンを押した時
  ゼロを最初に連続で押させないようにするため*/
const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
if(state==='start'||state==='calBtn'||state==='finish'){
 if(display.textContent.slice(-1) === '0') {
    return;
   }
  }
if(state==='start') {
  result = zero.dataset.indexId;  
 }else{
  result += zero.dataset.indexId;  
 }
   display.textContent = result; 
 }) //click  