import { writable } from 'svelte/store';

const videoStore = writable([]);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_VIDEOS_DONE') {
    videoStore.set(request.payload);
  }
});

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { type: 'GET_VIDEOS' });
})

export const videos = videoStore;