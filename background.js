// const contextMenus = {};

// // creates contextMenu
// contextMenus.createPomCounter = chrome.contextMenus.create(
//   {"title": "Pomodoro Counter"},
//   // checks for errors
//   () => {
//     if (chrome.runtime.lastError) {
//       console.log(chrome.runtime.lastError.message);
//     }
//   }
// );


// // 
// const contextMenuHandler = (info, tab) => {
//   if (info.menuItemId === contextMenus.createPomCounter) {
//     chrome.tabs.executeScript({
//       file: "popup.js"
//     });
//   }
// }


// // listens for click event on menu icon
// chrome.contextMenus.onClicked.addListener(contextMenuHandler);


