export const code = 
`class JaredMohney extends Developer {
  constructor(desireToWork, projects){
    super(desireToWork, projects);

    //important information I'm pretty sure
    this.name = "Jared Mohney";
    this.title = "Web Developer";
    this.location = "Longmont, CO";
    this.skills = ['Javascript', 'React', 'Redux', 'CSS3', 'HTML5', 'Express', 'Node'];
    this.description = \`\${this.name} is a full stack javascript developer with an interest in esports, chinchillas and bettering himself through challenging work.\`;
    this.github = "http://www.github.com/dustwise";
    this.linkedIn = "www.linkedin.com/in/jaredmohney";
    this.email = "jared.mohney@gmail.com"

    //irrelevant?
    // this.favoriteMovies = ["Little Shop of Horrors", "Aliens", "There Will Be Blood", "Terminator 2: Judgment Day"];
    // this.favoriteGames = ["Shadow of the Colossus", "Kingdom Hearts 2", "Sonic The Hedgehog 3 & Knuckles", "DOTA2"];
  }
}`;