function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NNf3YafgWK":
        Script1();
        break;
      case "6aodIoqFDbb":
        Script2();
        break;
      case "6jmDVfGfV7U":
        Script3();
        break;
      case "66d61v0xP5X":
        Script4();
        break;
      case "6SzAobN07jC":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
};
