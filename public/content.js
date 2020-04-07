chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_VIDEOS') {
    const videos = document.querySelectorAll('video');
    chrome.runtime.sendMessage({
      type: 'GET_VIDEOS_DONE',
      payload: [...videos].map((v, index) => ({
        index, playbackRate: v.playbackRate
      }))
    });
  }
  if (request.type === 'SET_SPEED') {
    videos[request.payload.index].playbackRate = request.playbackRate;
  }
});