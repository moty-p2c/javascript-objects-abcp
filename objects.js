var playlist = {bob:"mysong"};

function updatePlaylist(mylist,artist,song){
  Object.assign(playlist,artist,song)
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist.artist
  return playlist
}

