var menubar = document.getElementById('menubar');
var link = document.getElementById('link');
var closeicon = document.getElementById('closeicon');
var nav = document.getElementById('nav');
var blur = document.getElementById('blur');
var con = document.getElementById('con')


menubar.addEventListener ('click', function(){
    menubar.style.display = 'none';
    link.style.display = 'block';
    closeicon.style.display = 'block';
    nav.style.display = 'block';
    blur.style.display = 'block'
    con.style.position = 'fixed'
    con.style.top = '0'
})

closeicon.addEventListener ('click', function(){
    menubar.style.display = 'block';
    link.style.display = 'none';
    closeicon.style.display = 'none';
    nav.style.display = 'none'
    blur.style.display = 'none'
    con.style.position = 'relative'
   
})



var dash = document.getElementById('dash');
var dashb = document.getElementById('dashb');
var dashc = document.getElementById('dashc');


dashb.addEventListener ('click', function(){
    dashb.style.display = 'none';
    dash.style.display = 'block';
    dashc.style.display = 'block'
})

dashc.addEventListener ('click', function(){
    dashb.style.display = 'block';
    dash.style.display = 'none';
    dashc.style.display = 'none';
})