//import quest data
import quests from '../data/data.js';

//import findById function
import { findById } from '../utils/utils.js';

// define a new variable for the search bar parameters
const params = new URLSearchParams(window.location.search);

// define a variable for the quest id, and get that id from the search params using our params variable
const questId = params.get('id');

// use the questId and the quests data array in our findById function to find the id of a particulr quest and set it to a variable
const quest = findById(quests, questId);

// use document.querySelector to add the stringified quest data to the window body to be sure it's working
document.querySelector('body').append(JSON.stringify(quest));

const img = document.querySelector('img');
const h3 = document.querySelector('h3');
const div = document.querySelector('div');
const form = document.querySelector('form');

img.src = '../assets/quests/' + quest.image;
h3.textContent = quest.title;
div.textContent = quest.description;

// const label1 = labels[0];
// const label2 = labels[1];
// const label3 = labels[2];

// label1.append(quest.choices[0].description);
// label2.append(quest.choices[1].description);
// label3.append(quest.choices[2].description);

const labels = document.querySelectorAll('label');
const radios = document.querySelectorAll('input');

for (let i = 0; i < quest.choices.length; i++) {
    labels[i].append(quest.choices[i].description);
    radios[i].value = quest.choices[i].id;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const choiceId = data.get('quest');
    const choices = quest.choices;

    const choice = findById(choices, choiceId);
    console.log(choice);

    const user = JSON.parse(localStorage.getItem('USER'));

    user.hp = user.hp + choice.hp;
    user.gold = user.gold + choice.gold;
    user.completed[quest.id] = true;

    localStorage.setItem('USER', JSON.stringify(user));
});

// for (let i = 0; i < quest.choices.length; i++) {
//     radios[i].value = quest.choices[i].id;
// }

