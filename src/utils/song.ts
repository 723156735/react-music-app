import axios from 'axios';

export const fetchSong = async (songId: number) => {
  const {
    data: {
      data: [currentSong]
    }
  } = await axios(`/song/url?id=${songId}`);
  const { id, url } = currentSong;
  const {
    data: {
      songs: [currentSongInfo]
    }
  } = await axios(`/song/detail?ids=${songId}`);
  const {
    name,
    al: { name: albumName, picUrl },
    ar: [singer]
  } = currentSongInfo;
  const { id: singerId, name: singerName } = singer;
  const {
    data: {
      lrc: { lyric },
      tlyric: { lyric: translateLyric }
    }
  } = await axios(`/lyric?id=${songId}`);
  return {
    id,
    name,
    url,
    albumName,
    picUrl,
    singerId,
    singerName,
    lyric,
    translateLyric
  };
};