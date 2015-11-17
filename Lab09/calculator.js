"use strict"
window.onload = function () {
    var stack = [];
    var displayVal = "0";       // result division 
    for (var i in $$('button')) {
        $$('button')[i].onclick = function () {
            var value = this.innerHTML;     // click button
            //document.getElementById('result').innerHTML = value;
            var exp=document.getElementById('expression').innerHTML;
           // alert((exp.substring(exp.length-1)));
            if((parseInt(value)<10)&&(0<=parseInt(value))&&((exp.substring(exp.length-1))=='!')){}//Ignore number right after ! 
            else if((parseInt(value)<10)&&(0<=parseInt(value))&&((exp.substring(exp.length-1))!='!')){
                if(displayVal==0){
                    displayVal=value;
                    document.getElementById('result').innerHTML = displayVal; 
                }
                else{
                    displayVal+=value;
                    document.getElementById('result').innerHTML = displayVal; 
                }
            }
            else if(value=='AC'){ 
                displayVal=0;
                stack = [];
                document.getElementById('expression').innerHTML = 0;
                document.getElementById('result').innerHTML = displayVal; 
            }
            else if(value=='.'){
                if((displayVal.indexOf('.')==-1)){    // when . is not
                    displayVal+=value;
                    document.getElementById('result').innerHTML = displayVal; 
                }
            }
            else{   //When an operator button is clicked
                if(document.getElementById('expression').innerHTML==0){
                    document.getElementById('expression').innerHTML=displayVal;//number
                }else{  
                    if((value=='!')&&((exp.substring(exp.length,exp.length-1))=='!')){}
                    else if((value=='!')&&((exp.substring(exp.length,exp.length-1))!='!')){}
                    else if((displayVal!=0)){   //case After !
                        document.getElementById('expression').innerHTML+=displayVal;//number
                    }
                }
                document.getElementById('expression').innerHTML+=value; // the operator

                //Create if-else statement to check the last operator has a high priority or not. ( *, /, ^ have a high priority)

                if((stack[stack.length-1]=='*')||(stack[stack.length-1]=='/')||(stack[stack.length-1]=='^')){//if the last operator has a high priority
                    highPriorityCalculator(stack, displayVal);// call highPriorityCalculator.  
                }
                else if((value=="!")&&((exp.substring(exp.length-1))!='!')){
                    stack.push(factorial(displayVal));
                }
                else if((value=="!")&&((exp.substring(exp.length-1))=='!')){}  //Ignore ! right after !               
                else{                                   //Else, 
                    stack.push(parseFloat(displayVal)); //push converted displayVal using parseFloat to stack. 
                }
                if(value!="!"){
                    var tmp3 = stack.pop();
                        if(tmp3!=0){
                            stack.push(tmp3);
                            stack.push(value); //Push clicked operator to stack after the calculated result or converted displayVal is pushed. 
                        }
                        else{
                            stack.push(value); //Push clicked operator to stack after the calculated result or converted displayVal is pushed. 
                        }
                }
                displayVal = "0";   //where result division should reset to 0
                if(value=="="){
                    displayVal = calculator(stack);
                    document.getElementById("expression").innerHTML = 0;
                    stack = [];
                } 
            }
            document.getElementById('result').innerHTML = displayVal;  
        };
    }
};

function factorial (x) {
    var i=0;
    var result = 1;
    for(i=x; i>0;i--){
        result *= i;
    }
    return result;
}

function highPriorityCalculator(s, val) {   //stack[stack.length-1]
    var result;    
    var operator = s.pop();
    var operand = s.pop();
    if(operator == "*"){
        result = operand * val;
    }
    else if(operator == "/"){
        result = operand / val;
    }
    else if(operator == "^"){
        result = Math.pow(operand,val);
    }
    s.push(result); //Push the calculated result to the stack
}

function calculator(s) {
    var result = s[0];
    var operator = "+";
    for (var i=1; i< s.length; i+=2) {
        if(s[i]==operator){
            result+=s[i+1];
        }
        else if(s[i]=='-'){
            result-=s[i+1];
        }
    }
    return result;
}