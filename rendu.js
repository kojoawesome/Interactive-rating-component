
let rating = document.getElementsByClassName('figures');
console.log(rating);


//storing ratings
function keeper(){

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

    console.log(gloves);

}

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
export {gloves};



