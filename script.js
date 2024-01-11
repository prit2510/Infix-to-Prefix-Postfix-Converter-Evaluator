$("#btn").on("click",function(){
const str= $("#inp").val()
// const str = "-*78*45";
let n=str.length;
if($("#prefixRadio").prop("checked")){
  const postfixContent = `Postfix Notation:\n\nPostfix notation, also known as Reverse Polish Notation (RPN), is a mathematical notation in which operators come after their operands. This eliminates the need for parentheses to indicate the order of operations. For example, the infix expression "3 + 4 * 5" would be written as "3 4 5 * +" in postfix notation.\n\nSteps to Convert Infix to Postfix:\n\nThe conversion from infix to postfix can be done using a stack data structure. Here are the general steps:\n\nInitialize an empty stack to hold operators.\nScan the infix expression from left to right.\nFor each element in the infix expression:\nIf it is an operand (numeric value or variable), add it to the output.\nIf it is an operator, pop operators from the stack and add them to the output until the stack is empty or the top operator has lower precedence. Then push the current operator onto the stack.\nIf it is an opening parenthesis '(', push it onto the stack.\nIf it is a closing parenthesis ')', pop operators from the stack and add them to the output until an opening parenthesis is encountered. Pop and discard the opening parenthesis from the stack.\nAfter scanning the entire expression, pop any remaining operators from the stack and add them to the output.\n\nExample:\n\nLet's take the infix expression "a + b * (c - d) / e":\n\nScan from left to right:\nOperand "a" goes to the output.\nOperator "+" is pushed onto the stack.\nOperand "b" goes to the output.\nOperator "*" has higher precedence than "+", so it's pushed onto the stack.\nOpening parenthesis "(" is pushed onto the stack.\nOperand "c" goes to the output.\nOperator "-" is pushed onto the stack.\nOperand "d" goes to the output.\nClosing parenthesis ")" encountered. Pop operators until an opening parenthesis is encountered.\nPop and discard "(".\nOperator "/" has the same precedence as "*", so pop "*" and push "/".\nOperand "e" goes to the output.\nPop operators until the stack is empty.\nThe resulting postfix expression is: "a b c d - * e / +"\n\nThis postfix expression can be evaluated easily using a stack-based algorithm.`;

  $("#content").text(postfixContent) 
  console.log("prefix")
    rs = [...str].reverse();
  } else if($("#postfixRadio").prop("checked")){
    // postfixFunction();
    rs = str;
  } else {
    alert("Please select an option.");
  }
// console.log(rs);
let opr=[];
let i=0;
let ans;
// console.log(rs[i])
while(i!=n){
    // console.log(rs[i])
    if(((rs[i] >= '0' && rs[i] <= '9') || rs[i] > 64 && rs[i] < 91) || (rs[i] > 96 && rs[i] < 123)){
        // console.log(rs[i])
        opr.push(rs[i])
    }
    else{
        let opr2=Number(opr.pop());
        let opr1=Number(opr.pop());
        switch(rs[i]) {
            case '+':
                ans=opr1+opr2
                opr.push(ans)
                // console.log(ans)
                // console.log(rs[i])
                break;
            case '-':
                ans=opr2-opr1
                opr.push(ans)
                // console.log(ans)
                // console.log(rs[i])
              break;
            case '/':
                ans=opr2/opr1
                opr.push(ans)
                // console.log(ans)
                // console.log(rs[i])
              break;
            case '*':
                ans=opr1*opr2
                opr.push(ans)
                // console.log(ans)
                // console.log(rs[i])
              break;
          }
    }
    i=i+1;
}
$("#out").val(opr[0])
console.log("it's answer"+opr[0])
})
