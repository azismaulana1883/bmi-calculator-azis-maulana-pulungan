function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight == "" || height == "") {
        document.getElementById('result').innerHTML = '<b>Data tidak boleh kosong atau 0 atau bukan angka!!</b>';
        return;
    }
    

    // if (weight === 0 && height === 0) {
    //     document.getElementById('result').innerHTML = `<b>The Number can't be 0</b>`;
    //     return;
    // }

    if (!regex(weight, height)) {
        alert('tidak boleh ada simbol!');
        return;
    }

    // (weight === 0 && height === 0) ? alert('data tidak boleh bernilai 0') : null;

    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(1);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    if(category == 'Normal Weight')
    {
        category = 'Normal';
    }

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your BMI is <b> ${bmi} </b>which means You Are <b>${category}</b></p>`;
}

function regex(weight, height) {
    let validRegex = /^\d*\.?\d+$/;
    return validRegex.test(weight) && validRegex.test(height);
}