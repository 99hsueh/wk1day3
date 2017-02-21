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
             },
  printPlaylists: function () {
    for (var idKey in this.playlists) {
      var name = this.playlists[idKey].name
      var tracksLength = this.playlists[idKey].tracks.length
      console.log(idKey + ": " + name + " - " + tracksLength + " tracks");
    }
  },
  printTracks: function () {
    for (var idKey in this.tracks) {
     var name = this.tracks[idKey].name
     var artist = this.tracks[idKey].artist
     var album = this.tracks[idKey].album
     console.log(idKey + ": " + name + " by " + artist + " (" + album + ") ");
    }
  },
  printPlaylist: function (playlistId) {
    var name = library.playlists[playlistId].name
    var tracksLength = library.playlists[playlistId].tracks.length
    console.log(playlistId + ": " + name + " - " + tracksLength + " tracks");
    var songs = library.playlists[playlistId].tracks
    for (var i = 0; i < songs.length; i++){
      console.log(songs[i] + ": " + library.tracks[songs[i]].name + " by " + library.tracks[songs[i]].artist + " (" + library.tracks[songs[i]].album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
   if(!(this.playlists[playlistId].tracks.includes(trackId))){
      this.playlists[playlistId].tracks.push(trackId);
    }
    console.log(this.playlists[playlistId]);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var utid = this.uid();
    this.tracks[utid] = {};
    this.tracks[utid].name = name;
    this.tracks[utid].artist = artist;
    this.tracks[utid].album = album;
    console.log(this.tracks);
  },
  addPlaylist: function (name) {
    var upid = this.uid();
    this.playlists[upid] = {};
    this.playlists[upid].name = name;
    console.log(this.playlists);
  }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist("p01")

// adds an existing track to an existing playlist
library.addTrackToPlaylist("t02", "p01")

// generates a unique id
// (use this for addTrack and addPlaylist)


// adds a track to the library
library.addTrack("song", "singer", "debut");

// adds a playlist to the library
library.addPlaylist("awesome playlist");
