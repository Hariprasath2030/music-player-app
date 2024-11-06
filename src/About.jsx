import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About this HP Music Player</h1>
      <div className='container'>

      <p>Music is the arrangement of sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content.
         Music is generally agreed to be a cultural universal that is present in all human societies. 
         Definitions of music vary widely in substance and approach.
         Music often plays a key role in social events and religious ceremony.
          The techniques of making music are often transmitted as part of a cultural tradition. 
          Music is played in public and private contexts, highlighted at events such as festivals and concerts for various different types of ensembles.
           Music is used in the production of other media, such as in soundtracks to films, TV shows, operas, and video games.Nowadays, the growth of digital platforms has led to the development of music apps. These apps provide users with access to songs and personalized recommendations right on their mobile phone or computer. Everyone seems to applaud such industry giants as Spotify, Wynk, or Apple Music.</p>

        {/* Images Section */}
        <div className="images">
          <img src="../public/photo/spotify.png" alt="Music scene 1" />
          <img src="../public/photo/appple.png" alt="Music scene 2" />
          <img src="../public/photo/Wynk.jpg" alt="Music scene 3" />
        </div>
    </div>
      </div>
  );
};

export default About;
