const allStudent = [];
const registry = [];
const student = document.querySelector('.student');
const studentList = document.querySelector('.nameShowList');
const studentRegistry = document.querySelector('.studentRegistry2');




student.addEventListener('keydown', (event) => {

  if (event.key !== 'Enter') 

    return;

    let studentValue = event.target.value.trim();

         if (isNaN(studentValue) && studentValue !== '' && allStudent.length < 10) {

                allStudent.push(studentValue);

                addStudentHTML(studentValue);

                console.log(allStudent);

                event.target.value = '';

        } else {

                alert('Solo 10 alumnos por sesión, se alcanzó el máximo');

                event.target.value = '';

        }

        });

function addStudentHTML(student) {

    let li = document.createElement('li');

    li.innerHTML = ` ${student} <input type="number" min='1' max ='10' class="examScoreInput">   <button class="addScoreBtn"></button> `;

    studentList.appendChild(li);

}



// Event delegation para los botones

    studentList.addEventListener('click', (event) => {

    if (event.target.classList.contains('addScoreBtn')) {

        let parent = event.target.closest('li');

        let input = parent.querySelector('.examScoreInput');

        if (input) {

            let estudiante = parent.textContent.trim()

            let nota = input.value

            alert(`la nota de ${estudiante} es ${nota}, se guardo en el Registro de notas`);

            input.value= '';

           registrarAlumno(estudiante, nota);

        }

    }

    });

        
    function registrarAlumno ( estudiante, nota ) {

        if (!localStorage.getItem(estudiante)) {

            localStorage.setItem( estudiante, `la nota de ${estudiante} fue ${nota} `)

            let registroDelEstudiante = localStorage.getItem(estudiante)

            let li = document.createElement('li');

            li.innerHTML = ` ${registroDelEstudiante} `;

            studentRegistry.appendChild(li);

        } else {

            alert ('ya tiene la nota en el registro')
        }
    }


