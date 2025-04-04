let allStudent = [];
const student = document.querySelector('.student');
const studentList = document.querySelector('.nameShowList');
const studentRegistryList = document.querySelector('.studentRegistryList');
const emptyRegistry = document.querySelector('.registryBtn');
const emptyStudentList = document.querySelector('.studentBtn');



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

            let student = parent.textContent.trim()

            let calification = input.value

            alert(`la nota de ${student} es ${calification}, se guardo en el Registro de notas`);

            input.value= '';

            studentRegistry(student, calification);

        }

    }

    });

        
    function studentRegistry ( student, calification ) {

        if (!localStorage.getItem(student) && localStorage.length < 10) {

            localStorage.setItem( student, `la nota de ${student} fue ${calification} `)

            let studentLocalStorage = localStorage.getItem(student)

            let li = document.createElement('li');

            li.innerHTML = ` ${studentLocalStorage} `;

            studentRegistryList.appendChild(li);

        } else if (localStorage.length = 10){

            alert ('Se alcanzo el maximo de 10 alumnos, limpie el registro para continuar')

        } else {
            alert ('ya existe en el registro')
        }
    }   


    emptyRegistry.addEventListener('click', () => {
        localStorage.clear()
        studentRegistryList.innerHTML= '';
    })

    emptyStudentList.addEventListener('click', () => {
        studentList.innerHTML= '';
        allStudent = [];
    })