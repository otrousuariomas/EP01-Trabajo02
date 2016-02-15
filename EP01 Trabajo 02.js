/////////////////////////////////////////////
//  Áreas
/////////////////////////////////////////////
//Triángulo
  var area;
  var altura;
  var base;
  altura = prompt ("Altura");
  base = prompt ("Base");
  area = (altura * base)/2;
  console.log(area + " es el área del triángulo");

//Círculo
  var radio;
  var p= Math.PI;
  var area;

  radio = prompt ("Radio");
  area = (radio * radio * p );
  console.log(area + " es el área del círculo");

//Cuadrado
  var area;
  var base;
  var altura;
  base = prompt ("Base");
  altura = prompt ("Altura");
  area = (base * altura);
  console.log(area + " es el área del cuadrado");

/////////////////////////////////////////////
// Conteo de
/////////////////////////////////////////////
//Vocales
  var vocales=[["a",0],["e",0],["i",0],["o",0],["u",0]];
  var Vocales=[["A",0],["E",0],["I",0],["O",0],["U",0]];
  var palabra=prompt("Digite una palabra");
  //Vocales en minùscula
  for (var i = 0; i < vocales.length; i++)
  {
    for(var j = 0; j < palabra.length; j++)
    {

      if (palabra.charAt(j) === vocales[i][0])
      {
        vocales[i][1]++;
      }
    }
  }
  for (var j = 0; j < vocales.length; j++)
  {
    if (vocales[j][1] != 0)
    {
      console.log(vocales [j][1]+ " => " + vocales[j][0]);
    }
  }
//Vocales en mayúscula
  for (var i = 0; i < Vocales.length; i++)
  {
    for(var j = 0; j < palabra.length; j++)
    {

      if (palabra.charAt(j) === Vocales[i][0])
      {
        Vocales[i][1]++;
      }
    }
  }
  for (var j = 0; j < Vocales.length; j++)
  {
    if (Vocales[j][1] != 0)
    {
      console.log(Vocales [j][1]+ " => " + Vocales[j][0]);
    }
  }
//Consonantes
  var consonantes = [["b",0],["c",0],["d",0],["f",0],["g",0],["h",0],["j",0],["k",0],
  ["l",0],["m",0],["n",0],["ñ",0],["p",0],["q",0],["r",0],["s",0],["t",0],
  ["v",0],["w",0],["x",0],["y",0],["z",0]];
  var Consonantes = [["B",0],["C",0],["D",0],["F",0],["G",0],["H",0],["J",0],["K",0],
  ["L",0],["M",0],["N",0],["Ñ",0],["P",0],["Q",0],["R",0],["S",0],["T",0],
  ["V",0],["W",0],["X",0],["Y",0],["Z",0]];
  var palabra = prompt("ÇDigite una palabra");
//Consonantes en minúcula
  for (var i = 0; i < consonantes.length; i++)
  {
    for(var j = 0; j < palabra.length; j++)
    {

      if (palabra.charAt(j) === consonantes[i][0])
      {
        consonantes[i][1]++;
      }
    }
  }
  for (var j = 0; j < consonantes.length; j++)
  {
    if (consonantes[j][1] != 0)
    {
      console.log(consonantes [j][1]+ " => " + consonantes[j][0]);
    }
  }
//Consonantes en mayúscula
  for (var i = 0; i < Consonantes.length; i++)
  {
    for(var j = 0; j < palabra.length; j++)
    {

      if (palabra.charAt(j) === Consonantes[i][0])
      {
        Consonantes[i][1]++;
      }
    }
  }
  for (var j = 0; j < Consonantes.length; j++)
  {
    if (Consonantes[j][1] != 0)
    {
      console.log(Consonantes [j][1]+ " => " + Consonantes[j][0]);
    }
  }
/////////////////////////////////////////////
// Capicua
/////////////////////////////////////////////
  var Num = prompt("Digite un número");

  if (Num.length >= 2)
  {
    for(c=0; c < Num.length/2; c++)
    {
  	   if (Num[c]===Num[Num.length-1-c])
  	    {
  		      console.log("El número es capicua");
  	    }
  	else
    { console.log("El número no es capicua");}

    }
  }
