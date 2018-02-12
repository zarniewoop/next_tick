var fs = require("fs");
fs.stat("next_tick.js", function(err, stats){
    if(stats) {console.log("next_tick.js exists"); }    
});
setImmediate(function(){
    console.log("immediate timer 1 executed");
});
setImmediate(function(){
    console.log("immediate timer 2 executed");
});
process.nextTick(function(){
    console.log("nex tick 1 executed");
});
process.nextTick(function(){
    console.log("nex tick 2 executed");
});
