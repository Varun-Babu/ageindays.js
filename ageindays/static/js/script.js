function ageInDays() {
    var dob = prompt("what year you were born");
    var age =(2018 - dob) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + age + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('flex-box-result').remove();
}