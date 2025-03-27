const allStudent = [];

const student = document.querySelector('.student');
const studentList = document.querySelector('.nameShowList');
const examScoreInput = document.querySelector('#examScoreInput');
const addScoreBtn = document.querySelector('#addScoreBtn');

student.addEventListener('keydown', (event) =>{

    if (event.keyCode !== 13) 

        return 

        studentValue = event.target.value; 

        if ( isNaN(studentValue) && allStudent.length < 10) {

                allStudent.push(studentValue);
                
                addStudentHTML(studentValue)

                console.log(allStudent);

                event.target.value = '';

                clickBtn ();

        } else {

            alert('Solo 10 alumnos por sesion, se alcanzo el maximo');
            event.target.value = '';
            
        }  

   } )

 function addStudentHTML(student) {

        let li = document.createElement('li')
        li.innerHTML = `<p> ${student} <input type="text" id= "examScoreInput"> <button id= "addScoreBtn" '>add</button></p>`;
        studentList.appendChild(li);
        
        
}

// onclick='clickBtn()

function clickBtn () {

    addScoreBtn.addEventListener('click', () =>{

        console.log(allStudent);
    
       } )
    
}

        



