document.addEventListener("DOMContentLoaded", function () {
  let firstButton = document.createElement("button");
  firstButton.innerText = "Step 1:";
  let domDiv = document.getElementById("dom-div");
  let p = document.querySelector("p");
  let frndArray = ["Tom", "Tommy", "Thomas", "Tommison", "Tomlin", "Tammy", "Tameka", "Tam-Tam", "Tamerina", "Tapanga"];
  let counter = 0;  
  domDiv.appendChild(firstButton);
  firstButton.addEventListener("click", function () {
    alert("A Nice Message");
  });

    let hoverdiv = document.getElementById("hoverdiv");
    hoverdiv.style.height ="50px";
    hoverdiv.addEventListener("mouseenter", function () {
        hoverdiv.style.backgroundColor = "blue";
    });
    hoverdiv.addEventListener("mouseleave", function () {
        hoverdiv.style.backgroundColor = "";
    });

  let form = document.getElementById("frm");
  form.addEventListener("submit", function (e) {
      e.preventDefault();

    let textValue = document.getElementById("frmtxt").value;
    alert(textValue);
    let prgrphtxt = document.createTextNode(textValue);
    p.appendChild(prgrphtxt);
   
    
    p.addEventListener("click", function () {
          function colorWheel() {
        let rndmclr = "#" + Math.ceil(Math.random() * 16777215).toString(16);
        return rndmclr;
      }
      p.style.color =  colorWheel();
    });
  });

  divChanger.addEventListener("click", function () {
    let span = document.createElement("span");
    span.innerText = " Adam ";
    divToChange.appendChild(span);
  });

  frndlstbtn.addEventListener("click", function (){
      let nwlstitem = document.createElement("li");
      let frndlst = document.getElementById("frndlst")
      frndlst.appendChild(nwlstitem);
      let textNode =document.createTextNode(frndArray[counter]);
      nwlstitem.appendChild(textNode);
      counter++;
  });








});
