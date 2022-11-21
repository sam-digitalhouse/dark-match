var f = document.getElementById('slash');
document.addEventListener('click', function(ev){
    f.style.left = (ev.clientX-40)+'px';
    f.style.top = (ev.clientY)-55+'px';
    f.classList.add('show');
    
},false);


