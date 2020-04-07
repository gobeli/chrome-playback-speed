import { writable } from 'svelte/store';

const videoStore = writable([]);

const getCurrentTab = () => new Promise(resolve => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    resolve(tabs[0])
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_VIDEOS_DONE') {
    videoStore.set(request.payload);
  }
});

getCurrentTab().then(tab => {
  chrome.tabs.sendMessage(tab.id, { type: 'GET_VIDEOS' });
});

export const setSpeed = async (video) => {
  const tab = await getCurrentTab();
  chrome.tabs.sendMessage(tab.id, { type: 'SET_SPEED', payload: video });
}

export const videos = videoStore;