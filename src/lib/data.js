export const code = {
  info: 
`   constructor(desireToWork, projects){
      super(desireToWork, projects);

      //important information I'm pretty sure
      this.name = 'Jared Mohney';
      this.title = 'Web Developer';
      this.location = 'Longmont, CO';
      this.skills = [ 'Javascript', 'React', 'Redux', 'CSS3', 'HTML5', 'Express', 'Node', ];
      this.description = \`\${this.name} is a full stack javascript developer with an interest in esports, chinchillas and bettering himself through challenging work.\`;
      this.github = 'http://www.github.com/dustwise';
      this.linkedIn = 'www.linkedin.com/in/jaredmohney';
      this.email = 'jared.mohney@gmail.com';

      //irrelevant?
      // this.favoriteMovies = [ 'Little Shop of Horrors', 'Aliens', 'There Will Be Blood', 'Terminator 2: Judgment Day', ];
      // this.favoriteGames = [ 'Shadow of the Colossus', 'Kingdom Hearts 2', 'Sonic The Hedgehog 3 & Knuckles', 'DOTA2', ];
    }`,
};

export const data = [
  {
    topCode:
`   {
      title: 'PogTracker',

      screenshots: [
`,
    bottomCode:
`     ],
      
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
    imgs: [require('../images/pogtracker-min.png'), require('../images/pogtracker-2.png')],
    links: {
      github: 'http://github.com/dustwise/proto-page',
      site: 'http://protopage.dustwise.com'
    }
  },

  {
    topCode:
`   {
      title: 'ProtoPage',

      screenshots: [
`,

    bottomCode: 
`   ],

      stack: [ 'React', 'Redux', 'Express', 'Node', 'Web Font Loader', ],

      features: [
        'Limit your search to popular fonts, the top 30% as determined by Google.',
        'Search for "sans-serif", "serif", "handwriting", "display" or "monospace".',
        'Lock in a font you like for header, subheader or paragraph, continue to randomize the rest!',
      ],

      description: \`Tired of copying and pasting font after font to "quickly" spice up your prototypes? I was too. 
      ProtoPage is a mock startup website with a secret, it can't really do what it says...deliver you meat over the internet. 
      That said, it DOES have a simple but intuitive control panel to quickly sort through all fonts available via Google Fonts. 
      Find a pairing you like, grab the code and get back to the fun stuff.\`,
    },`,
    imgs: [require('../images/protopage-min.png')],
    links: {
      github: 'http://github.com/dustwise/pogtracker',
      site: 'http://www.pogtracker.com'
    }
  },

  {
    code:
`   {
      title: 'Rocket Garage',

      stack: [],

      features: [

      ],

      screenshots: [],

      description: \`A new take on Rocket League trading.\`,
    }`,
    imgs: [require('../images/rocket-garage-cropped-2.png')],
    links: {
      github: 'http://www.github.com/dustwise/Rocket-Garage',
      site: 'http://www.github.com/dustwise/Rocket-Garage'
    }
  }
];
