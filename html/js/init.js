var robotUtilsWrapper = function(){
  var ALMemory = null;

  var onConnected = function(session){
    log("connected");
    session.service("ALMemory").then(function (serv) {
        ALMemory = serv;
      },
      function(error){
        log("Unable to get the service ALMemory : " + error);
      });
    RobotUtils.subscribeToALMemoryEvent("template/changeBGColor", changeBGColor);
  };

  var onError = function(){
    log("Disconnected, or failed to connect :-(");
  };

  var init = function(){
    RobotUtils.connect(onConnected, onError); // async !
    return this;
  };

  return init();
};