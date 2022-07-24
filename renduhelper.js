import { keeper} from "./rendu";

let RatingDisplay = document.querySelector('#display');
console.log(RatingDisplay);

if ( keeper == 'num1'){
    RatingDisplay.innerHTML = "You selected 1 out of 5"
}

console.log(keeper);