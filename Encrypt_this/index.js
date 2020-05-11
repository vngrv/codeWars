var encryptThis = function (text) {
  if (text.match(/ /)) {
    text = splitterText(text);
    text = text.map(function (element) {
      return splitterString(element);
    });
  } else {
    text = splitterString(text);
  }

  encryptArr = [];

  text.forEach(function (element) {
    if (Array.isArray(element)) {
      var first = element[0].charCodeAt(0);
      var last = element[element.length - 1];
      var arr = element.splice(1, element.length - 2);
      var result = [];

      result[0] = first;
      result[1] = last;
      result = result.concat(arr);
      result = result.join('');

      encryptArr.push(result);
    } else {

      var result = [];

      result[0] = element.charCodeAt(0);
      result = result.join('');

      encryptArr.push(result);
    }
  });

  return encryptArr.join(" ");
}


function splitterText(string) {
  return string.toString().split(' ');
}

function splitterString(string) {
  return string.toString().split('');
}

console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));