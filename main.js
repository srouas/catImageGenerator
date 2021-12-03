let catImage = document.querySelector("#cat-here");
let catButton = document.querySelector("#cat-button");

async function getCatImg(){
let response = await fetch("https://api.thecatapi.com/v1/images/search")
console.log(response)
let imgLink = await response.json()
let catPic = imgLink[0].url
catImage.src = catPic
}

catButton.addEventListener("click" , getCatImg)

// Plan
//1 get a random cat image from the API provided 
    // make async function
    // use fetch with await to get from API and so it returns with result and not unresolved promise
    // store response in a variable 
    // have the #cat-here show that image 
// 2 display this image on the page (select the image element)
    // select with query selector and store in a variable
// 3 make sure everytime you refresh the page a new picture comes up
// 4 create a button element so when you click it - a new picture comes up everytime
    // make a button in HTML
    // select with query selector and store in a variable
    // and add an event listener to it
