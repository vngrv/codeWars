// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {
    if(typeof(n) == 'string') {
        n = n.split('');
    } else {
        n = n.toString().split('');
    }

    sum = 0;

    n.forEach(element => {
        sum += parseInt(element);
    });

    sum = sum.toString().split('');

    if(sum.length != 1) { 
        digital_root(sum.join("")); 
    }

    return  parseInt(sum);

}

console.log(digital_root('16'));
console.log(digital_root('456'));
console.log(digital_root('111'));
