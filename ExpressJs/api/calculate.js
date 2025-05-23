const { 
    sum, 
    minus,
    multiply, 
    divide 
} = require('../exercicios')

const operations = ({
    sum,
    minus,
    multiply,
    divide
})

function calculate(request, response) {
    
    const {firstNum, secondNum} = request.body

    const operation = request.params.operation

    const calc = operations[operation]

    const result = calc(firstNum, secondNum)

    response.status(201).send({
        result: result
    })
}

module.exports = calculate