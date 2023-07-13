// // //40.
// function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
//   const album: Record<string, any> = {
//     artist: artist,
//     title: title
//   };
//   if (tracks !== undefined) {
//     album.tracks = tracks;
//   }
//   return album;
// }
// const album1 = make_album("Artist 1", "Album 1");
// const album2 = make_album("Artist 2", "Album 2", 10);
// const album3 = make_album("Artist 3", "Album 3", 15);
// console.log(album1);
// console.log(album2);
// console.log(album3);
function make_album(artist, title) {
    var tracks = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        tracks[_i - 2] = arguments[_i];
    }
    var album = {
        "artist": artist,
        "title": title
    };
    if (tracks.length > 0) {
        album['tracks'] = tracks;
    }
    return album;
}
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2", 10);
var album3 = make_album("Artist 3", "Album 3", 15);
console.log(album1);
console.log(album2);
console.log(album3);
