$('.block').on('click',function(){
anime({
targets: '.block',
top: window.innerHeight*2,
duration:2000,
easing:'easeInOutElastic'
})
})

anime({
    targets: '.block',
    left: function(){return anime.random(500,window.innerWidth-500);
},
top: function(){return anime.random(500,window.innerHeight-500);
},
scale: function(){return anime.random(2,4);},
rotate: function(){return anime.random(-1000,1000);},
borderRadius: function(){ return ['50%',anime.random(10,35)+'%'];
},
duration: function(){ return anime.random(1200,1800);},
delay: function(){ return anime.random(0,400);},
loop:false

});