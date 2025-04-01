const allStudent = [];
const student = document.querySelector('.student');
const studentList = document.querySelector('.nameShowList');

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

    li.innerHTML = ` <p> ${student} <input type="text" class="examScoreInput">   <button class="addScoreBtn">Agregar</button>   </p> `;

    studentList.appendChild(li);

}

// Event delegation para los botones

    studentList.addEventListener('click', (event) => {

    if (event.target.classList.contains('addScoreBtn')) {

        let parent = event.target.closest('p');

        let input = parent.querySelector('.examScoreInput');

        if (input) {

        console.log(`Nota de ${parent.textContent.trim()}: ${input.value}`);

        }

    }

    });

        



