'use strict';


//Object descruction
const sessions = [
  {
    session_title: 'ES2030: A Preview',
    session_presenter: 'Titus Wong',
    session_day: 'Thursday',
    session_start: '12:30',
    session_end: '2:00',
    session_summary: 'It\'s always something, but for 2030, it\'s a lot more!',
  },
  {
    session_title: 'Structure Without Structure',
    session_presenter: 'Shelby Ingersoll',
    session_day: 'Wednesday',
    session_start: '9:30',
    session_end: '11:00',
    session_summary: 'Destructuring is like that grade school bully who became your high school bestie',
  },
  {
    session_title: 'Keep it classy?',
    session_presenter: 'Vineet Taylor & Lela Martinez',
    session_day: 'Thursday',
    session_start: '4:00',
    session_end: '5:30',
    session_summary: 'Debate: Are classes the best thing ever, or just plain unnecessary? Note: We will provide tomatoes to throw!',
  }
];

const template = ({ session_title: title, session_presenter: presenter, session_day: day, session_start: start, session_end: end, session_summary: summary }) => (
  `<div class='session'>
     <p class='title'>${title}</p>
     <p><span class='label'>Time: </span>${day} ${start} - ${end}</p>
     <p><span class='label'>Presenter: </span>${presenter}</p>
     <p>${summary}</p>
   </div>`
);

let content = '';
sessions.forEach((session) => {
  content += (template(session));
});

console.log(content);
