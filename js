"use strict"
window.onload = function () {
    var stack = [];
    var displayVal = "0";
    for (var i in $$('button')) {
        $$('button')[i].onclick = function () {
            var value = this.innerHTML;
            document.getElementById('result').innerHTML = value; 
            
            if(value=='AC'){ 
                displayVal=0;
                var i;
                for(i=0;i<stack.length;i++){
                    stack[i]=null;
                }
            }
            else if(value=='.'){
                if(displayVal.indexOf('.')!=-1){
                    document.getElementById('result').innerHTML = displayVal; 

                }
                else{
                     displayVal+=value;
                      document.getElementById('result').innerHTML = displayVal; 
                }
            }
            else if((parseInt(value)<10)&&(0<=parseInt(value))){

                if(displayVal==0){
                    displayVal=value;
                }
                else{
                    displayVal+=value;
                    document.getElementById('result').innerHTML = displayVal; 
                }
            }
            else{
                stack.push(displayVal);
                displayVal+=value;
                value=0;
                document.getElementById('result').innerHTML = value;
                document.getElementById('expression').innerHTML = displayVal;          
                stack.push(value);  

                if((stack[stack.length-1]=='*')||(stack[stack.length-1]=='/')||(stack[stack.length-1]=='^')){
                        highPriorityCalculator(stack,value);
                }
                else{
                    stack.push(parseFloat(displayVal));
                    stack.push(value);
                }
                if(value=="!"){
                    alert('!');
                    stack.push(factorial(displayVal));
                }
            }
               
        };

    }
};

function factorial (x) {
    var i=0;
    var result = 1;

    for(i=x; i>0;i--){
        result *= i;
            console.log(result);

    }
    return result;

}
function highPriorityCalculator(s, val) {
    var result;
    result = s[s.length-2]+val;
    alert(result);
    s.push(result);
}
function calculator(s) {
    var result = 0;
    var operator = "+";
    for (var i=0; i< s.length; i++) {
        
    }
    return result;
}
