function BinarioADecimals(num) {
  // tu codigo aca
  var numString = num.toString().split("");
  var valorActual = parseInt(numString[0]);
  //
  console.log(num);
  console.log(numString);
  console.log(valorActual);
  //
  if(numString.length == 1){
    console.log(valorActual);
    var Resultado =Math.pow(2,0) * valorActual;
    return Resultado;
  }
  numString.shift();
  console.log(numString.length);
  console.log(numString);
  var Valorstring = numString.join("").toString();
  console.lo
console.log(Valorstring);
  var Resultado = (Math.pow(2,numString.length) * valorActual) + BinarioADecimals(Valorstring);
  return Resultado;
}

console.log(BinarioADecimals("1110000001"));
