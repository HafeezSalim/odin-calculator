const calculatorState = {
    
    firstNum: "5",
    operator: "+",
    secondNum: "3",

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
    }

};

console.log(calculatorState.operate());