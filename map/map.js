import quests from '../data/data.js';
import makeListItemLink from './make-list-item-link.js';

const ul = document.getElementById('link-list');

const user = JSON.parse(localStorage.getItem('USER'));

quests.forEach((quest) => {
    const li = makeListItemLink(quest);

    const questId = quest.id;

    if (user.completed[questId]) {
        li.style.background = 'red';
    }

    ul.appendChild(li);
});

