document.addEventListener('keydown', function(event){
    const focusedElement= document.activeElement

    if (event.key === 'ArrowLeft'){
        const prevElement= focusedElement.previousElementSibling;
        if (prevElement && prevElement.tagname === 'INPUT'){
            prevElement.focus();
        }
    }else if (event.key === 'ArrowRight'){
        const nextElement = focusedElement.nextElementSibling
        if (nextElement && nextElement.tagName === 'INPUT'){
            nextElement.focus()
        }
    }
});

// grading
document.addEventListener('DOMContentLoaded', function(){
    const subjects = document.querySelectorAll('.field2');
    const averageInput = document.querySelector('.field3');
    let grade; 

    subjects.forEach(function(input){
        input.addEventListener('input', calculateGrades);
    });

    function calculateGrades(){
        let total = 0;
        subjects.forEach(function(input){
            total += parseInt(input.value) || 0;
        });

        const average = total/5;

        if (average >= 70){
            grade = 'A';
        }
        else if(average >= 60){
            grade = 'B';
        }
        else if(average >= 50){
            grade = 'D';
        }
        else {
            grade = 'E';
        }

        averageInput.value = grade; 
    }
});

//Second row
document.addEventListener('DOMContentLoaded', function(){
    const subjects = document.querySelectorAll('.field2b');
    const averageInput = document.querySelector('.field4');
    let grade; 

    subjects.forEach(function(input){
        input.addEventListener('input', calculateGrades);
    });

    function calculateGrades(){
        let total = 0;
        subjects.forEach(function(input){
            total += parseInt(input.value) || 0;
        });

        const average = total/5;

        if (average >= 70){
            grade = 'A';
        }
        else if(average >= 60){
            grade = 'B';
        }
        else if(average >= 50){
            grade = 'C'
        }
        else if(average >= 40){
            grade = 'D';
        }
        else {
            grade = 'E';
        }

        averageInput.value = grade; 
    }
});

//Third row
document.addEventListener('DOMContentLoaded', function(){
    const subjects = document.querySelectorAll('.field2c');
    const averageInput = document.querySelector('.field5');
    let grade; 

    subjects.forEach(function(input){
        input.addEventListener('input', calculateGrades);
    });

    function calculateGrades(){
        let total = 0;
        subjects.forEach(function(input){
            total += parseInt(input.value) || 0;
        });

        const average = total/5;

        if (average >= 70){
            grade = 'A';
        }
        else if(average >= 60){
            grade = 'B';
        }
        else if(average >= 50){
            grade = 'C'
        }
        else if(average >= 40){
            grade = 'D';
        }
        else {
            grade = 'E';
        }

        averageInput.value = grade; 
    }
});
