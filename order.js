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
bigmac.src = "bigmac.jpg";
bigmac.className = "topm";

let fries = new Image();
fries.src = "fries.jpg";
fries.className = "topm";
fries.style.clear = "both";

let cola = new Image();
cola.src = "drinks.jpg";
cola.className = "topm";
function add(a){
 

    switch (a){
        case 1: 
        var div = document.createElement("div");
        var para = document.createElement("p");
        var para2 = document.createElement("p");
        bigmac_count++;
        para2.innerHTML = bigmac_count;
        div.className = "div5";
        div.id = "div5" + a;
        para.id = "menup";
        para.innerHTML = "Big Mac";

        if (i1 == false)
        {
        document.getElementById("div4").appendChild(div);
        document.getElementById("div5" + a).appendChild(bigmac);
        document.getElementById("div5" + a).appendChild(para);
        document.getElementById("div5" + a).appendChild(para2);
        i1 = true;
        
        const button = document.createElement('button')
        button.innerText = 'Verwijderen'
        button.id = 'removeButton'
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
        else {document.getElementById("div5" + a).children[2].innerHTML = bigmac_count;}
        break;



        case 2: 
        var div = document.createElement("div");
        var para = document.createElement("p");
        var para2 = document.createElement("p");
        fries_count++;
        para2.innerHTML = fries_count;
        div.className = "div5";
        div.id = "div5" + a;
        para.id = "menup";
        para.innerHTML = "Fries";

        if (i2 == false)
        {
        document.getElementById("div4").appendChild(div);
        document.getElementById("div5" + a).appendChild(fries);
        document.getElementById("div5" + a).appendChild(para);
        document.getElementById("div5" + a).appendChild(para2);
        i2 = true;

        const button = document.createElement('button')
        button.innerText = 'Verwijderen'
        button.id = 'removeButton'
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
        else {document.getElementById("div5" + a).children[2].innerHTML = fries_count;}
        break;



        case 3:
        var div = document.createElement("div");
        var para = document.createElement("p");
        var para2 = document.createElement("p");
        cola_count++;
        para2.innerHTML = cola_count;
        div.className = "div5";
        div.id = "div5" + a;
        para.id = "menup";
        para.innerHTML = "Cola";

        if (i3 == false)
        {
        document.getElementById("div4").appendChild(div);
        document.getElementById("div5" + a).appendChild(cola);
        document.getElementById("div5" + a).appendChild(para);
        document.getElementById("div5" + a).appendChild(para2);
        i3 = true;

        const button = document.createElement('button')
        button.innerText = 'Verwijderen'
        button.id = 'removeButton'
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
        else {document.getElementById("div5" + a).children[2].innerHTML = cola_count;}
        break;
    }
}