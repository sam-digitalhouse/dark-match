var f = document.getElementById("slash");
var p = document.getElementById("print");

var clickState = 0;
var btn = document.querySelector('.button-elem');
var switchCheckbox = document.querySelector('.switch-checkbox');

document.addEventListener("click", function (ev) {
    
    f.style.left = ev.clientX + 40 + "px";
    f.style.top = ev.clientY - 55 + "px";
    f.classList.add("show");
    p.classList.remove("show");
},
false
);

btn.addEventListener('click', function(){
  if (switchCheckbox.checked == false) {
    // code snippet 1
    this.nextSibling.textContent = 'Knife';
    clickState = 1; 
    document.querySelector('body').classList.toggle("knife");
        document.addEventListener("click", function (ev) {
    
            f.style.left = ev.clientX + 40 + "px";
            f.style.top = ev.clientY - 55 + "px";
            f.classList.add("show");
            p.classList.remove("show");
        },
        false
        );
  } else {
    // code snippet 2
    this.nextSibling.textContent = 'Finger Print';
    clickState = 0;
    document.querySelector('body').classList.toggle("finger-print");
    document.addEventListener("click", function (ev) {
        
    
        f.classList.remove("show");
     
           function getRandomInt(max) {
              return Math.floor(Math.random() * max);
            }
            const randomNumber = getRandomInt(4)
            console.log(randomNumber);
            if (randomNumber == 0) {
              p.style.backgroundImage = "url('FingerPrint.svg')";
             
            }
            if (randomNumber == 1) {
              p.style.backgroundImage = "url('FingerPrint2.svg')"
             
             }
            if (randomNumber == 2) {
                p.style.backgroundImage = "url('FingerPrint3.svg')"
                
            }
            if (randomNumber == 3) {
                p.style.backgroundImage = "url('FingerPrint4.svg')"
                
            }
        p.style.left = ev.clientX - 20 + "px";
        p.style.top = ev.clientY - 155 + "px";
        p.classList.add("show");
     
    },
    false
  );
  
  }
 
});





