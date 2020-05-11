function descendingOrder(n){
  var array = validator(n);
  var result = array.reverse().join('');

  if(array)
  console.log(array)
  


  return parseInt(array.reverse().join(''));
}


function validator(n) { 
  if(typeof(n) == 'string') {
    return  n.split('');
  } 
  
  return  n.toString().split('');
}


console.log(descendingOrder(123456789));
console.log(descendingOrder(2110));