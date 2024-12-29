const interval2 = setInterval(() => {
    const chatFooter = document.querySelector(
      ".x1n2onr6.x98rzlu.xh8yej3.xeuugli.x1ofbdpd"
    );
    if (chatFooter) {
  //fazer api que busque dados dos grupos e insira dinamicamente
        if(!document.querySelector(".divChild")){
              const novaDiv = document.createElement("div");
              novaDiv.classList.add("divFather");
          
              const button = document.createElement("button");
              button.classList.add("divChild");
              button.innerHTML = "Message 1";
              const button2 = document.createElement("button");
              button2.classList.add("divChild");
              button2.innerHTML = "Message 2";
              const button3 = document.createElement("button");
              button3.classList.add("divChild");
              button3.innerHTML = "Message 3";
              const button4 = document.createElement("button");
              button4.classList.add("divChild");
              button4.innerHTML = "Message 4";
          
          
              novaDiv.appendChild(button);
              novaDiv.appendChild(button2);
              novaDiv.appendChild(button3);
              novaDiv.appendChild(button4);
          
          
              chatFooter.appendChild(novaDiv);
              
          }
    }
    fetchData()
  }, 1000);
  
