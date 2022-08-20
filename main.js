document.addEventListener('mousemove', function(ev){
    document.getElementById('smile').style.transform = 'translateY('+(ev.clientY-50)+'px)';
    document.getElementById('smile').style.transform += 'translateX('+(ev.clientX-50)+'px)';            
},false);