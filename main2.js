const num_bth = document.querySelectorAll('.num_bth');
let display = document.getElementById('display'); 
let result = 0;
let state ='start';
let mode = 'integer_mode';

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
  mode ='integer_mode'
 }) //click   
})//forEach

//イコールボタンを押した時
const equal_btn = document.getElementById('equal_btn');
equal_btn.addEventListener('click',() => {
 display.textContent = digitNum(eval(result));
 state = 'finish'
 mode ='integer_mode'
});

function digitNum(num) {
 return Math.round(num*100000000)/100000000;
}

//AC(リセット)ボタンを押した時
const clear = document.getElementById('clear')
clear.addEventListener('click',() => {
 reset();
 state = 'finish'
})

//リセットを行う関数
function reset() {
 result = 0;
 display.textContent = 0;
 mode ='integer_mode'
}

/*0ボタンを押した時
  ゼロを最初に連続で押させないようにするため*/
const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
if(state==='start'||state==='calBtn'||state ==='finish') {
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
 
 //小数点ボタンを押した時
 const dp = document.getElementById('dp');
 dp.addEventListener('click', () => {
  if(mode === 'decimal_mode') {
    return; //
   }
   
  if(state ==='calBtn') {
    result += dp.dataset.indexId;
  }
   
  if(state==='start'||state==='finish') {
     result = 0;
  }else if(state ==='calBtn') {
     if(display.textcontent.slice(-1)!=='0') {
       result += 0;
    }
  }
   result += dp.dataset.indexId;
   
   display.textContent = result;
   state = 'calculation'
   mode = 'decimal_mode';
 }) //click 