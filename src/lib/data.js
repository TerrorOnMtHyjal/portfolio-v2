export const code = {
  info: 
`   constructor(desireToWork, projects){
    super(desireToWork, projects);

    this.name = 'Jared Mohney';
    this.title = 'Web Developer';
    this.location = 'Longmont, CO';
    this.skills = [ 'Javascript', 'React', 'Redux', 'CSS3', 'HTML5', 'Express', 'Node', ];
    this.description = \`\${this.name} is a full stack javascript developer with an interest in esports, chinchillas and bettering himself through challenging work.\`;
    this.github = 'http://www.github.com/dustwise';
    this.linkedIn = 'www.linkedin.com/in/jaredmohney';
    this.email = 'jared.mohney@gmail.com';

    }`,
};

export const comments = `
  //important information I'm pretty sure
  //irrelevant?
  // this.favoriteMovies = [ 'Little Shop of Horrors', 'Aliens', 'There Will Be Blood', 'Terminator 2: Judgment Day', ];
  // this.favoriteGames = [ 'Shadow of the Colossus', 'Kingdom Hearts 2', 'Sonic The Hedgehog 3 & Knuckles', 'DOTA2', ];
`;

export const data = [
  {
    code:
`{
title: 'PogTracker',

screenshots: [

],
      
stack: [ 'React', 'Redux', 'Twitch API', 'React Router 4', 'MongoDB', 'AWS', 'Dokku', ],

features: [
'- Utilizes multiple Twitch APIs to gather channel and replay chat data of a provided broadcast replay',
'- Scans data for emote usage and generates timestamps for bursts of individual emotes',
'- Frontend converts timestamps to buttons, integrated with twitch embedded player',
'- The more active the chat, the better the results. Can easily handle a chat with tens of thousands of users.',
'- Provides all default emotes for each replay as well as subscriber emotes for partnered channels.',
'- Saves relevant generated data for instant delivery to future users with MongoDB',
]
},`,
    imgs: [require('../images/pogtracker-min.png'), require('../images/pogtracker-2.png'), ],
    links: {
      github: 'http://github.com/dustwise/proto-page',
      site: 'http://protopage.dustwise.com'
    }
  },
];
