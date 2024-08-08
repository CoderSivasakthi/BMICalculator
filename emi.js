function calculate(){

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var Age = document.getElementById("age").value;

    if(Age === "" || height==="" && weight === ""){
        result.innerHTML = "invalid data age";
    }
    else if(height === ""|| isNaN(height)){
        result.innerHTML = "invalid height";
    }else if(weight === ""|| isNaN(weight)){
        result.innerHTML = "invalid Weight";
    }else{
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `Underweight 😒:No...`;
            bmioutput.innerHTML = `${bmi}`;
            msg.innerHTML = `1.Eat More Healthy Fats and Proteins: Focus on nutrient-rich foods like nuts, lean meats, and whole grains.<br>
                            2.Do Strength Training: Regularly lift weights or use resistance bands to build muscle.<br>
                            3.Stick to a Meal Schedule: Eat consistently throughout the day to support muscle growth.<br>`;
            document.getElementById("bmiImg").src = "/Emicalculator/lean.png";
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `Normal Weight 😍:Hurray!!!`;
            bmioutput.innerHTML = `${bmi}`;
            msg.innerHTML = `1.Balanced Diet: Focus on whole foods, including plenty of fruits, vegetables, lean proteins, and whole grains.<br>
                                2. Regular Exercise: Combine cardio, strength training, and flexibility exercises for overall fitness.<br>
                            3. Stay Hydrated and Rested: Drink plenty of water and ensure adequate sleep for recovery and energy.<br>`;
            document.getElementById("bmiImg").src = "/Emicalculator/fit.png";
        }else if(bmi >= 25 && bmi <= 29.9 ){
            result.innerHTML = `Overweight 😮:Gym pora...`;
            bmioutput.innerHTML = `${bmi}`;
            msg.innerHTML =`1.Portion Control: Reduce portion sizes and opt for smaller, more frequent meals to manage calorie intake.<br>
            2.Increase Physical Activity: Incorporate regular cardio exercises, like walking or cycling, alongside strength training to burn calories and build muscle.<br>
            3. Healthy Food Choices: Focus on high-fiber, nutrient-dense foods like vegetables, fruits, and whole grains, and avoid sugary and processed foods.<br>`;
            document.getElementById("bmiImg").src = "/Emicalculator/obease.png";
        }
        else{
            result.innerHTML = `Obese 😱:Dont care^_^`;
            bmioutput.innerHTML = `${bmi}`;
            msg.innerHTML =`1.Consult a Healthcare Professional: Seek personalized guidance from a doctor or nutritionist to develop a safe, sustainable weight loss plan.<br>
            2.Start with Gentle Exercise: Begin with low-impact activities like walking or swimming to improve mobility and gradually increase activity levels.<br>
            3.Adopt a Balanced Diet: Focus on whole, nutrient-dense foods and reduce intake of processed foods, sugars, and unhealthy fats.<br>`;
            document.getElementById("bmiImg").src = "/Emicalculator/obease.png";
        }
    }
    
    document.getElementById("heightout").innerHTML=height +"cm";
    document.getElementById("weightout").innerHTML=weight +"Kg";
    
}
function female() {
    document.getElementById("gender").src = "/Emicalculator/female.png";
    document.getElementById("ht").src = "/Emicalculator/femaleheight.jpg";
}

function male() {
    document.getElementById("gender").src = "/Emicalculator/male.png";
    document.getElementById("ht").src = "/Emicalculator/maleheight.jpg";
}

