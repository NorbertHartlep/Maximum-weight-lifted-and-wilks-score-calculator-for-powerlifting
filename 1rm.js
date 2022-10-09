//function showing one rep max
const check1rm = function(weight, reps){
    var output = document.getElementById("effect");
    //check the input values aren't 0
    if(weight > 0 && reps > 0){
        //verify the inputs are numbers
    if(isNaN(weight) == false && isNaN(reps) == false){
        //make inputs the number type so it can properly work
        let basic = Math.round(weight * reps * 0.033);
    let max = Number(weight) + Number(basic);
    //display results
output.style.display = "block";
output.innerText = "Your one rep max is " + max + " kg so it's " + basic + " additional kg";
    }
    else
    document.getElementById("effect").innerText = "Theese values aren't numbers, try again";
    output.style.display = "block";
}  
};
module.exports = check1rm;