const projectsData = {
  protoPage : {
    title : "ProtoPage",
    features : ["MOBILE FIRST", "REACT", "REDUX", "GOOGLE FONTS API"],
    description : ` Tired of your prototypes lacking pizazz but don't want to spend the time finding compatible fonts? 
                    Quickly randomize through Google fonts on our (totally legit, wireless meat provider) prototype page, 
                    lock in the ones you like and find those pairings in a fraction of the time!`,
    image : './images/protopage-cropped.png',
    right: true,
    imagePlacement : "0%",
    githubLink : ''
  },
  pogTracker : {
    title : "PogTracker",
    features : ["MONGODB", "REACT ROUTER 4", "REACT",  "REDUX",  "TWITCH API", "AWS"],
    description : ` Using the power of Twitch chat emotes, we provide the top highlights from any broadcast replay.
                    Looking for the best FailFish moments? We got you covered. Subscriber emotes included!
                    All data is stored for future users, delivered to them instantly. The best news? The bigger
                    the stream, the better the results. Never miss a PogChamp moment again.`,
    image : './images/pogtracker-min-2.png',
    right: false,
    imagePlacement : "80%"
  },
  rocketGarage : {
    title : "RocketGarage",
    features : ["POSTGRESQL", "REACT ROUTER 4", "REACT",  "REDUX",  "TWITCH API"],
    description : `Rocket Garage is the world's first fully mobile-friendly Rocket League trading platform. Make your trades easier and 
                    more successful, using the garage system and our live frontpage application. Say goodbye to forums and lackluster 
                    trading websites!`,
    image : './images/rocket-cropped.png',
    right: true,
    imagePlacement : "49%"
  }
};

export default projectsData;