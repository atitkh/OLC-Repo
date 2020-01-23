// -----JS CODE-----

// @input SceneObject texture

// @input SceneObject teleport


global.behaviorSystem.addCustomTriggerResponse("close", close);
global.behaviorSystem.addCustomTriggerResponse("far", far);
var delayedEvent = script.createEvent("DelayedCallbackEvent");

function close()
{
 script.texture.enabled = true;
  
    global.behaviorSystem.sendCustomTrigger("close_on");
    print("Close On");
    
    
    
delayedEvent.bind(function(eventData)
{
   script.teleport.enabled = false;
        
});
   
    delayedEvent.reset(1.5);
script.teleport.enabled = true;
   
    

}

function far()
{
    script.texture.enabled = false;
 
    global.behaviorSystem.sendCustomTrigger("far_on");
   print("Far On");
    
    delayedEvent.bind(function(eventData)
{
   script.teleport.enabled = false;
});
   
    delayedEvent.reset(1);
script.teleport.enabled = true;
    
    
}