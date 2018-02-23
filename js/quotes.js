/*jshint esversion: 6 */
let quotes = [
  "'The Way Get Started Is To Quit Talking And Begin Doing.' -Walt Disney",
  "'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.' -Winston Churchill",
  "'Don’t Let Yesterday Take Up Too Much Of Today.' - Will Rodgers",
  "'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.' - Og Mandino",
  "'Whether You Think You Can Or Think You Can’t, You’re Right.' - Henry Ford",
  "'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.' - Hellen Keller",
  "'The Man Who Has Confidence In Himself Gains The Confidence Of Others.' -Hasidic Proverb",
  "'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.' - Franklin D. Roosevelt",
  "'Creativity Is Intelligence Having Fun.' - Albert Einstein",
  "'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.' - C.S. Lewis"
];

function newQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById("motivation").innerHTML = quotes[randNum];
}
