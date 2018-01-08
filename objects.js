var playlist = {artist:"song"};

function updatePlaylist(playlist,artist,song){
  Object.assign(palylist,artist,song)
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist.artist
  return playlist
}

