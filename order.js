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
    case 7: document.getElementById("div321").style.display = "block"; document.getElementById("div22").style.display = "block"; break;
    case 8: document.getElementById("div311").style.display = "block"; document.getElementById("div21").style.display = "block"; break;
    case 9: document.getElementById("div351").style.display = "block"; document.getElementById("div25").style.display = "block"; break;
    case 10: document.getElementById("div352").style.display = "block"; document.getElementById("div25").style.display = "block"; break;
}
}

let i1 = false; let i2 = false; let i3 = false; let i4 = false; let i5 = false; let i6 = false; let i7 = false; let i9 = false; let i10 = false; let i11 = false;

let divcount2 = 1;

let bigmac_count = 0; let fries_count = 0; let cola_count = 0; let mcchicken_count = 0; let nuggets_count = 0; let fries2_count = 0; let fries3_count = 0;
let smoothie_count = 0; let tea_count = 0; let coffee_count = 0; let muffin_count = 0;


let bigmac = new Image();
bigmac.src = "images/bigmac.jpg";
bigmac.className = "topm";

let fries = new Image();
fries.src = "images/fries.jpg";
fries.className = "topm";
fries.style.clear = "both";

let mcchicken = new Image();
mcchicken.src = "images/mcchicken.jpg";
mcchicken.className = "topm";

let nuggets = new Image();
nuggets.src = "images/nuggets.jpg";
nuggets.className = "topm";

let fries2 = new Image();
fries2.src = "images/fries_medium.jpg";
fries2.className = "topm";

let fries3 = new Image();
fries3.src = "images/fries_large.jpg";
fries3.className = "topm";

let smoothie = new Image();
smoothie.src = "images/smoothies.jpg";
smoothie.className = "topm";

let tea = new Image();
tea.src = "images/tea.jpg";
tea.className = "topm";

let coffee = new Image();
coffee.src = "images/coffee.jpg";
coffee.className = "topm";

let muffin = new Image();
muffin.src = "images/muffin.jpg";
muffin.className = "topm";


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
        var para3 = document.createElement("p");
        para.className = "menup";
        para.innerHTML = "Cola";
        div.className = "div5";
        div.id = "div5" + a;
        cola_count++;
        para2.innerHTML = "x" + cola_count;
        para2.className = "menup2";
        var price = cola_count * 2.95;
        para3.innerHTML = "€" + price.toFixed(2);
        para3.className = "menup2";

        if (i3 == false)
        {
        document.getElementById("div4").appendChild(div);
        document.getElementById("div5" + a).appendChild(cola);
        document.getElementById("div5" + a).appendChild(para);
        document.getElementById("div5" + a).appendChild(para2);
        document.getElementById("div5" + a).appendChild(para3);
        i3 = true;

          const button2 = document.createElement('button');
          button2.innerText = '-';
          button2.id = 'reduceButton';
          button2.className = 'menubtn2';
          button2.addEventListener('click', () => {
              reduce();
          })
          document.getElementById("div5" + a).appendChild(button2);
  
          function reduce() {
            if (cola_count > 1){
              cola_count--;
              price = cola_count * 2.95;
              document.getElementById("div5" + a).children[2].innerHTML = "x" + cola_count;
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
                if (cola_count < 20){
                    cola_count++;
                price = cola_count * 1.95;
                document.getElementById("div5" + a).children[2].innerHTML = "x" + cola_count;
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
                  i3 = false;
                  cola_count = 0;
                }

        }
        else {document.getElementById("div5" + a).children[2].innerHTML = "x" + cola_count;
                document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                case 4:
                  var div = document.createElement("div");
                  var para = document.createElement("p");
                  var para2 = document.createElement("p");
                  var para3 = document.createElement("p");
                  para.className = "menup";
                  para.innerHTML = "Mcchicken";
                  div.className = "div5";
                  div.id = "div5" + a;
                  cola_count++;
                  para2.innerHTML = "x" + mcchicken_count;
                  para2.className = "menup2";
                  var price = mcchicken_count * 2.95;
                  para3.innerHTML = "€" + price.toFixed(2);
                  para3.className = "menup2";
          
                  if (i4 == false)
                  {
                  document.getElementById("div4").appendChild(div);
                  document.getElementById("div5" + a).appendChild(mcchicken);
                  document.getElementById("div5" + a).appendChild(para);
                  document.getElementById("div5" + a).appendChild(para2);
                  document.getElementById("div5" + a).appendChild(para3);
                  i4 = true;
          
                    const button2 = document.createElement('button');
                    button2.innerText = '-';
                    button2.id = 'reduceButton';
                    button2.className = 'menubtn2';
                    button2.addEventListener('click', () => {
                        reduce();
                    })
                    document.getElementById("div5" + a).appendChild(button2);
            
                    function reduce() {
                      if (mcchicken_count > 1){
                        mcchicken_count--;
                        price = mcchicken_count * 2.95;
                        document.getElementById("div5" + a).children[2].innerHTML = "x" + mcchicken_count;
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
                          if (mcchicken_count < 20){
                              mcchicken_count++;
                          price = mcchicken_count * 1.95;
                          document.getElementById("div5" + a).children[2].innerHTML = "x" + mcchicken_count;
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
                            i4 = false;
                            mcchicken_count = 0;
                          }
          
                  }
                  else {document.getElementById("div5" + a).children[2].innerHTML = "x" + mcchicken_count;
                          document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                          case 5:
                            var div = document.createElement("div");
                            var para = document.createElement("p");
                            var para2 = document.createElement("p");
                            var para3 = document.createElement("p");
                            para.className = "menup";
                            para.innerHTML = "Nuggets";
                            div.className = "div5";
                            div.id = "div5" + a;
                            nuggets_count++;
                            para2.innerHTML = "x" + nuggets_count;
                            para2.className = "menup2";
                            var price = nuggets_count * 2.95;
                            para3.innerHTML = "€" + price.toFixed(2);
                            para3.className = "menup2";
                    
                            if (i5 == false)
                            {
                            document.getElementById("div4").appendChild(div);
                            document.getElementById("div5" + a).appendChild(nuggets);
                            document.getElementById("div5" + a).appendChild(para);
                            document.getElementById("div5" + a).appendChild(para2);
                            document.getElementById("div5" + a).appendChild(para3);
                            i5 = true;
                    
                              const button2 = document.createElement('button');
                              button2.innerText = '-';
                              button2.id = 'reduceButton';
                              button2.className = 'menubtn2';
                              button2.addEventListener('click', () => {
                                  reduce();
                              })
                              document.getElementById("div5" + a).appendChild(button2);
                      
                              function reduce() {
                                if (nuggets_count > 1){
                                  nuggets_count--;
                                  price = nuggets_count * 2.95;
                                  document.getElementById("div5" + a).children[2].innerHTML = "x" + nuggets_count;
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
                                    if (nuggets_count < 20){
                                        nuggets_count++;
                                    price = nuggets_count * 1.95;
                                    document.getElementById("div5" + a).children[2].innerHTML = "x" + nuggets_count;
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
                                      i5 = false;
                                      nuggets_count = 0;
                                    }
                    
                            }
                            else {document.getElementById("div5" + a).children[2].innerHTML = "x" + nuggets_count;
                                    document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                                    case 6:
                                      var div = document.createElement("div");
                                      var para = document.createElement("p");
                                      var para2 = document.createElement("p");
                                      var para3 = document.createElement("p");
                                      para.className = "menup";
                                      para.innerHTML = "Fries Medium";
                                      div.className = "div5";
                                      div.id = "div5" + a;
                                      cola_count++;
                                      para2.innerHTML = "x" + fries2_count;
                                      para2.className = "menup2";
                                      var price = fries2_count * 2.95;
                                      para3.innerHTML = "€" + price.toFixed(2);
                                      para3.className = "menup2";
                              
                                      if (i6 == false)
                                      {
                                      document.getElementById("div4").appendChild(div);
                                      document.getElementById("div5" + a).appendChild(cola);
                                      document.getElementById("div5" + a).appendChild(para);
                                      document.getElementById("div5" + a).appendChild(para2);
                                      document.getElementById("div5" + a).appendChild(para3);
                                      i6 = true;
                              
                                        const button2 = document.createElement('button');
                                        button2.innerText = '-';
                                        button2.id = 'reduceButton';
                                        button2.className = 'menubtn2';
                                        button2.addEventListener('click', () => {
                                            reduce();
                                        })
                                        document.getElementById("div5" + a).appendChild(button2);
                                
                                        function reduce() {
                                          if (fries2_count > 1){
                                            fries2_count--;
                                            price = fries2_count * 2.95;
                                            document.getElementById("div5" + a).children[2].innerHTML = "x" + fries2_count;
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
                                              if (fries2_count < 20){
                                                  fries2_count++;
                                              price = fries2_count * 1.95;
                                              document.getElementById("div5" + a).children[2].innerHTML = "x" + fries2_count;
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
                                                i6 = false;
                                                fries2_count = 0;
                                              }
                              
                                      }
                                      else {document.getElementById("div5" + a).children[2].innerHTML = "x" + fries2_count;
                                              document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                                              case 7:
                                                var div = document.createElement("div");
                                                var para = document.createElement("p");
                                                var para2 = document.createElement("p");
                                                var para3 = document.createElement("p");
                                                para.className = "menup";
                                                para.innerHTML = "Fries Large";
                                                div.className = "div5";
                                                div.id = "div5" + a;
                                                fries3_count++;
                                                para2.innerHTML = "x" + fries3_count;
                                                para2.className = "menup2";
                                                var price = fries3_count * 2.95;
                                                para3.innerHTML = "€" + price.toFixed(2);
                                                para3.className = "menup2";
                                        
                                                if (i7 == false)
                                                {
                                                document.getElementById("div4").appendChild(div);
                                                document.getElementById("div5" + a).appendChild(fries3);
                                                document.getElementById("div5" + a).appendChild(para);
                                                document.getElementById("div5" + a).appendChild(para2);
                                                document.getElementById("div5" + a).appendChild(para3);
                                                i7 = true;
                                        
                                                  const button2 = document.createElement('button');
                                                  button2.innerText = '-';
                                                  button2.id = 'reduceButton';
                                                  button2.className = 'menubtn2';
                                                  button2.addEventListener('click', () => {
                                                      reduce();
                                                  })
                                                  document.getElementById("div5" + a).appendChild(button2);
                                          
                                                  function reduce() {
                                                    if (fries3_count > 1){
                                                      fries3_count--;
                                                      price = fries3_count * 2.95;
                                                      document.getElementById("div5" + a).children[2].innerHTML = "x" + fries3_count;
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
                                                        if (fries3_count < 20){
                                                            fries3_count++;
                                                        price = fries3_count * 1.95;
                                                        document.getElementById("div5" + a).children[2].innerHTML = "x" + fries3_count;
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
                                                          i7 = false;
                                                          fries3_count = 0;
                                                        }
                                        
                                                }
                                                else {document.getElementById("div5" + a).children[2].innerHTML = "x" + fries3_count;
                                                        document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                                                        case 8:
                                                          var div = document.createElement("div");
                                                          var para = document.createElement("p");
                                                          var para2 = document.createElement("p");
                                                          var para3 = document.createElement("p");
                                                          para.className = "menup";
                                                          para.innerHTML = "Strawberry Smoothie";
                                                          div.className = "div5";
                                                          div.id = "div5" + a;
                                                          smoothie_count++;
                                                          para2.innerHTML = "x" + smoothie_count;
                                                          para2.className = "menup2";
                                                          var price = smoothie_count * 2.95;
                                                          para3.innerHTML = "€" + price.toFixed(2);
                                                          para3.className = "menup2";
                                                  
                                                          if (i8 == false)
                                                          {
                                                          document.getElementById("div4").appendChild(div);
                                                          document.getElementById("div5" + a).appendChild(smoothie);
                                                          document.getElementById("div5" + a).appendChild(para);
                                                          document.getElementById("div5" + a).appendChild(para2);
                                                          document.getElementById("div5" + a).appendChild(para3);
                                                          i8 = true;
                                                  
                                                            const button2 = document.createElement('button');
                                                            button2.innerText = '-';
                                                            button2.id = 'reduceButton';
                                                            button2.className = 'menubtn2';
                                                            button2.addEventListener('click', () => {
                                                                reduce();
                                                            })
                                                            document.getElementById("div5" + a).appendChild(button2);
                                                    
                                                            function reduce() {
                                                              if (smoothie_count > 1){
                                                                smoothie_count--;
                                                                price = smoothie_count * 2.95;
                                                                document.getElementById("div5" + a).children[2].innerHTML = "x" + smoothie_count;
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
                                                                  if (smoothie_count < 20){
                                                                      smoothie_count++;
                                                                  price = smoothie_count * 1.95;
                                                                  document.getElementById("div5" + a).children[2].innerHTML = "x" + smoothie_count;
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
                                                                    i8 = false;
                                                                    smoothie_count = 0;
                                                                  }
                                                  
                                                          }
                                                          else {document.getElementById("div5" + a).children[2].innerHTML = "x" + smoothie_count;
                                                                  document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                                                                  case 9:
                                                                    var div = document.createElement("div");
                                                                    var para = document.createElement("p");
                                                                    var para2 = document.createElement("p");
                                                                    var para3 = document.createElement("p");
                                                                    para.className = "menup";
                                                                    para.innerHTML = "Tea";
                                                                    div.className = "div5";
                                                                    div.id = "div5" + a;
                                                                    tea_count++;
                                                                    para2.innerHTML = "x" + tea_count;
                                                                    para2.className = "menup2";
                                                                    var price = tea_count * 2.95;
                                                                    para3.innerHTML = "€" + price.toFixed(2);
                                                                    para3.className = "menup2";
                                                            
                                                                    if (i9 == false)
                                                                    {
                                                                    document.getElementById("div4").appendChild(div);
                                                                    document.getElementById("div5" + a).appendChild(tea);
                                                                    document.getElementById("div5" + a).appendChild(para);
                                                                    document.getElementById("div5" + a).appendChild(para2);
                                                                    document.getElementById("div5" + a).appendChild(para3);
                                                                    i9 = true;
                                                            
                                                                      const button2 = document.createElement('button');
                                                                      button2.innerText = '-';
                                                                      button2.id = 'reduceButton';
                                                                      button2.className = 'menubtn2';
                                                                      button2.addEventListener('click', () => {
                                                                          reduce();
                                                                      })
                                                                      document.getElementById("div5" + a).appendChild(button2);
                                                              
                                                                      function reduce() {
                                                                        if (tea_count > 1){
                                                                          tea_count--;
                                                                          price = tea_count * 2.95;
                                                                          document.getElementById("div5" + a).children[2].innerHTML = "x" + tea_count;
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
                                                                            if (tea_count < 20){
                                                                                tea_count++;
                                                                            price = tea_count * 1.95;
                                                                            document.getElementById("div5" + a).children[2].innerHTML = "x" + tea_count;
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
                                                                              i9 = false;
                                                                              tea_count = 0;
                                                                            }
                                                            
                                                                    }
                                                                    else {document.getElementById("div5" + a).children[2].innerHTML = "x" + tea_count;
                                                                            document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                                                                            case 10:
                                                                              var div = document.createElement("div");
                                                                              var para = document.createElement("p");
                                                                              var para2 = document.createElement("p");
                                                                              var para3 = document.createElement("p");
                                                                              para.className = "menup";
                                                                              para.innerHTML = "Coffee";
                                                                              div.className = "div5";
                                                                              div.id = "div5" + a;
                                                                              coffee_count++;
                                                                              para2.innerHTML = "x" + coffee_count;
                                                                              para2.className = "menup2";
                                                                              var price = coffee_count * 2.95;
                                                                              para3.innerHTML = "€" + price.toFixed(2);
                                                                              para3.className = "menup2";
                                                                      
                                                                              if (i10 == false)
                                                                              {
                                                                              document.getElementById("div4").appendChild(div);
                                                                              document.getElementById("div5" + a).appendChild(coffee);
                                                                              document.getElementById("div5" + a).appendChild(para);
                                                                              document.getElementById("div5" + a).appendChild(para2);
                                                                              document.getElementById("div5" + a).appendChild(para3);
                                                                              i10 = true;
                                                                      
                                                                                const button2 = document.createElement('button');
                                                                                button2.innerText = '-';
                                                                                button2.id = 'reduceButton';
                                                                                button2.className = 'menubtn2';
                                                                                button2.addEventListener('click', () => {
                                                                                    reduce();
                                                                                })
                                                                                document.getElementById("div5" + a).appendChild(button2);
                                                                        
                                                                                function reduce() {
                                                                                  if (coffee_count > 1){
                                                                                    coffee_count--;
                                                                                    price = coffee_count * 2.95;
                                                                                    document.getElementById("div5" + a).children[2].innerHTML = "x" + coffee_count;
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
                                                                                      if (coffee_count < 20){
                                                                                          coffee_count++;
                                                                                      price = coffee_count * 1.95;
                                                                                      document.getElementById("div5" + a).children[2].innerHTML = "x" + coffee_count;
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
                                                                                        i10 = false;
                                                                                        coffee_count = 0;
                                                                                      }
                                                                      
                                                                              }
                                                                              else {document.getElementById("div5" + a).children[2].innerHTML = "x" + coffee_count;
                                                                                      document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}

                                                                                      case 11:
                                                                                        var div = document.createElement("div");
                                                                                        var para = document.createElement("p");
                                                                                        var para2 = document.createElement("p");
                                                                                        var para3 = document.createElement("p");
                                                                                        para.className = "menup";
                                                                                        para.innerHTML = "Muffin";
                                                                                        div.className = "div5";
                                                                                        div.id = "div5" + a;
                                                                                        muffin_count++;
                                                                                        para2.innerHTML = "x" + muffin_count;
                                                                                        para2.className = "menup2";
                                                                                        var price = muffin_count * 2.95;
                                                                                        para3.innerHTML = "€" + price.toFixed(2);
                                                                                        para3.className = "menup2";
                                                                                
                                                                                        if (i11 == false)
                                                                                        {
                                                                                        document.getElementById("div4").appendChild(div);
                                                                                        document.getElementById("div5" + a).appendChild(muffin);
                                                                                        document.getElementById("div5" + a).appendChild(para);
                                                                                        document.getElementById("div5" + a).appendChild(para2);
                                                                                        document.getElementById("div5" + a).appendChild(para3);
                                                                                        i11 = true;
                                                                                
                                                                                          const button2 = document.createElement('button');
                                                                                          button2.innerText = '-';
                                                                                          button2.id = 'reduceButton';
                                                                                          button2.className = 'menubtn2';
                                                                                          button2.addEventListener('click', () => {
                                                                                              reduce();
                                                                                          })
                                                                                          document.getElementById("div5" + a).appendChild(button2);
                                                                                  
                                                                                          function reduce() {
                                                                                            if (muffin_count > 1){
                                                                                              muffin_count--;
                                                                                              price = muffin_count * 2.95;
                                                                                              document.getElementById("div5" + a).children[2].innerHTML = "x" + muffin_count;
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
                                                                                                if (muffin_count < 20){
                                                                                                    muffin_count++;
                                                                                                price = muffin_count * 1.95;
                                                                                                document.getElementById("div5" + a).children[2].innerHTML = "x" + muffin_count;
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
                                                                                                  i11 = false;
                                                                                                  muffin_count = 0;
                                                                                                }
                                                                                
                                                                                        }
                                                                                        else {document.getElementById("div5" + a).children[2].innerHTML = "x" + muffin_count;
                                                                                                document.getElementById("div5" + a).children[3].innerHTML = "€" + price.toFixed(2);}
    }
}