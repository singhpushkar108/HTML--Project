const os=require('os');

const platform=os.platform();
const release=os.release();

console.log("OS platform: "+platform);
console.log("OS release: "+ release);