let objects = {
    dice:{
        d1:0,
        d2:0,
    },
    money:1000,
    rolls:0,
    evenGuess:null,
    oddGuess:null,
    screaming:false
}


let oddr=0
let evenr = 0
let codd = 0
let ceven = 0
 let link =document.getElementById('in')

document.getElementById('link').addEventListener('click', function(){
    
        document.getElementById('in').style.display='block'
        document.getElementById('con').style.filter = 'blur(5px)'
    
    
})
document.getElementById('clos').addEventListener('click', function(){
   
        document.getElementById('in').style.display='none'
        document.getElementById('con').style.filter = 'blur(0px)'
    
})
// let scream = document.getElementById('')

let spa = document.getElementById("spa")
let back = document.getElementById("backgroundMusic")
let horror = document.getElementById("horror")
let chill = document.getElementById("chill")
let corp = document.getElementById("corp")



function music(){
    if(ceven < 15){
        window.alert('You need to roll more Corret EVEN rolls first!')
        return
    }
    ceven -=15
    let music = Math.floor(Math.random()*5+1)
    if(music ===1){
        back.pause()
        horror.pause()
        chill.pause()
        corp.pause()

        spa.play()
        spa.setAttribute('autoplay', 'loop')

    }else if(music===2){
        horror.pause()
        chill.pause()
        corp.pause()
        spa.pause()

        back.play()
        back.setAttribute('autoplay', 'loop')
    }else if(music ===3){
        back.pause()
        chill.pause()
        corp.pause()
        spa.pause()
        
        horror.play()
        horror.setAttribute('autoplay', 'loop')
    }else if(music ===4){
        horror.pause()
        back.pause()
        corp.pause()
        spa.pause()

        chill.play()
        chill.setAttribute('autoplay', 'loop')
    }else if(music ===5){
        horror.pause()
        chill.pause()
        back.pause()
        spa.pause()

        corp.play()
        corp.setAttribute('autoplay', 'loop')
    }
    display()
}
let d = document.getElementById('d')
setInterval(()=>{
if(objects.money >=10000){
    d.setAttribute('src', 'https://media.tenor.com/1HLzrXsyGfkAAAAC/white-hair-gold.gif')
}
else if(objects.money >= 1000){
    d.setAttribute('src', 'https://media1.tenor.com/m/hOyuiw6KQIEAAAAC/wealth.gif')
}
else if(objects.money >=0){
    d.setAttribute('src', 'https://media.istockphoto.com/id/153536653/photo/a-portrait-of-a-man-with-a-stern-face.jpg?s=170667a&w=0&k=20&c=Qh-kHDvry20vXZvUM7AFDYM15JoqxuB4-DH13yHzFAI=');
}
},1000)
//back ground color
function bgc(){
    if(codd <= 10){
        window.alert('You need to roll more Corret ODD rolls first!')
        return
    }
    codd -=10
let color = Math.floor(Math.random()*6+1)
if(color ===1){
    document.getElementById("right").style.backgroundColor="red"
    document.getElementById("details").style.backgroundColor="red"
    document.getElementById("title").style.backgroundColor="red"
    document.getElementById("shop").style.backgroundColor="red"
    document.getElementById("a").style.backgroundColor = "red"
}else if(color===2){
    document.getElementById("right").style.backgroundColor = "#ADD8E6"
    document.getElementById("details").style.backgroundColor = "#ADD8E6"
    document.getElementById("title").style.backgroundColor = "#ADD8E6"
    document.getElementById("shop").style.backgroundColor = "#ADD8E6"
    document.getElementById("a").style.backgroundColor = "#ADD8E6"
}else if(color===3){
    document.getElementById("right").style.backgroundColor="blue"
    document.getElementById("details").style.backgroundColor="blue"
    document.getElementById("title").style.backgroundColor="blue"
    document.getElementById("shop").style.backgroundColor="blue"
    document.getElementById("a").style.backgroundColor = "blue"

}else if(color===4){
    document.getElementById("right").style.backgroundColor="black"
    document.getElementById("details").style.backgroundColor="black"
    document.getElementById("title").style.backgroundColor="black"
    document.getElementById("shop").style.backgroundColor="black"
    document.getElementById("a").style.backgroundColor = "black"
  
} else if(color===5){
    document.getElementById("right").style.backgroundColor="green"
    document.getElementById("details").style.backgroundColor="green"
    document.getElementById("title").style.backgroundColor="green"
    document.getElementById("shop").style.backgroundColor="green"
    document.getElementById("a").style.backgroundColor = "green"
} else if(color===6){
    document.getElementById("right").style.backgroundColor="gray"
    document.getElementById("details").style.backgroundColor="gray"
    document.getElementById("title").style.backgroundColor="gray"
    document.getElementById("shop").style.backgroundColor="gray"
    document.getElementById("a").style.backgroundColor = "gray"
}
display()
}
function donate(){
    objects.money -= objects.money
    display()
}


function doubl(){
    if(ceven >= 1000000){
        ceven = 0
    }
    if(codd >= 1000000){
        codd =0
    }
    if(objects.money <10000){
        window.alert('you need more money')
        return
    }
    ceven *=2
    codd *=2
    objects.money -= 10000
    display()
}

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')


function odd(){
    let number = document.getElementById("number")
    let inter = setInterval(()=>{
        num1 = Math.floor(Math.random()*6+1)
        num2 = Math.floor(Math.random()*6+1)
        document.getElementById('cc').style.display = 'block'
        number.style.display='none'
        display()
    },100)
    setTimeout(()=>{
        
        clearInterval(inter)
        console.log('num1',num1)
        console.log(num2)
        number.style.display='block'
        document.getElementById('cc').style.display = 'none'
        let dice1 = Math.floor(Math.random()*6+1)
        console.log(dice1)
        let dice2 = Math.floor(Math.random()*6+1)
        console.log(dice2)
        objects.evenGuess = false
        objects.oddGuess = true
       
    
    let random = Math.floor(Math.random()*40 +1)
    console.log("random",random)
    if(random ===3){
        objects.money -= objects.money*0.5
        document.getElementById("bad").innerHTML = `Bad luck! you just lost 50% of your hard earned cash <br> 1 in 40 chance`
        screaming.play()
    }else if(random !==3){
        document.getElementById("bad").innerHTML=' '
    }
    
    let total = num1 + num2
   
    number.innerHTML = `${num1} + ${num2} <br> = ${total}`
    
    let isEven = total % 2===0
    let isOdd = total % 2 ===1
    console.log(isEven)
    console.log(isOdd)
    let yay =document.getElementById("yay")
    let fail = document.getElementById("fail")
    
    if(isOdd &&  objects.oddGuess === true){
        objects.money *= 1.2
        oddr+=1
        codd +=1
        yay.play()
       
    }else if(isEven &&  objects.oddGuess === true){
        objects.money -= objects.money*0.1
       evenr +=1
        fail.play()
        
    }
    else if(isEven &&  objects.evenGuess === true){
        objects.money *= 1.2
        evenr+=1
        yay.play()
    }else if(isOdd &&  objects.evenGuess=== true){
        objects.money -= objects.money*0.1
        oddr+=1
        fail.play()
        
    }
    
    
    
    //below 0 dollars
    if(Math.floor(objects.money) <=0){
    if(isOdd &&  objects.oddGuess === true){
        yay.play()
        objects.money +=10
        codd +=1
    }else if(isEven &&  objects.oddGuess === true){
        fail.play()
        objects.money -= 20
    }
    else if(isEven &&  objects.evenGuess === true ){
        objects.money +=10
        yay.play()
    }else if(isOdd &&  objects.evenGuess=== true ){
        objects.money -= 20
        fail.play()
        
    }
    }
    objects.rolls++
    display()
    },1000)
  

}

function even(){
    let number = document.getElementById("number")
    let inter = setInterval(()=>{
        num1 = Math.floor(Math.random()*6+1)
        num2 = Math.floor(Math.random()*6+1)
        document.getElementById('cc').style.display = 'block'
        number.style.display='none'
        display()
    },100)
    setTimeout(()=>{
        clearInterval(inter)
        number.style.display='block'
        document.getElementById('cc').style.display = 'none'
        objects.evenGuess = true
        objects.oddGuess = false
    
        if(objects.evenGuess ===null && objects.oddGuess ===null){
            window.alert('choose even or odd')
            return
        }
        let dice1 = Math.floor(Math.random()*6+1)
    console.log(dice1)
    let dice2 = Math.floor(Math.random()*6+1)
    console.log(dice2)
    
    let random = Math.floor(Math.random()*40 +1)
    console.log("random",random)
    if(random ===3){
        objects.money -= objects.money*0.5
        document.getElementById("bad").innerHTML = `Bad luck! you just lost 50% of your hard earned cash <br> 1 in 40 chance`
        screaming.play()
    }else if(random !==3){
        document.getElementById("bad").innerHTML=' '
    }
    
    let total = num1 + num2
   
    number.innerHTML = `${num1} + ${num2}<br> = ${total}`
    
    let isEven = total % 2===0
    let isOdd = total % 2 ===1
    console.log(isEven)
    console.log(isOdd)
    let yay =document.getElementById("yay")
    let fail = document.getElementById("fail")
    
    if(isOdd &&  objects.oddGuess === true){
        objects.money *= 1.2
        oddr+=1
        yay.play()
       
    }else if(isEven &&  objects.oddGuess === true){
        objects.money -= objects.money*0.1
       evenr +=1
        fail.play()
        
    }
    else if(isEven &&  objects.evenGuess === true){
        objects.money *= 1.2
        evenr+=1
        yay.play()
        ceven +=1
        console.log("correct Even",ceven)
    }else if(isOdd &&  objects.evenGuess=== true){
        objects.money -= objects.money*0.1
        oddr+=1
        fail.play()
        
    }
    
    //below 0 dollars
    if(Math.floor(objects.money) <=0){
    if(isOdd &&  objects.oddGuess === true){
        yay.play()
        objects.money +=10
    
    }else if(isEven &&  objects.oddGuess === true){
        fail.play()
        objects.money -= 20
    }
    else if(isEven &&  objects.evenGuess === true ){
        objects.money +=10
        yay.play()
        ceven +=1
        console.log("correct Even",ceven)
    }else if(isOdd &&  objects.evenGuess=== true ){
        objects.money -= 20
        fail.play()
        
    }
    }
    // if(objects.money >=100000){
    //     objects.money=99000
    //     display()
    // }
    
    
    objects.rolls++
    display()
    },1000)
   
}

let reset = document.getElementById('reset')
reset.style.display = 'none';
let musi = document.getElementById('music')
let bg = document.getElementById('bgc')
let double = document.getElementById('double')
musi.style.display = 'none'
bg.style.display='none'
double.style.display='none'

let eset = setInterval(()=>{
    if (objects.money <= 0) {
               
        reset.style.display = 'block';
    } else {
        reset.style.display = 'none';
    }

    if(objects.money >= 1500){
        musi.style.display = 'block'
    } else {
        musi.style.display = 'none'
    }
    if(objects.money >= 2000){
        bg.style.display = 'block'
    } else {
        bg.style.display = 'none'
    }

    if(objects.money >= 6000){
        double.style.display='block'
    }else{
        double.style.display='none'
    }
    if(objects.money >= 200000){
        objects.money -=1
        display()
    }

    if(objects.scream == true){
        document.querySelector("button").addEventListener('click', functio)
       }

},1)

// Only start tax if evenr or oddr are greater than 0



function resee(){
    location.reload()
    objects.money = 1000
    objects.rolls = 0
    evenr =0
    oddr = 0
    reset.style.display='none'

    document.getElementById("right").style.backgroundColor="gray"
    document.getElementById("details").style.backgroundColor="gray"
    document.getElementById("title").style.backgroundColor="gray"
    document.getElementById("shop").style.backgroundColor="gray"
    document.getElementById("d").style.backgroundColor = "gray"


    corp.pause()
    horror.pause()
        chill.pause()
        back.pause()
        spa.pause()

}

function display(){
    document.getElementById("money").innerHTML = `Money: $${Math.floor(objects.money)}`
    document.getElementById("rolls").innerHTML=`Rolls: ${Math.floor(objects.rolls)}`
  
    document.getElementById("ceven").innerHTML=`Correct Even Guesses:${ceven}`
    document.getElementById('codd').innerHTML=`Correct Odd Guesses:${codd}`
    document.getElementById('cc').innerText = `${num1} + ${num2}`
}
display()