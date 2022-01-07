function balancedBrackets(string) {
  const resultArr = [];
  let isBalanced = true;
  let characters = string.match(/[\W]/g);
  
  let pairs = {
    '(':')',
    '{':'}',
    '[':']',
    '<':'>'
  }
//   return characters
  characters.forEach((character) => {
      if(Object.keys(pairs).includes(character)){
        resultArr.push(character);
      }
      if(Object.values(pairs).includes(character)){
          const lastChar = resultArr.pop();
          if(pairs[lastChar] !== character){
              isBalanced = false
          }
      }
  });
  if (resultArr.length !== 0){
      isBalanced = false;
  }
  return isBalanced;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// // => false

console.log(balancedBrackets('[({}{}{})([])]'))
// // => true

module.exports = balancedBrackets