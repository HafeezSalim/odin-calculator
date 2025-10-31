const calculatorState = {
    
    firstNum: "",
    operator: "",
    secondNum: "",

    add: function() {
        let result = parseInt(this.firstNum) + parseInt(this.secondNum);
        return result;
    },

    subtract: function() {
        let result = parseInt(this.firstNum) - parseInt(this.secondNum);
        return result;
    },

    multiply: function() {
        let result = parseInt(this.firstNum) * parseInt(this.secondNum);
        return result;
    },

    divide: function() { 
        let result = parseInt(this.firstNum) / parseInt(this.secondNum);
        return result;
    },

    operate: function() {
        switch(this.operator) {
            case "+":
                result = this.add();
                break;
            case "-":
                result = this.subtract();
                break;
            case "*":
                result = this.multiply();
                break;
            case "/":
                result = this.divide();
                break;
            case "":
                result = "";
                break;
        }
        return result;
    },

    populateFirstNum: function () {
        switch(event.target.id) {
            case "ZeroButton":
                if (this.firstNum=="0") {
                    //do nothing
                } else {
                    this.firstNum = this.firstNum + "0";
                }
                break;
            case "OneButton":
                if (this.firstNum=="0") {
                    this.firstNum = "1";
                } else {
                    this.firstNum = this.firstNum + "1";
                }
                break;
            case "TwoButton":
                if (this.firstNum=="0") {
                    this.firstNum = "2";
                } else {
                    this.firstNum = this.firstNum + "2";
                }
                break;
            case "ThreeButton":
                if (this.firstNum=="0") {
                    this.firstNum = "3";
                } else {
                    this.firstNum = this.firstNum + "3";
                }
                break;
            case "FourButton":
                if (this.firstNum=="0") {
                    this.firstNum = "4";
                } else {
                    this.firstNum = this.firstNum + "4";
                }
                break;
            case "FiveButton":
                if (this.firstNum=="0") {
                    this.firstNum = "5";
                } else {
                    this.firstNum = this.firstNum + "5";
                }
                break;
            case "SixButton":
                if (this.firstNum=="0") {
                    this.firstNum = "6";
                } else {
                    this.firstNum = this.firstNum + "6";
                }
                break;
            case "SevenButton":
                if (this.firstNum=="0") {
                    this.firstNum = "7";
                } else {
                    this.firstNum = this.firstNum + "7";
                }
                break;
            case "EightButton":
                if (this.firstNum=="0") {
                    this.firstNum = "8";
                } else {
                    this.firstNum = this.firstNum + "8";
                }
                break;
            case "NineButton":
                 if (this.firstNum=="0") {
                    this.firstNum = "9";
                } else {
                    this.firstNum = this.firstNum + "9";
                }
                break;   
        }
    },

    populateOperator: function() {
        switch(event.target.id) {
            case "PlusButton":
                this.operator = "+";
                break;
            case "MinusButton":
                this.operator = "-";
                break;
            case "MultiplyButton":
                this.operator = "×";
                break;
            case "DivideButton":
                this.operator = "÷";
                break;                                                
        }
    },

    populateSecondNum: function () {
        switch(event.target.id) {
            case "ZeroButton":
                if (this.secondNum=="0") {
                    //do nothing
                } else {
                    this.secondNum = this.secondNum + "0";
                }
                break;
            case "OneButton":
                if (this.secondNum=="0") {
                    this.secondNum = "1";
                } else {
                    this.secondNum = this.secondNum + "1";
                }
                break;
            case "TwoButton":
                if (this.secondNum=="0") {
                    this.secondNum = "2";
                } else {
                    this.secondNum = this.secondNum + "2";
                }
                break;
            case "ThreeButton":
                if (this.secondNum=="0") {
                    this.secondNum = "3";
                } else {
                    this.secondNum = this.secondNum + "3";
                }
                break;
            case "FourButton":
                if (this.secondNum=="0") {
                    this.secondNum = "4";
                } else {
                    this.secondNum = this.secondNum + "4";
                }
                break;
            case "FiveButton":
                if (this.secondNum=="0") {
                    this.secondNum = "5";
                } else {
                    this.secondNum = this.secondNum + "5";
                }
                break;
            case "SixButton":
                if (this.secondNum=="0") {
                    this.secondNum = "6";
                } else {
                    this.secondNum = this.secondNum + "6";
                }
                break;
            case "SevenButton":
                if (this.secondNum=="0") {
                    this.secondNum = "7";
                } else {
                    this.secondNum = this.secondNum + "7";
                }
                break;
            case "EightButton":
                if (this.secondNum=="0") {
                    this.secondNum = "8";
                } else {
                    this.secondNum = this.secondNum + "8";
                }
                break;
            case "NineButton":
                 if (this.secondNum=="0") {
                    this.secondNum = "9";
                } else {
                    this.secondNum = this.secondNum + "9";
                }
                break;   
        }
    },

    updateDisplay: function(event) {
        let display1 = document.querySelector(".Line1");
        display1.textContent="";
        if (event.target.classList.contains("Number") && this.operator=="" && this.secondNum=="") {
            this.populateFirstNum();
        }
        if (event.target.classList.contains("Operator") && this.firstNum!="" && this.secondNum=="") {
            this.populateOperator();
        }
        if (event.target.classList.contains("Number") && this.firstNum!="" && this.operator!="") {
            this.populateSecondNum();
        }

        //testing purposes
        console.clear();
        console.log("firstNum: " + this.firstNum);
        console.log("operator: " + this.operator);
        console.log("secondNum: " + this.secondNum);

        display1.textContent=this.firstNum + this.operator + this.secondNum;
        
    }

};

let buttons = document.querySelector(".Buttons");
buttons.addEventListener("click", (event) => {
    if (event.target.id != "") {
        calculatorState.updateDisplay(event);
    }
})