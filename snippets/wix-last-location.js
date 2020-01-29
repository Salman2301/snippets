
///////////// in SITE CODE /////////////
import wixLocation from "wix-location";
import {local} from 'wix-storage';

function storeURL() {
    const historyURL = "historyURL";
    let currUrl = wixLocation.url;
    let allUrl = local.getItem(historyURL) || '[]';
    allUrl = JSON.parse(allUrl);
    local.setItem("lastURL", allUrl[0] ? allUrl[0] : "/");
    allUrl.unshift(currUrl);
    allUrl.length = 2;
    local.setItem(historyURL, JSON.stringify(allUrl));
}

storeURL();
////////////////// END OF CODE ///////////

// HOW TO USE
// You can get the last Url visited by the user from the local storage
// to get the last url

import {local} from 'wix-storage';

console.log(local.getItem("lastURL")); // https://domain.com/last-visited-url
