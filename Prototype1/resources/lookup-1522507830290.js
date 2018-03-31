(function(window, undefined) {
  var dictionary = {
    "edfd7060-1374-481a-96f0-1feabb1a2a5d": "Upcoming Events",
    "ef3d40c1-9f87-4c3c-8a53-cebbd4d2261d": "Sign Up~ Vendor",
    "9223bd5f-cd7a-4498-90b5-3a7cfb447755": "Sign Up Page ~ Participant",
    "0740350f-2181-4257-9cf9-59b7dd9a59bb": "Login Page~ Participant",
    "74b5b120-b8dd-4ade-a080-73cb54d20681": "Loading Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);