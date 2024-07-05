"use strict";
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums and printing the results
let album1 = makeAlbum("Taylor Swift", "Fearless");
let album2 = makeAlbum("Adele", "25");
let album3 = makeAlbum("Ed Sheeran", "Divide");
console.log(album1);
console.log(album2);
console.log(album3);
// Creating an album with the number of tracks
let albumWithTracks = makeAlbum("Coldplay", "A Head Full of Dreams", 11);
console.log(albumWithTracks);
