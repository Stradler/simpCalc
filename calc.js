let prevNum;
let sign;
let currentNum;
let doubleEqual = false;
let prevOperation = false;
const devSign = String.fromCharCode(247);

$(document).ready(function(){


    $("button")
    .filter(function(){
        return this.id.match(/button/);
    })
    .click(function(){

        if(prevOperation){
          $("#display").val("");
          prevOperation = false;
        }

        if(sign === "="){
          sign = "";
          prevNum = "";
        } 

        $("#display").val(
            $("#display").val() + $(this).text()
        );
    });

    $("button")
    .filter(function(){
        return this.id.match(/Button$/g);
    })
    .click(function(){

        if($(this).text() === "C"){
          sign = "";
          prevNum = "";
          $("#display").val("");
          prevOperation = false;
          return;
        }  
      
        if((sign) && (!prevOperation)) {
          if(!doubleEqual){
            currentNum = Number($("#display").val());
          }
          switch(sign){

            case "+":
              prevNum = prevNum + currentNum;
              break;
            case "*":
              prevNum = prevNum * currentNum;
              break;
            case devSign:
              if (currentNum === 0){
                prevNum = 0;
                $("#display")
                .text("Infinity");
                break;
              }
              prevNum = Number.parseFloat(prevNum / currentNum);
              break;
            case "-":
              prevNum = prevNum - currentNum;
              break;

          }

          $("#display").val(prevNum);
          prevOperation = true;

          if(($(this).text() !== "=") && (sign !== "=")){
            sign = $(this).text();   
            doubleEqual = false;              
          } else {
            prevOperation = false;
            doubleEqual = true;
          }

          return;

        }

        if(!prevNum){
          prevNum = Number($("#display").val());
        }

        sign = $(this).text();

        prevOperation = true;

    });

 });