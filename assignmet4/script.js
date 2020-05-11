 var names= ["Yakov","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];

 for(var i=0;i<names.length;i++)
 {var name=names[i];

     if(names[i].charAt(0)==="J")
     {byeSpeaker.speak(name);

     }
     
     else
     {
        helloSpeaker.speak(name);
     }
    
 }
