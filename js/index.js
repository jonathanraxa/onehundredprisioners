let answer_button = document.querySelector('.answer_button');
let prisoner_figure = document.querySelector(".cellmate_figure");
let prison_cell = document.querySelector(".prison_cell");
let prisoner_name = document.querySelector("#prisoner_name");
let dayNum = document.querySelector("#day_num");
let uniNum = document.querySelector("#unique_num");

let prisoners = [
    { name: "Jonny", light: 0 },
    { name: "Larry", light: 0 },
    { name: "Harry", light: 0 },
    { name: "Fairy", light: 0 },
    { name: "Terry", light: 0 }
]

// runs the simulation of 5 prisoners 
function runSimulation(prisoner) {    
    let order = [0,4,0,3,0,1,0,2,0];  
    let count = 1;
    let day = 1;
    let currLight = 0;

    count++;
    day++;
    currLight = 1;
    prisoner_name.innerHTML = prisoner[0].name;
    
    for(let i = 1; i < order.length; i++){
        
        let pris_num = order[i];
        
        setTimeout(function () {
            
            prisoner_figure.classList.toggle("moving-right");
            prisoner_name.innerHTML = prisoner[pris_num].name;
          
            if (pris_num == 0) {
                currLight = 1;
                uniNum.innerHTML = count++;
                prison_cell.classList.add("light_on");

            } else {
                currLight = 0;
                prison_cell.classList.remove("light_on");
            }

            console.log(prisoner[pris_num]);
            dayNum.innerHTML = day++;
        }, 3500*i);              
    }    
}

document.addEventListener("DOMContentLoaded", function () {
    answer_button.addEventListener("click", () => {
    runSimulation(prisoners);
    });
});