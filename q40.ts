//q40Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
type Album = {
  artist: string;
  title: string;
  tracks?: number;
};

function makeAlbum(artist: string, title: string, tracks?: number): Album {
  let album: Album = {
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
