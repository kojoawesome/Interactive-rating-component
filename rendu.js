
let rating = document.getElementsByClassName('figures');
console.log(rating);



//storing ratings
function keeper(e){

    let gloves  = []; 
    
    for(let i = 0; i < rating.length; i++){
        if(rating[i].innerHTML == "1"){
            gloves.push("1");
        }
        else if (rating[i].innerHTML == "2"){
            gloves.push("2");
        }
        else if (rating[i].innerHTML == "3"){
            gloves.push("3");
        }
        else if (rating[i].innerHTML == "4"){
            gloves.push("4");
        }
        else if (rating[i].innerHTML == "5"){
            gloves.push("5");
        }
    }

    console.log(e.target.id);

    if (e.target.id == 'num1'){
        return 1;
    }
    else if (e.target.id == 'num2'){
        return 2;
    }
    else if (e.target.id == 'num3'){
        return 3;
    }
    else if (e.target.id == 'num4'){
        return 4;
    }
    else if (e.target.id == 'num5'){
        return 5;
    }


}

console.log(keeper);

// event for storing ratings 
for(let i = 0; i < rating.length; i++){
    rating[i].addEventListener("click",keeper);

}

// displaying on next page

let handshake = document.getElementsByClassName('sub')[0];
console.log(handshake);


handshake.addEventListener('click', pager);

function pager(){
    location.href = './Thankyou.html'
    
}

//exporting data
export {keeper};



