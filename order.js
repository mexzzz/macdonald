function change(a){

    var elements = document.getElementsByClassName('div3');
    for(var i=0; i<elements.length; i++) { 
    elements[i].style.display='none';
    }

    var elements2 = document.getElementsByClassName('div2');
    for(var i=0; i<elements2.length; i++) { 
    elements2[i].style.display='none';
    }

switch(a) {
    case 1: document.getElementById("div31").style.display = "block"; document.getElementById("div21").style.display = "block"; break;
    case 2: document.getElementById("div32").style.display = "block"; document.getElementById("div22").style.display = "block"; break;
    case 3: document.getElementById("div33").style.display = "block"; document.getElementById("div23").style.display = "block"; break;
    case 4: document.getElementById("div34").style.display = "block"; document.getElementById("div24").style.display = "block"; break;
    case 5: document.getElementById("div35").style.display = "block"; document.getElementById("div25").style.display = "block"; break;
    case 6: document.getElementById("div36").style.display = "block"; document.getElementById("div26").style.display = "block"; break;
}
}

let i1 = false;
let i2 = false;
let i3 = false;

let divcount2 = 1;

let bigmac_count = 0;
let fries_count = 0;
let cola_count = 0;


let bigmac = new Image();
bigmac.src = "images/bigmac.jpg";
bigmac.className = "topm";

let fries = new Image();
fries.src = "images/fries.jpg";
fries.className = "topm";
fries.style.clear = "both";

let cola = new Image();
cola.src = "images/drinks.jpg";
cola.className = "topm";
function add(a){
 

    switch (a){
        case 1: 
        var div = document.createElement("div");
        var para = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        para.className = "menup";
        para.innerHTML = "Big Mac";
        div.className = "div5";
        div.id = "div5" + a;
        para.className = "menup";
        para.innerHTML = "Big Mac";
        bigmac_count++;
        para2.innerHTML = "x" + bigmac_count;
        para2.className = "menup2";
        var price = bigmac_count * 4.95;
        para3.innerHTML = "€" + price.toFixed(2);
        para3.className = "menup2";

        if (i1 == false)
        {
        document.getElementById("div4").appendChild(div);
        document.getElementById("div5" + a).appendChild(bigmac);
        document.getElementById("div5" + a).appendChild(para);
        document.getElementById("div5" + a).appendChild(para2);
        document.getElementById("div5" + a).appendChild(para3);
        i1 = true;

          const button2 = document.createElement('button');
          button2.innerText = '-';
          button2.id = 'reduceButton';
          button2.className = 'menubtn2';
          button2.addEventListener('click', () => {
              reduce();
          })
          document.getElementById("div5" + a).appendChild(button2);
  
          function reduce() {
            if (bigmac_count > 1){
              bigmac_count--;
              price = bigmac_count * 4.95;
              document.getElementById("div5" + a).children[2].innerHTML = "x" + bigmac_count;
              document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);
            }
            }

            const button3 = document.createElement('button');
            button3.innerText = '+';
            button3.id = 'increaseButton';
            button3.className = 'menubtn3';
            button3.addEventListener('click', () => {
                increase();
            })
            document.getElementById("div5" + a).appendChild(button3);
    
            function increase() {
                if (bigmac_count < 20){
                bigmac_count++;
                price = bigmac_count * 4.95;
                document.getElementById("div5" + a).children[2].innerHTML = "x" + bigmac_count;
                document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);
                }
              }

              const button = document.createElement('button');
              button.innerText = 'X';
              button.id = 'removeButton';
              button.className = 'menubtn1';
              button.addEventListener('click', () => {
                  remove();
              })
              document.getElementById("div5" + a).appendChild(button);
      
              function remove() {
                  div.remove();
                  i1 = false;
                  bigmac_count = 0;
                }

        }
        else {document.getElementById("div5" + a).children[2].innerHTML = "x" + bigmac_count;
                document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}
        break;



        case 2: 
        var div = document.createElement("div");
        var para = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        para.className = "menup";
        para.innerHTML = "Big Mac";
        div.className = "div5";
        div.id = "div5" + a;
        para.className = "menup";
        para.innerHTML = "Fries";
        fries_count++;
        para2.innerHTML = "x" + fries_count;
        para2.className = "menup2";
        var price = fries_count * 1.95;
        para3.innerHTML = "€" + price.toFixed(2);
        para3.className = "menup2";

        if (i2 == false)
        {
        document.getElementById("div4").appendChild(div);
        document.getElementById("div5" + a).appendChild(fries);
        document.getElementById("div5" + a).appendChild(para);
        document.getElementById("div5" + a).appendChild(para2);
        document.getElementById("div5" + a).appendChild(para3);
        i2 = true;

          const button2 = document.createElement('button');
          button2.innerText = '-';
          button2.id = 'reduceButton';
          button2.className = 'menubtn2';
          button2.addEventListener('click', () => {
              reduce();
          })
          document.getElementById("div5" + a).appendChild(button2);
  
          function reduce() {
            if (fries_count > 1){
              fries_count--;
              price = fries_count * 1.95;
              document.getElementById("div5" + a).children[2].innerHTML = "x" + fries_count;
              document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);
            }
            }

            const button3 = document.createElement('button');
            button3.innerText = '+';
            button3.id = 'increaseButton';
            button3.className = 'menubtn3';
            button3.addEventListener('click', () => {
                increase();
            })
            document.getElementById("div5" + a).appendChild(button3);
    
            function increase() {
                if (fries_count < 20){
                fries_count++;
                price = fries_count * 1.95;
                document.getElementById("div5" + a).children[2].innerHTML = "x" + fries_count;
                document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);
                }
              }

              const button = document.createElement('button');
              button.innerText = 'X';
              button.id = 'removeButton';
              button.className = 'menubtn1';
              button.addEventListener('click', () => {
                  remove();
              })
              document.getElementById("div5" + a).appendChild(button);
      
              function remove() {
                  div.remove();
                  i2 = false;
                  fries_count = 0;
                }

        }
        else {document.getElementById("div5" + a).children[2].innerHTML = "x" + fries_count;
                document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}
        break;



        case 3:
        var div = document.createElement("div");
        var para = document.createElement("p");
        var para2 = document.createElement("p");
        cola_count++;
        para2.innerHTML = "x" + cola_count;
        div.className = "div5";
        div.id = "div5" + a;
        para.className = "menup";
        para.innerHTML = "Cola";
        para2.className = "menup";

        if (i3 == false)
        {
        document.getElementById("div4").appendChild(div);
        document.getElementById("div5" + a).appendChild(cola);
        document.getElementById("div5" + a).appendChild(para);
        document.getElementById("div5" + a).appendChild(para2);
        i3 = true;

        const button = document.createElement('button');
        button.innerText = 'Verwijderen';
        button.id = 'removeButton';
        button.addEventListener('click', () => {
            remove();
        })
        document.getElementById("div5" + a).appendChild(button);

        function remove() {
            div.remove();
            i3 = false;
            cola_count = 0;
          }

        }
        else {document.getElementById("div5" + a).children[2].innerHTML = "x" + cola_count;}
        break;
    }
}