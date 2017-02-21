var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var idKey in library.playlists) {
    var name = library.playlists[idKey].name
    var tracksLength = library.playlists[idKey].tracks.length
    console.log(idKey + ": " + name + " - " + tracksLength + " tracks");
  }
}
//printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var idKey in library.tracks) {
    var name = library.tracks[idKey].name
    var artist = library.tracks[idKey].artist
    var album = library.tracks[idKey].album
    console.log(idKey + ": " + name + " by " + artist + " (" + album + ") ");
  }
}
//printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var name = library.playlists[playlistId].name
  var tracksLength = library.playlists[playlistId].tracks.length
  console.log(playlistId + ": " + name + " - " + tracksLength + " tracks");
  var songs = library.playlists[playlistId].tracks
  for (var i = 0; i < songs.length; i++){
    console.log(songs[i] + ": " + library.tracks[songs[i]].name + " by " + library.tracks[songs[i]].artist + " (" + library.tracks[songs[i]].album + ")");
  }
}

printPlaylist("p01")


// printPlaylist("p01")

// adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {
  if(!(library.playlists[playlistId].tracks.includes(trackId))){
    library.playlists[playlistId].tracks.push(trackId);
  }
  console.log(library.playlists[playlistId]);
}

//addTrackToPlaylist("t02", "p01")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var utid = uid();
  library.tracks[utid] = {};
  library.tracks[utid].name = name;
  library.tracks[utid].artist = artist;
  library.tracks[utid].album = album;
  console.log(library.tracks);
}

//addTrack("song", "singer", "debut");
// adds a playlist to the library

var addPlaylist = function (name) {
  var upid = uid();
  library.playlists[upid] = {};
  library.playlists[upid].name = name;
  console.log(library.playlists);
}

// addPlaylist("awesome playlist");
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}