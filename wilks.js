const checkwilks = function(bw,weight2){
    //define consts
    const wilksForMale = [-216.0475144 , 16.2606339 , -0.002388645 , -0.00113732 , 7.01863E-06 , -1.291E-08];
    const wilksForFemale = [594.31747775582 , -27.23842536447, 0.82112226871 , -0.00930733913 , 4.731582E-05 , -9.054E-08];
 //let bw = document.getElementById("bw").value;
 let output = document.getElementById("effect2");
 //let weight = document.getElementById("weight2").value;
 //check values aren't 0
 if(weight2 > 0 && bw > 0){
    let part1 = weight2 * 500;
    //outputs to check some of the options of gender
    if(document.getElementById("Male").checked == false && document.getElementById("Female").checked == false){
        output.style.display = "block";
        output.innerHTML = "Choose gender";
        
        }
//check whick gender has been selected
        if(document.getElementById("Male").checked == true){
        //equation for wilks male
        let part2 = wilksForMale[0] + wilksForMale[1] * bw + wilksForMale[2] * Math.pow(bw, 2) + wilksForMale[3] * Math.pow(bw, 3) + wilksForMale[4] * Math.pow(bw, 4) + wilksForMale[5] * Math.pow(bw, 5);
        let final = Math.round(part1 / part2);
        output.style.display = "block";
        output.innerHTML = "your wilks score is " + final + " point's";
        }
        if(document.getElementById("Female").checked == true) {
        //equation for wilks female
        let part2 = wilksForFemale[0] + wilksForFemale[1] * bw + wilksForFemale[2] * Math.pow(bw, 2) + wilksForFemale[3] * Math.pow(bw, 3) + wilksForFemale[4] * Math.pow(bw, 4) + wilksForFemale[5] * Math.pow(bw, 5);
        let final = Math.round(part1 / part2);
        output.style.display = "block";
        output.innerHTML = "your wilks score is " + final + " point's";
        }
 }
 //output some of values are 0 or less
 else{
    output.style.display = "block";
output.innerHTML = "You didn't provided correct values";
 }
}
module.exports = checkwilks;