const calculatorState = {
    
    firstNum: "",
    operator: "",
    secondNum: "",
    result: "",

    clearDisplay: function() {
        this.firstNum = "";
        this.operator = "";
        this.secondNum = "";
        this.result = "";
    },

    add: function() {
        this.result = parseInt(this.firstNum) + parseInt(this.secondNum);
    },

    subtract: function() {
        this.result = parseInt(this.firstNum) - parseInt(this.secondNum);

    },

    multiply: function() {
        this.result = parseInt(this.firstNum) * parseInt(this.secondNum);
    },

    divide: function() {
        this.result = parseInt(this.firstNum) / parseInt(this.secondNum);
    },

    operate: function() {
        switch(this.operator) {
            case "+":
                this.add();
                break;
            case "-":
                this.subtract();
                break;
            case "×":
                this.multiply();
                break;
            case "÷":
                this.divide();
                break;
            case "":
                //do nothing
                break;
        }
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
            case "PlusButton":
                if (this.result != "") {
                    this.firstNum = this.result;
                } else {
                    this.operate();
                    this.firstNum = this.result;
                }
                break;
            case "MinusButton":
                if (this.result != "") {
                    this.firstNum = this.result;
                } else {
                    this.operate();
                    this.firstNum = this.result;
                }
                break;
            case "MultiplyButton":
                 if (this.result != "") {
                    this.firstNum = this.result;
                } else {
                    this.operate();
                    this.firstNum = this.result;
                }
                break;
            case "DivideButton":
                if (this.result != "") {
                    this.firstNum = this.result;
                } else {
                    this.operate();
                    this.firstNum = this.result;
                }
                break;
            case "EqualsButton":
                this.firstNum = this.result;
                break;  
        }
    },

    populateOperator: function() {
        if (this.result != "") {
            this.result = "";
            this.secondNum = "";
        }
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
        //reset display first
        let display = document.querySelector(".Display");
        display.textContent="";

        //clear display and all properties
        if (event.target.id == "ClearButton") {
            this.clearDisplay();
        }
        //populate 3 properties before operation
        if ((event.target.classList.contains("Number") && this.operator=="" && this.secondNum=="") || (event.target.classList.contains("Operator") && this.result != "") || (event.target.id == "EqualsButton" && this.result != "") || (event.target.classList.contains("Operator") && this.firstNum != "" && this.secondNum != "")) {
            this.populateFirstNum();
        }
        if ((event.target.classList.contains("Operator") && this.firstNum!="" && this.secondNum=="") || (event.target.classList.contains("Operator") && this.result != "")) {
            this.populateOperator();
        }
        if (event.target.classList.contains("Number") && this.firstNum!="" && this.operator!="") {
            this.populateSecondNum();
        }

        //perform operation
        if (((event.target.classList.contains("Operator") || event.target.id == "EqualsButton") && this.firstNum!="" && this.secondNum!="") || (event.target.id == "EqualsButton" && this.firstNum!="" && this.result!="")) {
            this.operate();
        }        

        //testing purposes. delete this once done.
        console.clear();
        console.log("firstNum: " + this.firstNum);
        console.log("operator: " + this.operator);
        console.log("secondNum: " + this.secondNum);
        console.log("result: " + this.result);

        //display logic
        if (event.target.id == "EqualsButton") {
            display.textContent = this.result;
        } else if (event.target.classList.contains("Operator") && this.firstNum!="" && this.result!="") {
            display.textContent = this.firstNum + this.operator;
        } else {
            display.textContent = this.firstNum + this.operator + this.secondNum;
        }
        
    }

};

let buttons = document.querySelector(".Buttons");
buttons.addEventListener("click", (event) => {
    if (event.target.id != "") {
        calculatorState.updateDisplay(event);
    }
})