function showWord(word){
    console.log(word);
}
showWord('green')


function sum(a,b){
    console.log(a+b)
}
sum(2,3);


const sum2=(a,b)=>{
    console.log(a+b);
}
sum2(2,4);

function num(a=0){
    console.log(a>2)
}

console.log('1'!==2)


function say(name, time){
    if(time=='morning'){
        console.log(`доброе утро, ${name}`)
    }
    else if(time=='evning'){ 
        console.log(`добрый вечер, ${name}`)
    }
    else(console.log('добрый день'))
} 
say('name', true);
//say('name', 'утро') 
