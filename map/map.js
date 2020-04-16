import quests from '../data/data.js';
import makeListItemLink from './make-list-item-link.js';

const ul = document.getElementById('link-list');

quests.forEach((quest) => {
    const li = makeListItemLink(quest);

    ul.appendChild(li);
});

