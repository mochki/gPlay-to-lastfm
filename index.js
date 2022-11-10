const fs = require("fs-extra");
require("dotenv").config();

/*
// This first
const PlayMusic = require('playmusic');
(function() {
  const pm = new PlayMusic();
  pm.init({email: process.env.email, password: process.env.password}, () => {
    
    // Change according to your library size
    pm.getAllTracks({ limit : 2000 }, async (_, lib) => {
      const songs = lib.data.items;
      const playedSongs = songs.filter(({playCount}) => playCount > 0);
      await fs.writeFile('playedSongs.json', JSON.stringify(playedSongs));
    })
  });
})();
*/

/*
// Clean up playedSongs a bit
const playedSongs = require('./playedSongs.json');
debugger;
(async function() {
  await fs.writeFile('cleanedUp.json', JSON.stringify(playedSongs.map(({artist, album, title, playCount}) => ({artist, album, title, playCount}))));
})();
*/

/*
const rawSongs = require("./cleanedUp.json");

(async function() {
  const songs = [];
  rawSongs.map(({ artist, title, playCount }) => {
    do {
      songs.push({
        artist,
        title,
        timestamp:
          Math.floor(new Date().getTime() / 1000) -
          Math.floor(Math.random() * 100000)
      });
      --playCount;
    } while (playCount > 0);
  });

  await fs.writeFile('actualSource.json', JSON.stringify(songs));
})();
*/

/*
// LastFM
const songs = require("./actualSource.json");
const LastfmAPI = require("lastfmapi");
const lfm = new LastfmAPI({
  api_key: process.env.LAST_FM_API_KEY,
  secret: process.env.LAST_FM_SECRET
});

lfm.setSessionCredentials(
  process.env.LAST_FM_USERNAME,
  process.env.LAST_FM_SESSION_KEY
);

(function() {
  const base = Number(process.argv[2]);
  const payload = songs.slice(base, base+50);
  lfm.track.scrobble(payload, (err, scrobbles) => {
    if (err) { return console.log(err); }
    console.log(`${scrobbles.scrobble.filter(_ => _.ignoredMessage.code === '1').length} failed`)
  });
})();
*/