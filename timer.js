function CustomTimer(){
    var startTime = null;
    var endTime = null;
    var time = 0;
    var isRunning = false;

    this.start = function (){
        if (isRunning){
            return;
        }
        startTime = Date.now();
        isRunning = true;
    }

    this.stop = function (){
        if (!isRunning){
            return;
        }
        endTime = Date.now();
        time = (endTime - startTime)/1000;
        isRunning = false;
    }

    this.reset = function (){
        startTime = null;
        endTime = null;
        time = 0;
        isRunning = false;
    }
    Object.defineProperty(this,'time',{
     get: function (){
         return time;
     },
     set: function (e){
         if (typeof  e !== "number"){
             throw new Error('This is not valid type');
         }
        return time;
     }
    })
};

var myTimer = new CustomTimer();
