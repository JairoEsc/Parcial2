
var lista=[];
var red=[];
var green=[];
var blue=[];
var min, max,h=45;

function setup() {
  var font= createCanvas(1100,530);
  font.position(120,80);
  font.background(51);
 clear();
  
}

function draw() {
  if(min>0){
    fill(85,110,96);
    text("Minimo",433,25);
    text(min,460,45);
  }
  if(max>0){
    fill(85,110,96);
    text("Maximo",623,25);
    text(max,650,45);
  }

  for(var i=0; i<lista.length;i++ ){
    var t;
    fill(red[i],green[i],blue[i]);
    if(i==(h+1)){
      fill(255,0,0);
      t=50*(i+1.2);
      triangle(t-12, 65, t, 75, t+12, 65);
    }
    textSize(20);    
    text(lista[i],50*(i+1),100);
    rect(50*(i+0.98),105, 20, lista[i]*4);
    
  }
}


function Aleatorio() { 
  lista=[];
  red=[];
  green=[];
  blue=[];
  for (var i=0, t=20; i<t; i++) {
      lista.push(Math.round(Math.random() * 98)+1);
  }
  for (var i=0, t=20; i<t; i++) {
    red.push(Math.round(Math.random() * 210));
  }
  for (var i=0, t=20; i<t; i++) {
    green.push(Math.round(Math.random() * 210));
  }
  for (var i=0, t=20; i<t; i++) {
    blue.push(Math.round(Math.random() * 210));
  }
  clear();
  console.log(lista); 

  document.getElementById("min").disabled = false;
  document.getElementById("max").disabled = false;
  document.getElementById("ordenar").disabled = false;
  
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function Burbuja() {
  document.getElementById("aleatorio").disabled = true;
  document.getElementById("ordenar").disabled = true;
  var n, i, k, aux,auxr,auxg,auxb;
  n = lista.length;
   
  for (k = 0; k < n; k++) {
      for (i = -1; i < (n - k); i++) {
          h=i;
          if (lista[i] > lista[i + 1]) {
            
              aux = lista[i];
              lista[i] = lista[i + 1];
              lista[i + 1] = aux;
              
              auxr = red[i];
              red[i] = red[i + 1];
              red[i + 1] = auxr;

              auxg = green[i];
              green[i] = green[i + 1];
              green[i + 1] = auxg;
              
              auxb = blue[i];
              blue[i] = blue[i + 1];
              blue[i + 1] = auxb;
              
          }
          await sleep(350);
          clear();
          
      }
  }
  clear();
  document.getElementById("aleatorio").disabled = false;
 
}

function Valmin(){
  min=Math.min.apply(null, lista);
  console.log(min);
  clear();

}
function Valmax(){
  max=Math.max.apply(null, lista);
  console.log(max);
  clear();
}
