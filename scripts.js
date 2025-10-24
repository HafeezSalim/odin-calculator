const calculateState = {
    
    firstNum: "5",
    operator: "",
    secondNum: "5",

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

    }

};