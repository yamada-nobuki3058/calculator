const display = document.getElementById('display');
const sub_display = document.getElementById('sub_display');

let number ;
let result ;
let no_dicimal_point_check = true;
let arithmetic_symbol ;

function number_click(value){
  if(result && !arithmetic_symbol){
    result = null;
    number = value;
  }else if(number){
    if(number != "0"){
      number += value;
    }else{
      number = value;
    }
  }else{
      number = value;
    }
  display.textContent = number;
}

function zero_click(value){
  if (number){
    if(number != "0"){
    number += value;
    }else{
      number = "0";
    }
  }else {
    number = "0";
  }
  display.textContent = number;
}

function decimal_point_click(value){
  if (no_dicimal_point_check){
    if(number){
      if(number != "0"){
        number += value;
      }else{
        number = "0.";
      }
    }else{
      number = "0.";
    }
  }
  no_dicimal_point_check = false;
  display.textContent = number;
}

function arithmetic_button_click(value){
  if( !arithmetic_symbol){
    result = number;
    arithmetic_symbol = value;
    sub_display.textContent = arithmetic_symbol;
    number = null;
  }else if(number){
    result = result + arithmetic_symbol + number;
    result = Function('return('+result+');')();
    display.textContent = result;
    arithmetic_symbol = value;
    sub_display.textContent = arithmetic_symbol;
    number = null;
  }else{
    arithmetic_symbol = value;
    sub_display.textContent = arithmetic_symbol;
  }
  no_dicimal_point_check = true;
}

function equal_click(){
  if(number && arithmetic_symbol && result){
        result = result + arithmetic_symbol + number;
        result = Function('return('+result+');')();
        display.textContent = result;
        arithmetic_symbol = null;
        number = result;
        sub_display.textContent = arithmetic_symbol;
  }else{
    arithmetic_symbol = null;
    sub_display.textContent = arithmetic_symbol;
  }
  no_dicimal_point_check = true;
}
function allClear_click(){
  number = null;
  arithmetic_symbol = null;
  result = null;
  display.textContent = "0";
  sub_display.textContent = arithmetic_symbol;
  no_dicimal_point_check = true;
}
