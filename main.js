document.addEventListener('mousemove', function(ev){
    document.getElementById('smile').style.transform = 'translateY('+(ev.clientY-25)+'px)';
    document.getElementById('smile').style.transform += 'translateX('+(ev.clientX-25)+'px)';            
},false);