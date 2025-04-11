function calcBMI(){
    gender=document.getElementById("bmi").value;
    weight=parseInt(document.getElementById("pounds").value);
    height_feet=parseInt(document.getElementById("feet").value);
    height_inches=parseInt(document.getElementById("inches").value);
    bmi=703*(weight/Math.pow(height_inches,2));
    document.getElementById("result").value=bmi;

    if(bmi<17.50)
        alert("Anorexia");
    if(gender=="Male"){
        if(bmi>=17.501 && bmi<=20.70){
            alert("Underweight")
        }
        else if(bmi>=20.71 && bmi<=26.40){
            alert("Ideal range")
        }
        else if(bmi>=26.41 && bmi<=27.80){
            alert("Marginally Overweight range")
        }
        else if(bmi>=27.81 && bmi<=31.10){
            alert("Overweight range")
        }
        else if(bmi>=31.10){
            alert("Very overweight or obese range")
        }
    }
    else if(gender=="Female"){
        if(bmi>=17.501 && bmi<=20.70){
            alert("Underweight")
        }
        else if(bmi>=20.71 && bmi<=26.40){
            alert("Ideal range")
        }
        else if(bmi>=26.41 && bmi<=27.80){
            alert("Marginally Overweight range")
        }
        else if(bmi>=27.81 && bmi<=31.10){
            alert("Overweight range")
        }
        else if(bmi>=32.30){
            alert("Very overweight or obese range")
        }
    }
}