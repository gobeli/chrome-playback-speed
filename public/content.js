const getVideos = () => {
  const videos = document.querySelectorAll('video');
  chrome.runtime.sendMessage({
    type: 'GET_VIDEOS_DONE',
    payload: [...videos].map((v, index) => ({
      index, playbackRate: v.playbackRate
    }))
  });
}

const setSpeed = video => {
  const videos = document.querySelectorAll('video');
  videos[video.index].playbackRate = video.playbackRate;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'GET_VIDEOS':
      getVideos();
      break;
    case 'SET_SPEED':
      setSpeed(request.payload);
      break;
    default:
      console.error('Request unsucessfull: ', request);
  }
});