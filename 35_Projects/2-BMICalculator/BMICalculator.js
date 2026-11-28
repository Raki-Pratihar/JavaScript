const form = document.querySelector('form');
// This usecase will give you empty value 
// const height = parseInt (docuent.querySelector(#height).value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if (weight <= 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid wight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        let condition
        if (bmi < 18.6) {
            condition = ` You are Under Weight`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            condition = `You are Normal`
        } else {
            condition = `You are Overweight`
        }
        // show the result
        results.innerHTML = `<span>BMI = ${bmi}<span><br>${condition}`;
    }
});