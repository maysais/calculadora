const keys = document.querySelectorAll('button')
const display = document.querySelector('.typed_number-result')
const calculator = document.querySelector('.calculator')
const calculationDisplay = document.querySelector('.calculation')


keys.forEach(element => {
    element.addEventListener('click', () => {        
        const action = element.dataset.action
        const keyContent = element.textContent
        const displayedNumber = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        const firstValue = calculator.dataset.firstValue
        const secondValue = displayedNumber
        const operator = calculator.dataset.operator
        
        

        if(!action){           
            calculator.dataset.previousKeyType = 'number'

            if(
                displayedNumber === '0' || 
                previousKeyType === 'operator' || 
                previousKeyType === 'calculate'
            ){
                display.textContent = keyContent
            } else {
                display.textContent = displayedNumber + keyContent
            }
            
        } 

        if(
            action === '+' ||
            action === '-' ||
            action === '*' ||
            action === '/'      
        ){
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNumber
            calculator.dataset.operator = action
            calculationDisplay.textContent = `${displayedNumber} ${action}`            
        }

        switch(action){
            case 'decimal':
                if(!displayedNumber.includes('.')){
                    display.textContent = displayedNumber + '.'
                } 
                calculator.dataset.previousKeyType = 'decimal'
                break
            case 'clear':
                display.textContent = '0'
                calculationDisplay.textContent = ''
                calculator.dataset.previousKeyType = 'clear'
                break
            case 'cancel_entry':
                display.textContent = '0'
                calculator.dataset.previousKeyType = 'cancel_entry'
                break
            case 'delete':
                display.textContent = displayedNumber.substring(0, displayedNumber.length-1)
                calculator.dataset.previousKeyType = 'delete'
                break
            case 'porcentage':
                display.textContent = parseFloat(displayedNumber)/100                
                calculator.dataset.previousKeyType = 'porcentage'
                break
            case 'square':
                display.textContent = Math.pow(parseFloat(displayedNumber),2)
                calculator.dataset.previousKeyType = 'square'                
                break
            case 'square_root':
                display.textContent = Math.sqrt(parseFloat(displayedNumber))
                calculator.dataset.previousKeyType = 'square_root'
                break
            case 'fraction':
                display.textContent = (1/parseFloat(displayedNumber))
                calculator.dataset.previousKeyType = 'fraction'
                break
            case 'sign':                
                display.textContent = parseFloat(displayedNumber)*-1
                calculator.dataset.previousKeyType = 'sign'
                break
                
        }       

        if(action === 'calculate'){    
                   
            calculator.dataset.previousKeyType = 'calculate'

            calculationDisplay.textContent = `${firstValue} ${operator} ${secondValue} =`
            
            display.textContent = calculate(firstValue, operator, secondValue)
            
        }
    })
})


function calculate(numberOne, operator, numberTwo){
    let result = ''
    let n1 = parseFloat(numberOne)
    let n2 = parseFloat(numberTwo)

    switch(operator){
        case '+':
           result = n1 + n2 
           break
        case '-':
            result = n1 - n2
            break
        case '*':
            result = n1 * n2
            break
        case '/':
            result = n1/n2
            break
    }

    return result

}

