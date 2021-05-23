  const maiorPalavra = (str) => {
  let strArray = str.split(" ");
  let bigWord = "";

  for (index = 0; index < strArray.length; index += 1) {
    if (strArray[index].length > bigWord.length){
          bigWord = strArray[index];
    }
  }
  return bigWord;
} 

console.log(maiorPalavra("a maior palavra"));