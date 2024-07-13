const pattern1 = "<all_urls>"
const pattern2 = "*://*tumblr*/*"

const filter = {
    urls: [pattern1, pattern2]
}

function listener(tabId, changeInfo, tabInfo){
    if (tabInfo.title){

      if (/[(){}[\]][0-9]+.?[(){}[\]]/g.test(tabInfo.title)) {
        console.log("status: ", /[(){}[\]][0-9]+.?[(){}[\]]/g.test(tabInfo.title))
        let executing = browser.tabs.executeScript(
          tabId,                 // optional integer
          {file: "/quiet_ur_title_pls.js"}                // object
        )
      }
    }
}

browser.tabs.onUpdated.addListener(
    listener,
    filter
);
