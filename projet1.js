let language = document.getElementById('selection');
let h = document.getElementById('h');
let submit = document.getElementById('submit');
let l1 = document.getElementById('l1');
let inp1 = document.getElementById('input1');
let r1 = document.querySelectorAll('.output1');
let inp2 = document.getElementById('input2');
let r2 = document.querySelectorAll('.output2');
let inp3 = document.getElementById('input3');
let r3 = document.querySelectorAll('.output3');
let inp4= document.getElementById('input4');
let r4 = document.querySelectorAll('.output4');
let inp5 = document.getElementById('input5');
let r5 = document.querySelectorAll('.output5');
let inp6 = document.getElementById('input6');
let r6 = document.querySelectorAll('.output6');
let inp7 = document.getElementById('input7');
let r7 = document.querySelectorAll('.output7');
let inp8 = document.getElementById('input8');
let r8 = document.querySelectorAll('.output8');
let inp9 = document.getElementById('input9');
let r9 = document.querySelectorAll('.output9');
let inp10 = document.getElementById('input10');
let r10 = document.querySelectorAll('.output10');


submit.onclick = function(){
     if(language.value == 'English'){
         l1.style.display = 'none';
     l1.style.display = 'block';
     }
      else if(language.value == 'Frensh'){
       
       }
      else if(language.value == 'Arabic'){

    }
       else if(language.value =='Spanish'){
     
    }
}
    inp1.onclick = function(){
    r1.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })}
    inp2.onclick = function(){
    r2.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
    }
    inp3.onclick = function(){
    r3.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
    }
    inp4.onclick = function(){
    r4.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
    }
    inp5.onclick = function(){
    r5.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
    }
    inp6.onclick = function(){
    r6.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
}
 inp7.onclick = function(){
    r7.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
}
inp8.onclick = function(){
    r8.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
}
inp9.onclick = function(){
    r9.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
}
inp10.onclick = function(){
    r10.forEach(function(e){
    if(e.style.display === ''||e.style.display ==='none'){ 
        e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
}