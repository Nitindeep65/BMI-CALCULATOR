

document.getElementById('calculateButton').addEventListener('click', function() {
    // Show the spinner button
    document.getElementById('spinnerButton').style.display = 'inline-block';
    
    // Get the height and weight values
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    if (height > 0 && weight > 0) {
        let bmi = weight / ((height / 100) ** 2);

        // Hide the spinner button after calculation
        setTimeout(() => {
            document.getElementById('spinnerButton').style.display = 'none';
            alert('Your BMI is ' + bmi.toFixed(2));
        }, 1000); // Simulate a delay for calculation
    } else {
        alert('Please enter valid height and weight!');
        document.getElementById('spinnerButton').style.display = 'none';
    }
});

