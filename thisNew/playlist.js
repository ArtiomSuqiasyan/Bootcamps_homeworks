function Playlist(song) {
  let index = 0;
  isPlaying = false;
  songsArr = [];
  this.Add = function add() {
    songsArr = [...song];
  };
  this.Play = function play() {
    index = songsArr.indexOf(song) + 1;
    isPlaying = true;
    return `${songsArr[index]} started to play`;
  };
  this.Stop = function stop() {
    index = songsArr.indexOf(song) + 1;
    isPlaying = false;
    return ` ${songsArr[index]} stopped to play`;
  };
  this.Next = function next() {
    index = songsArr.indexOf(song) + 1;
    index++;
    return `${songsArr[index]} started to play`;
  };
}
let soad = ["Aerials", "Toxicity", "Chop Suey"];
let songs = new Playlist(soad);
songs.Add(soad);
console.log(songs.Play());
console.log(songs.Stop());
console.log(songs.Next());
