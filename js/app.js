/** Initialise Bootstrap CSS */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/** Front-end curriculum array */
const curriculum = [
    {
        topic: "Basic HTML5 and CSS3",
        details: [
            "fundamentals of modern internet",
            "applied visual design, applied accessibility and repsonsive web design principles"
        ],
        resource: [
            {
                name: "Design Course",
                url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
            },
        ],
        goals: [
            "Understand the basics of writing good websites; these are the main building blocks in front-end development."
        ],
        progress: false,
    },

    {
        topic: "Bootstrap",
        details: [
            "CSS Flexbox",
            "CSS Grid",
            "Twitter Bootstrap"
        ],
        resource: [
            {
                name: "CSS Flexbox",
                url: "https://yoksel.github.io/flex-cheatsheet/"
            },
            {
                name: "Twitter Bootstrap",
                url: "https://www.youtube.com/watch?v=4sosXZsdy-s&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=57&ab_channel=TraversyMedia"
            },
        ],
        goals: [
            "Understand the CSS layouts.",
            "Using Bootstrap, build a simple project."
        ],
        progress: false,
    },

    {
        topic: "JavaScript Basics",
        details: [
            "Variables",
            "Functions",
            "Operators"
        ],
        resource: [
            {
                name: "JS Basics",
                url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
            }
        ],
        goals: [
            "Understand the basics of JavaScript."
        ],
        progress: false,
    },

    {
        topic: "ES6",
        details: [
            "Destructuring", "Assignments", "Template literals", "Getters and Setters", "kubernetes config"
        ],
        resource: [
            {
                name: "Learn ES6",
                url: "https://scrimba.com/learn/es6"
            },
        ],
        goals: [
            "Demonstrate ability to build a project using the new JavaScript standard."
        ],
        progress: false,
    },

    {
        topic: "JavaScript30",
        details: [
            "30 JS Challenges"
        ],
        resource: [
            {
                name: "JS-30",
                url: "https://javascript30.com/"
            },
        ],
        goals: [
            "Complete at least 5 different challenges in the video, the more the better."
        ],
        progress: false,
    },

    {
        topic: "TypeScript",
        details: [
            "intro to PromQL", "Object Types", "Tuples", "Enums", "unions", "Callbacks"
        ],
        resource: [
            {
                name: "TypeScript Course",
                url: "https://www.youtube.com/watch?v=BwuLxPH8IDs&ab_channel=Academind"
            }
        ],
        goals: [
            "Learn TypeScript concepts and build TS project"
        ],
        progress: false,
    },

    {
        topic: "Angular Basics",
        details: [
           "Components", "Data Binding", "Services", "Routes"
        ],
        resource: [
            {
                name: "Angular Basics",
                url: "https://www.youtube.com/playlist?list=PLqq-6Pq4lTTb7JGBTogaJ8bm7f8VCvFkj"
            }
        ],
        goals: [
            "Understand Angular concepts and build a simple Angular app"
        ],
        progress: false,
    },

    {
        topic: "Angular Components in depth",
        details: [
            "Lifecylce hooks", "view encapsulation", "view child/children", "Directives"
        ],
        resource: [
            {
                name: "Angular Components",
                url: "https://www.youtube.com/playlist?list=PLqq-6Pq4lTTbh7bUrKwyCWr6ABBFEd4bD"
            }
        ],
        goals: [
            "Understand more complex angular featuresand be able to use them in angular app"
        ],
        progress: false,
    },

    {
        topic: "Angular forms in depth",
        details: [
            "Error handling", "different types of validation", "reactive forms", "form groups", "dynamic controls"
        ],
        resource: [
            {
                name: "Angular Forms",
                url: "https://www.youtube.com/watch?v=nGr3C3wbh9c&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=34&ab_channel=Codevolution"
            }
        ],
        goals: [
            "Understand all angular components regarding forms since forms are a crucial part of an application's business logic."
        ],
        progress: false,
    },

];
/** Display User Registration Alert/Button if User is not registered OR display Username */
window.addEventListener('load', ()=>{
const registrationAlert = document.getElementById('registration-alert');
let user = localStorage.getItem('user');

if (user === null) {
    document.getElementById('register').classList.remove('d-none');

    let checks = document.getElementsByClassName('form-check-input');
    for (const input of checks) {
        input.setAttribute('disabled', 'true');
    }
    setTimeout(() => {
        registrationAlert.classList.remove('d-none');
    }, 3000);
} else {
    document.getElementById('user').classList.remove('d-none');
    let currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log(currentUser.name);
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('user-progress').textContent = currentUser.progress + "%";
}
});

/** Register User */
const registrationForm = document.getElementById('registration-form');
const registerModal = new bootstrap.Modal(document.getElementById('register-user'));
registrationForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name === '' || email === ''){
        document.getElementById('error-alert').classList.remove('d-none');
    }else {
        let newUser = {
            "name": name,
            "email": email,
            "progress": 0
        };

        localStorage.setItem('user', JSON.stringify(newUser));
        document.getElementById('register').classList.add('d-none');
        document.getElementById('user').classList.remove('d-none');
        let currentUser = JSON.parse(localStorage.getItem('user'));
        // Activate the checkbox
        let checks = document.getElementsByClassName('form-check-input');
for (const input of checks) {
    input.removeAttribute('disabled');
}
        document.getElementById('user-name').textContent = currentUser.name;
        document.getElementById('user-progress').textContent = currentUser.progress + "%";
        setTimeout(() => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            registerModal.hide();
        }, 1000);
    }
});

/** Update Percentage when marked complete */
window.addEventListener('click', (e)=>{
    let checkbox = e.target;
    if(checkbox.type === 'checkbox'){
        if(checkbox.checked){
            let id = checkbox.getAttribute('data-id');
            // Update progress in selected item
            let updateCurriculum = JSON.parse(localStorage.getItem('curriculum'));
            updateCurriculum[id].progress = true;
            console.log(curriculum);
            localStorage.setItem('curriculum', JSON.stringify(updateCurriculum));

            // Update percentage progress
            let updateUserProgress = JSON.parse(localStorage.getItem('user'));
            console.log(typeof(id));
            switch(id){
                case '0': 
                    updateUserProgress.progress += 10;
                    break;
                case '1': 
                    updateUserProgress.progress += 20;
                    break;
                case '2': 
                    updateUserProgress.progress += 10;
                    break;
                case '3': 
                    updateUserProgress.progress += 10;
                    break;
                case '4': 
                    updateUserProgress.progress += 10;
                    break;
                case '5': 
                    updateUserProgress.progress += 10;
                    break;
                case '6': 
                    updateUserProgress.progress += 10;
                    break;
                case '7': 
                    updateUserProgress.progress += 10;
                    break;
                case '8': 
                    updateUserProgress.progress += 10;
                    break;
            }
            console.log(updateUserProgress);
            localStorage.setItem('user', JSON.stringify(updateUserProgress));
            document.getElementById('user-progress').textContent = updateUserProgress.progress + "%";
        } else {
            let id = checkbox.getAttribute('data-id');
            // Update progress in selected item
            let updateCurriculum = JSON.parse(localStorage.getItem('curriculum'));
            updateCurriculum[id].progress = true;
            console.log(curriculum);
            localStorage.setItem('curriculum', JSON.stringify(updateCurriculum));

            // Update percentage progress
            let updateUserProgress = JSON.parse(localStorage.getItem('user'));
            console.log(typeof(id));
            switch(id){
                case '0': 
                    updateUserProgress.progress -= 10;
                    break;
                case '1': 
                    updateUserProgress.progress -= 20;
                    break;
                case '2': 
                    updateUserProgress.progress -= 10;
                    break;
                case '3': 
                    updateUserProgress.progress -= 10;
                    break;
                case '4': 
                    updateUserProgress.progress -= 10;
                    break;
                case '5': 
                    updateUserProgress.progress -= 10;
                    break;
                case '6': 
                    updateUserProgress.progress -= 10;
                    break;
                case '7': 
                    updateUserProgress.progress -= 10;
                    break;
                case '8': 
                    updateUserProgress.progress -= 10;
                    break;
            }
            console.log(updateUserProgress);
            localStorage.setItem('user', JSON.stringify(updateUserProgress));
            document.getElementById('user-progress').textContent = updateUserProgress.progress + "%";
        }
    }
})



/** Display curriculum items to user */
/** Add curriculum to local storage if it does not exist*/
        if(localStorage.getItem('curriculum') === null){
            localStorage.setItem('curriculum', JSON.stringify(curriculum))
        }

/** Retrieve curriculum items from local storage and display to webpage */
const items = JSON.parse(localStorage.getItem('curriculum'));

/** Display each item in the items array as table rows */
const table = document.getElementById('table-body');
items.map((item, index)=>{
    let itemNo = index + 1;
    let topic = item.topic;

    // Build details list
    let details = '<ul>';
    item.details.forEach(element => {
        details += `<li>${element}</li>`;
    });
    details += '</ul>';

    // Build resources list
    let resources = '<ul>';
    item.resource.forEach(element => {
        resources += `<li><a href="${element.url}" target="_blank">${element.name}</a></li>`
    });

    resources += '</ul>';

    // build goals list
    let goals = '<ul>';
    item.goals.forEach(element => {
        goals += `<li>${element}</li>`;
    });
    goals += '</ul>';

    // progress value
    let progress = item.progress;

    // table row item
    let tr = document.createElement('tr');
    tr.innerHTML += `
    <td>${itemNo}</td>
  <td>${topic}</td>
  <td>
      <ul>
        ${details}
      </ul>
  </td>
  <td>
    ${resources}
  </td>
  <td>
      ${goals}
  </td>
  <td>
      <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="complete_${index}" ${ progress ? "checked": ""} data-id="${index}">
          <label class="form-check-label" for="complete">
           Complete
          </label>
        </div>
  </td>
    `;
    table.appendChild(tr);
});

// console.log();
