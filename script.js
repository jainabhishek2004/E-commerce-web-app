
const snacks =["Thepla","Khakra","Dhokla","Chakli","Mathri"];
const Snackimages =["Thepla.webp","Khakra.jpg","Dhokla.webp","Chakli.jpg","Mathri.jpg"]
const snak = document.getElementById("snak");
let index = 0;

function changeSnackName() {
    const snackElement = document.getElementById("snak");
    snackElement.textContent = snacks[index];
    index = (index ) % snacks.length; 
    const snackImage = document.getElementById("snak-image")
    snackImage.src = "images/"+Snackimages[index];
    index = (index ) % snacks.length;
    
    if(index==4){
        index=0;
    }
    else{
        index++;
    }
}

setInterval(changeSnackName, 2000); 