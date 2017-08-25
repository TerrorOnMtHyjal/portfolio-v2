export const code = {
  info: 
`class JaredMohney extends Developer {
constructor(desireToWork, projects){
super(desireToWork, projects);

this.name = 'Jared Mohney';
this.title = 'Web Developer';
this.location = 'Longmont, CO';
this.skills = [ 'Javascript', 'React', 'Redux', 'Express', 'Node', 'PostgreSQL', 'MongoDB', ];
this.description = \`\${this.name} is a full stack javascript \${this.title} with an interest in esports, chinchillas and bettering himself through challenging work.\`;

this.links: [
  

];
}
}`,
  links: [
    {
      icon: "fa fa-github",
      url: "www.github.com/dustwise"
    },
    {
      icon: "fa fa-linkedin-square",
      url: "www.linkedin.com/in/jaredmohney"
    },
    {
      icon: "fa fa-envelope",
      url: "jared.mohney@gmail.com"
    },
  ]
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
      github: 'www.github.com/dustwise/proto-page',
      site: 'www.protopage.dustwise.com'
    }
  },

  {
    code:
`{

title: 'ProtoPage',

screenshots: [

],

stack: [ 'React', 'Redux', 'Google Fonts API', 'Web Font Loader', 'Styled Components'],

features: [
'- Randomize through Google Fonts limiting by font type (sans-serif, handwriting, etc.) per element.',
'- Instantly get a feel for what pairings would look like on the totally real cloud-delivered meat startup page'
'- Look through all available font variants, per font. 100 italic? 900 regular? We got you!',
'- Limit your search to popular fonts, the top 30% per category as determined by Google',
'- Find a font you like? Lock it in and continue to randomize the other elements',
'- Got your fonts? Grab your css and get back to the fun stuff',
]

},`,
    imgs: [require('../images/protopage-min.png')],
    links: {
        github: 'www.github.com/dustwise/proto-page',
        site: 'www.protopage.dustwise.com'
    }
  }
];
