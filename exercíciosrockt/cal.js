function calcular(n1,s,n2) {
    let r
        

  switch(s){
    case '+' :
        r = n1 + n2
        console.log(r)
        
        break
    case '-' : 
        r = n1 - n2
        console.log(r)
        
        break
    case '*' : 
        r = n1 * n2
        console.log(r)
        
        break
    case '/' : 
        r = n1 / n2
        console.log(r)
        
        break
    default: 
        console.log('Operador não implementando')
        break            
    }
} 

console.log(calcular(1, '*', 8))
