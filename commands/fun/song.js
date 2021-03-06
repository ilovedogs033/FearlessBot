const { MessageEmbed } = require("discord.js");

const taylorSongsByAlbum = [
  {
    title: "Taylor Swift",
    image: "https://i.imgur.com/w0bksSN.jpg",
    songs: [
      "Tim McGraw",
      "Picture to Burn",
      "Teardrops on My Guitar",
      "A Place in This World",
      "Cold As You",
      "The Outside",
      "Tied Together With a Smile",
      "Stay Beautiful",
      "Should've Said No",
      "Mary's Song",
      "Our Song",
      "I'm Only Me When I'm With You",
      "Invisible",
      "A Perfectly Good Heart",
    ],
  },
  {
    title: "Fearless",
    image: "https://i.imgur.com/TPL7mge.jpg",
    songs: [
      "Jump Then Fall",
      "Untouchable",
      "Forever and Always (piano)",
      "Come In With The Rain",
      "Superstar",
      "The Other Side of the Door",
      "Fearless",
      "Fifteen",
      "Love Story",
      "White Horse",
      "You Belong With Me",
      "Breathe",
      "Tell Me Why",
      "You're Not Sorry",
      "The Way I Loved You",
      "Forever and Always",
      "The Best Day",
      "Change",
    ],
  },
  {
    title: "Speak Now",
    image: "https://i.imgur.com/TNKbt8Y.jpg",
    songs: [
      "Mine",
      "Sparks Fly",
      "Back to December",
      "Speak Now",
      "Dear John",
      "Mean",
      "The Story of Us",
      "Never Grow Up",
      "Enchanted",
      "Better Than Revenge",
      "Innocent",
      "Haunted",
      "Last Kiss",
      "Long Live",
      "Ours",
      "If This Was A Movie",
      "Superman",
    ],
  },
  {
    title: "Red",
    image: "https://i.imgur.com/as6dlgi.jpg",
    songs: [
      "State of Grace",
      "Red",
      "Treacherous",
      "I Knew You Were Trouble",
      "All Too Well",
      "22",
      "I Almost Do",
      "We Are Never Ever Getting Back Together",
      "Stay Stay Stay",
      "The Last Time",
      "Holy Ground",
      "Sad Beautiful Tragic",
      "The Lucky One",
      "Everything Has Changed",
      "Starlight",
      "Begin Again",
      "The Moment I Knew",
      "Come Back... Be Here",
      "Girl At Home",
    ],
  },
  {
    title: "1989",
    image: "https://i.imgur.com/i1QDoZR.jpg",
    songs: [
      "Welcome To New York",
      "Blank Space",
      "Style",
      "Out of the Woods",
      "All You Had To Do Was Stay",
      "Shake it Off",
      "I Wish You Would",
      "Bad Blood",
      "Wildest Dreams",
      "How You Get the Girl",
      "This Love",
      "I Know Places",
      "Clean",
      "Wonderland",
      "You Are In Love",
      "New Romantics",
    ],
  },
  {
    title: "reputation",
    image: "https://i.imgur.com/o2v3b7E.jpg",
    songs: [
      "...Ready For It?",
      "End Game",
      "I Did Something Bad",
      "Don't Blame Me",
      "Delicate",
      "Look What You Made Me Do",
      "So It Goes...",
      "Gorgeous",
      "Getaway Car",
      "King of My Heart",
      "Dancing With Our Hands Tied",
      "Dress",
      "This Is Why We Can't Have Nice Things",
      "Call It What You Want",
      "New Year's Day",
    ],
  },
  {
    title: "Lover",
    image: "https://i.imgur.com/cNnUR0M.jpg",
    songs: [
      "I Forgot That You Existed",
      "Cruel Summer",
      "Lover",
      "The Man",
      "The Archer",
      "I Think He Knows",
      "Miss Americana & The Heartbreak Prince",
      "Paper Rings",
      "Cornelia Street",
      "Death By A Thousand Cuts",
      "London Boy",
      "Soon You'll Get Better",
      "False God",
      "You Need to Calm Down",
      "Afterglow",
      "ME!",
      "It's Nice to Have A Friend",
      "Daylight",
    ],
  },
  {
    title: "folklore",
    image: "https://i.imgur.com/oZvDEky.jpg",
    songs: [
      "the 1",
      "cardigan",
      "the last great american dynasty ",
      "exile",
      "my tears ricochet",
      "mirrorball",
      "seven",
      "august",
      "this is me trying",
      "illicit affairs",
      "invisible string",
      "mad woman",
      "epiphany",
      "betty",
      "peace",
      "hoax",
      "the lakes",
    ],
  },
  {
    title: null,
    image: null,
    songs: [
      "I Heart ?",
      "Safe and Sound",
      "Eyes Open",
      "Today Was a Fairytale",
      "Sweeter Than Fiction",
      "Ronan",
      "Only the Young",
      "Christmas Tree Farm",
    ],
  },
];

exports.run = function (message, args, bot, db) {
  let album =
    taylorSongsByAlbum[Math.floor(Math.random() * taylorSongsByAlbum.length)];
  let song = album.songs[Math.floor(Math.random() * album.songs.length)];
  let albumTitle = album.title;
  let embed = new MessageEmbed().setTitle("Random Song");
  let text = "You should listen to " + song;
  text += album.title !== null ? " from " + album.title + "." : ".";
  embed.setDescription(text);
  if (album.image !== null) {
    embed.setThumbnail(album.image);
  }
  message.channel.send("", embed);
};
