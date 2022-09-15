
# Aamal holding - Jaipur

## 1. Code Explantion

The first line of the code will always be

function onMessageReceive()

This function is called whenever the first message of the session is passed



```
 function onMessageReceive() {
    return $.reply({
        text: {
            body: "Welcome to Jaipur Restaurant. Please select the language:"
        },
        options: {
            buttons: ["عربى", "English"]
        }
    }).listen({
        text: "عربى",
        handler: arabicHandler //If answer is "Good"
    }, {
        text: "English",
        handler: englishHandler //If answer is "Bad"
    }, otherHandle); // If answer is none of the above, this is default handler
}
```
`$.reply({})`
It is a function used to give reply to the user and has the attribute text

`text: { body:{}, options:{} }`
The text attribute contains body where the body of the message to be sent is specified. And the options contain the buttons which need to be displayed along with the message.

`.listen({})`
listen is a special function that checks the input text of the user and assigns various tasks to it. It has two attributes namely text and handler.

`handler:`
As you can see in the above code, after any button is selected the various handlers are being called. These handlers are the functions which have their own specific tasks. While there are speicific texts for specific handlers to be passed, if none of the given texts are passed, otherHandle will be called.

now lets look at the handlers section

```function arabicHandler() {
    $.reply({
        body: "Hi, I am good how are you?"
    });
}

function englishHandler() {
     $.reply({
        template: {
        code: "menu_jaipur",
    
        lang: "en_US"
  }

    }).listen({
        text: "New Order",
        handler: neworderhandler //If answer is "Good"
    }, {
        text: "Edit Order",
        handler: connecttoagenthandler //If answer is "Bad"
    }, {
        text: "Order Follow Up",
        handler: connecttoagenthandler
    }, {
        text: "Our Catering",
        handler: ourCateringhandler
    }, {
        text: "Working Hours",
        handler: workinghourshandler
    }, {
        text: "Help",
        handler: connecttoagenthandler
    });
}

function otherHandle() {
     $.reply({
        text: {
            body: ` ${inbound.getText()} is a invalid input.` // Read Customer input
        }
    });
}

function neworderhandler() {
     $.reply({
         template: {
        code: "new_order",
    
        lang: "en_US"
  }

    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

function connecttoagenthandler() {
    $.reply({
       template: {
        code: "connect_to_agent_jaipur",
    
        lang: "en_US"
  }

    });
    $.route.to.team("online_team");

}

function ourCateringhandler() {
    return $.reply({
        template: {
        code: "our_catering_jaipur",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

async function workinghourshandler() {
     let {hours} = await $.store.global('hours');
    

    return $.reply({
       template: {
        code: "working_hours",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}
```

` '*' and # `
Typing * redirects to the main menu and # connects the user to an agent

`template:{}`
It refers to the HSM template created on your domain and direcly calls it. The template has all the attribute and is easier to use.
The template is as follows:

## 2. Workflow of the bot 
now lets look at the handlers section

```function arabicHandler() {
    $.reply({
        body: "Hi, I am good how are you?"
    });
}

function englishHandler() {
     $.reply({
        template: {
        code: "menu_jaipur",
    
        lang: "en_US"
  }

    }).listen({
        text: "New Order",
        handler: neworderhandler //If answer is "Good"
    }, {
        text: "Edit Order",
        handler: connecttoagenthandler //If answer is "Bad"
    }, {
        text: "Order Follow Up",
        handler: connecttoagenthandler
    }, {
        text: "Our Catering",
        handler: ourCateringhandler
    }, {
        text: "Working Hours",
        handler: workinghourshandler
    }, {
        text: "Help",
        handler: connecttoagenthandler
    });
}

function otherHandle() {
     $.reply({
        text: {
            body: ` ${inbound.getText()} is a invalid input.` // Read Customer input
        }
    });
}

function neworderhandler() {
     $.reply({
         template: {
        code: "new_order",
    
        lang: "en_US"
  }

    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

function connecttoagenthandler() {
    $.reply({
       template: {
        code: "connect_to_agent_jaipur",
    
        lang: "en_US"
  }

    });
    $.route.to.team("online_team");

}

function ourCateringhandler() {
    return $.reply({
        template: {
        code: "our_catering_jaipur",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

async function workinghourshandler() {
     let {hours} = await $.store.global('hours');
    

    return $.reply({
       template: {
        code: "working_hours",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}
```

` '*' and # `
Typing * redirects to the main menu and # connects the user to an agent

`template:{}`
It refers to the HSM template created on your domain and direcly calls it. The template has all the attribute and is easier to use.
The template is as follows:

now lets look at the handlers section

```function arabicHandler() {
    $.reply({
        body: "Hi, I am good how are you?"
    });
}

function englishHandler() {
     $.reply({
        template: {
        code: "menu_jaipur",
    
        lang: "en_US"
  }

    }).listen({
        text: "New Order",
        handler: neworderhandler //If answer is "Good"
    }, {
        text: "Edit Order",
        handler: connecttoagenthandler //If answer is "Bad"
    }, {
        text: "Order Follow Up",
        handler: connecttoagenthandler
    }, {
        text: "Our Catering",
        handler: ourCateringhandler
    }, {
        text: "Working Hours",
        handler: workinghourshandler
    }, {
        text: "Help",
        handler: connecttoagenthandler
    });
}

function otherHandle() {
     $.reply({
        text: {
            body: ` ${inbound.getText()} is a invalid input.` // Read Customer input
        }
    });
}

function neworderhandler() {
     $.reply({
         template: {
        code: "new_order",
    
        lang: "en_US"
  }

    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

function connecttoagenthandler() {
    $.reply({
       template: {
        code: "connect_to_agent_jaipur",
    
        lang: "en_US"
  }

    });
    $.route.to.team("online_team");

}

function ourCateringhandler() {
    return $.reply({
        template: {
        code: "our_catering_jaipur",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

async function workinghourshandler() {
     let {hours} = await $.store.global('hours');
    

    return $.reply({
       template: {
        code: "working_hours",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}
```

` '*' and # `
Typing * redirects to the main menu and # connects the user to an agent

`template:{}`
It refers to the HSM template created on your domain and direcly calls it. The template has all the attribute and is easier to use.
The template is as follows:


## 3. Code

```
function onMessageReceive() {
    return $.reply({
        text: {
            body: "Welcome to Jaipur Restaurant. Please select the language:"
        },
        options: {
            buttons: ["عربى", "English"]
        }
    }).listen({
        text: "عربى",
        handler: arabicHandler //If answer is "Good"
    }, {
        text: "English",
        handler: englishHandler //If answer is "Bad"
    }, otherHandle); // If answer is none of the above, this is default handler
}

function arabicHandler() {
    $.reply({
        body: "Hi, I am good how are you?"
    });
}

function englishHandler() {
     $.reply({
        template: {
        code: "menu_jaipur",
    
        lang: "en_US"
  }

    }).listen({
        text: "New Order",
        handler: neworderhandler //If answer is "Good"
    }, {
        text: "Edit Order",
        handler: connecttoagenthandler //If answer is "Bad"
    }, {
        text: "Order Follow Up",
        handler: connecttoagenthandler
    }, {
        text: "Our Catering",
        handler: ourCateringhandler
    }, {
        text: "Working Hours",
        handler: workinghourshandler
    }, {
        text: "Help",
        handler: connecttoagenthandler
    });
}

function otherHandle() {
     $.reply({
        text: {
            body: ` ${inbound.getText()} is a invalid input.` // Read Customer input
        }
    });
}

function neworderhandler() {
     $.reply({
         template: {
        code: "new_order",
    
        lang: "en_US"
  }

    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

function connecttoagenthandler() {
    $.reply({
       template: {
        code: "connect_to_agent_jaipur",
    
        lang: "en_US"
  }

    });
    $.route.to.team("online_team");

}

function ourCateringhandler() {
    return $.reply({
        template: {
        code: "our_catering_jaipur",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}

async function workinghourshandler() {
     let {hours} = await $.store.global('hours');
    

    return $.reply({
       template: {
        code: "working_hours",
    
        lang: "en_US"
  }
    }).listen({
        text: "*",
        handler: englishHandler //If answer is "Good"
    }, {
        text: "#",
        handler: connecttoagenthandler
    }, otherHandle);
}
```