const projectsData = {
  protoPage : {
    title : "ProtoPage",
    features : ["Mobile First", " | ", "React",  " | ", "Redux",  " | ", "Google Fonts API"],
    description : ` Tired of your prototypes lacking pizazz but don't want to spend the time finding compatible fonts? 
                    Quickly randomize through Google fonts on our (totally legit, wireless meat provider) prototype page, 
                    lock in the ones you like and find those pairings in a fraction of the time!`,
    image : './images/protopage-cropped.png',
    right: true,
    imagePlacement : `
      top: -180px;
      left: 0;
    `
  },
  pogTracker : {
    title : "PogTracker",
    features : ["MongoDB", " | ", "React Router 4", " | ", "React",  " | ", "Redux",  " | ", "Twitch API", " | ", "AWS"],
    description : ` Using the power of Twitch Chat emotes, we provide the top highlights from any broadcast replay.
                    Looking for the best FailFish moments? We got you covered. Subscriber emotes included!
                    All data is stored for future users, delivered to them instantly. The best news? The bigger
                    the stream, the better the results. Never miss a PogChamp moment again.`,
    image : './images/pogtracker-min-2.png',
    right: false,
    imagePlacement : `
      top: -100;
      right: -270px;
    `
  },
  rocketGarage : {
    title : "RocketGarage",
    features : ["PostgreSQL", " | ", "React Router 4", " | ", "React",  " | ", "Redux",  " | ", "Twitch API"],
    description : `Reimagining the online trading marketplace, Rocket Garage is the world's first fully mobile-responsive Rocket League trading website.
                    With features made to make your trades easier and more successful, set up your garage with key-priced items, post your item-to-item deals 
                    and use our live frontpage application for real-time trading. Say goodbye to forums and lackluster trading platforms!`,
    image : './images/rocket-cropped.png',
    right: true,
    imagePlacement : `
      top: 0;
      left: -200px;
    `
  }
};

export default projectsData;