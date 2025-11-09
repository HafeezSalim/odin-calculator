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
        this.result = Number(this.firstNum) + Number(this.secondNum);
    },

    subtract: function() {
        this.result = Number(this.firstNum) - Number(this.secondNum);

    },

    multiply: function() {
        this.result = Number(this.firstNum) * Number(this.secondNum);
    },

    divide: function() {
        if (this.secondNum == "0") {
            this.result = "Don't do it!"
        } else {
            this.result = Number(this.firstNum) / Number(this.secondNum);
        }
    },

    operate: function() {
        //remove decimal if no digit is inputted prior to operation
        this.secondNum = this.secondNum.toString();
        if (this.secondNum.charAt(this.secondNum.length -1) == ".") {
            this.secondNum = this.secondNum.slice(0, -1);
        }
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
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    //do nothing
                } else {
                    this.firstNum = this.firstNum + "0";
                }
                break;
            case "OneButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "1";
                } else {
                    this.firstNum = this.firstNum + "1";
                }
                break;
            case "TwoButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "2";
                } else {
                    this.firstNum = this.firstNum + "2";
                }
                break;
            case "ThreeButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "3";
                } else {
                    this.firstNum = this.firstNum + "3";
                }
                break;
            case "FourButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "4";
                } else {
                    this.firstNum = this.firstNum + "4";
                }
                break;
            case "FiveButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "5";
                } else {
                    this.firstNum = this.firstNum + "5";
                }
                break;
            case "SixButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "6";
                } else {
                    this.firstNum = this.firstNum + "6";
                }
                break;
            case "SevenButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "7";
                } else {
                    this.firstNum = this.firstNum + "7";
                }
                break;
            case "EightButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "8";
                } else {
                    this.firstNum = this.firstNum + "8";
                }
                break;
            case "NineButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum=="0") {
                    this.firstNum = "9";
                } else {
                    this.firstNum = this.firstNum + "9";
                }
                break;
            case "DotButton":
                if (this.result!="") {
                    this.result = "";
                    this.firstNum = "";
                    this.operator = "";
                    this.secondNum = "";
                }
                if (this.firstNum != "") {
                    this.firstNum = this.firstNum + ".";
                } else {
                    this.firstNum = this.firstNum + "0.";
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
            case "BackspaceButton":
                if (this.firstNum != "") {
                    this.firstNum = this.firstNum.toString().slice(0,-1);
                    this.result = "";
                } else {
                    //do nothing
                }
                break;  
        }
    },

    populateOperator: function() {
        if (this.result != "") {
            this.result = "";
            this.secondNum = "";
        }
        //remove decimal if no digit is inputted prior to operation
        this.firstNum = this.firstNum.toString();
        if (this.firstNum.charAt(this.firstNum.length -1) == ".") {
            this.firstNum = this.firstNum.slice(0, -1);
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
            case "BackspaceButton":
                if (this.operator != "") {
                    this.operator = "";
                } else {
                    //do nothing
                }
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
            case "DotButton":
                if (this.secondNum != "") {
                    this.secondNum = this.secondNum + ".";
                } else {
                    this.secondNum = this.secondNum + "0.";
                }
                break;
            case "BackspaceButton":
                if (this.secondNum != "") {
                    this.secondNum = this.secondNum.toString().slice(0,-1);
                    this.result = "";
                } else {
                    //do nothing
                }
                break;  
        }
    },

    updateDisplay: function(event) {
        //prevent keyboard from overriding elements with "greyed-out" class
        if (event.target.classList.contains("greyed-out")) {
            return;
        }
        //reset display first
        let display = document.querySelector(".Display");
        display.textContent="";

        //clear display and all properties
        if (event.target.id == "ClearButton") {
            this.clearDisplay();
        }

        console.clear();
        console.log("Target ID: " + event.target.id);
        console.log("Result value: " + this.result);

        //populate 3 properties before operation
        if (((event.target.classList.contains("Number") || event.target.id == "DotButton" || event.target.id == "BackspaceButton") && this.operator=="" && this.secondNum=="") || (event.target.classList.contains("Operator") && this.result != "") || ((event.target.id == "EqualsButton" || event.target.classList.contains("Number") || event.target.id == "DotButton") && this.result != "") || (event.target.classList.contains("Operator") && this.firstNum != "" && this.secondNum != "") || (event.target.id == "EqualsButton" && this.result.toString() === "0")) {
            this.populateFirstNum();
        }
        if (((event.target.classList.contains("Operator") || event.target.id == "BackspaceButton") && this.firstNum!="" && this.secondNum=="") || (event.target.classList.contains("Operator") && this.result != "")) {
            this.populateOperator();
        }
        if ((event.target.classList.contains("Number") || event.target.id == "DotButton" || event.target.id == "BackspaceButton") && this.firstNum!="" && this.operator!="" && this.result == "") {
            this.populateSecondNum();
        }

        //fade away decimal button if detected
        let decimalButton = document.querySelector("#DotButton");
        if ((this.firstNum.toString().includes(".") && this.operator == "") || (this.secondNum.toString().includes(".") && this.result == "")) {
            decimalButton.classList.add("greyed-out");
        } else {
            decimalButton.classList.remove("greyed-out");
        }
        
        //perform operation
        if (((event.target.classList.contains("Operator") || event.target.id == "EqualsButton") && this.firstNum!="" && this.secondNum!="") || (event.target.id == "EqualsButton" && this.firstNum!="" && this.result!="") || (event.target.id == "EqualsButton" && this.result.toString() === "0")) {
            this.operate();
        }

        //set result as firstNum if no operate is not called
        if (event.target.id == "EqualsButton" && this.operator=="" && this.secondNum=="") {
            this.result = this.firstNum;
        }

        //fade away backspace button if not needed
        let backspaceButton = document.querySelector("#BackspaceButton");
        if (this.result != "" || (this.firstNum == "" && this.operator == "" && this.secondNum == "")) {
            backspaceButton.classList.add("greyed-out");
        } else {
            backspaceButton.classList.remove("greyed-out");
        }

        //testing purposes. delete this once done.
        console.clear();
        console.log("firstNum: " + this.firstNum);
        console.log("operator: " + this.operator);
        console.log("secondNum: " + this.secondNum);
        console.log("result: " + this.result);

        //display logic
        if (event.target.id == "EqualsButton") {
            if (this.operator != "" && this.secondNum == "") {
                display.textContent = "Error!"
                this.firstNum = "";
                this.operator = "";
                this.secondNum = "";
                this.result = "";
            } else {
                display.textContent = this.result;
            }
        } else if (event.target.classList.contains("Operator") && this.firstNum!="" && this.result!="") {
            display.textContent = this.firstNum + this.operator;
        } else {
            display.textContent = this.firstNum + this.operator + this.secondNum;
        }
        
    }

};

//listen for click and keyboard events
let buttons = document.querySelector(".Buttons");
buttons.addEventListener("click", (event) => {
    if (event.target.id != "") {
        calculatorState.updateDisplay(event);
    }
})

let calculatorPage = document.body;
const myClickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true
});
let simulatedButton = "";
let isKeyDown = false;

calculatorPage.addEventListener("keydown", (event) => {
    //simulate click on calculator button
    if (isKeyDown == false) {
        switch (event.key) {
            case "1":
                simulatedButton = document.querySelector("#OneButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "2":
                simulatedButton = document.querySelector("#TwoButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "3":
                simulatedButton = document.querySelector("#ThreeButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "4":
                simulatedButton = document.querySelector("#FourButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "5":
                simulatedButton = document.querySelector("#FiveButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "6":
                simulatedButton = document.querySelector("#SixButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "7":
                simulatedButton = document.querySelector("#SevenButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "8":
                simulatedButton = document.querySelector("#EightButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "9":
                simulatedButton = document.querySelector("#NineButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "0":
                simulatedButton = document.querySelector("#ZeroButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case ".":
                simulatedButton = document.querySelector("#DotButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "-":
                simulatedButton = document.querySelector("#MinusButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "/":
                simulatedButton = document.querySelector("#DivideButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "=":
                simulatedButton = document.querySelector("#EqualsButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "Enter":
                simulatedButton = document.querySelector("#EqualsButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
            case "Backspace":
                simulatedButton = document.querySelector("#BackspaceButton");
                simulatedButton.dispatchEvent(myClickEvent);
                isKeyDown = true;
                break;
        }

        if (event.shiftKey) {
            switch (event.key) {
                case "+":
                    simulatedButton = document.querySelector("#PlusButton");
                    simulatedButton.dispatchEvent(myClickEvent);
                    isKeyDown = true;
                    break;
                case "*":
                    simulatedButton = document.querySelector("#MultiplyButton");
                    simulatedButton.dispatchEvent(myClickEvent);
                    isKeyDown = true;
                    break;
            }
        }
    }
})

calculatorPage.addEventListener("keyup", (event) => {
    //simulate click on calculator button
    if (isKeyDown == true) {
        isKeyDown = false;
    }
})