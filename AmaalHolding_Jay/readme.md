# **Aamal Holding** 
# Cafe Bazza

## 1. Problem Statement
To design a Bot Flow for Cafe Bazza. The bot needs to be completely automated so as to have minimum agent interference unless absolutely required. <The Bot Flow will first ask the user to select a language, with the options being Arabic and English. Depending upon user response the bot will provide the user with the menu with numerous options i.e. the services provided by the clinic as well as basic information like their location working hours and customer support. The bot will also provide the user to end the chat option. The bot can also assign the chat to the agents to take forward depending on user requirements.br>

## 2. Description 
The Bot Flow will first ask the user to select a language, with the options being Arabic and English. Depending upon user response the bot will provide the user with the menu with numerous options i.e. the services provided by the clinic as well as basic information like their location working hours and customer support. The bot will also provide the user to end the chat option. The bot can also assign the chat to the agents to take forward depending on user requirements.

## 3. Flowchart
![alt text]([http://url/to/img.png](https://kroki.io/mermaid/svg/eNptUk1P4zAQvSPxH0bi0IDUg92W3pDSpFWQlk2XLuIj4uAmQ2qt144cuz1s-O-bL0OC8Gnem3lvxmPnmhUH-B2en0F9_OQOy5LlCPeYIj9i9tolVolfFLBLNS8MTGGlTJ_wYTq9qUJ8Y1YYuJV7ZWUGvyxarGDVi-sSqGIJf3tz3ZlXAekKApLcSqNVZlPD1WfdiZsDCCZz26ASBbb5V6eC1vjp-WXia7bn6aQKyTi3lrng5aEKaceHJNnZolDagFQG2JFxwfYCXcveOqTJHePNINIKx5HeMYPgwEy1-UK3jVrFR7dNEih5RF2y9lqpUOXXTjHxfuIJYp2hvuwp6sVWww-VtjLHzrxHpf9wmUOkrC4dPfcCZlDXvGMW3jrjZmx57W2UEOoED4Wjll6EwqGQNreIyQjREZrBCM5HaDFC1008Ll92KGo2IutnBKPAz1G6fxQv6rLITTuIl59x9O0DbMm_Xfsz4Oq9Z6hjLmrG7bkWb4nb8BDMhmA-ANtG496yM6BDAzo0oEMD6gZphv8PKSDW9g==))

## 4. Code Explaination
The Bot flow is such that there is maximum interaction of the user with the bot and minimal agent involvement. At any point in the conversation, the flow of the bot would not be interrupted. Even if there is an invalid response from the user the Bot will handle it with an invalid function redirecting the flow to the actual sequence. The flow has options wherein the user can end the chat and the session would be closed and resolved without any agent involvement. In the case the user requests customer support, he/she can access it at multiple points in the conversation.

## 5. Video Explaination
https://www.loom.com/share/28659be07f1b41eeaf926789c566d582

## 6. Code
```javascript
function onMessageReceive(){
        $.reply({
        text: {
            body: "Welcome to Cafe Bazza\nPlease select language"
        },
        options: {
            buttons: ["XYZ" , "ENGLISH"]
        }
    }).listen({
        text : "XYZ",
        handler: xyzHandler
    }, {
        text : "ENGLISH",
        handler: main_menuHandler
    });  
}


function xyzHandler() {
    $.reply({
        text: {
            body: "Support not avaiable in XYZ"
        },
        options: {
            buttons: [
                { code: "main_menu", label: "Back to Main Menu" },
                { code: "end_chat", label: "End Chat" }
            ]
        }
    }).listen({
        code: "main_menu",
        handler: main_menuHandler
    }, {
        code: "end_chat",
        handler: endHandler
    }, otherxxHandler);
}


function main_menuHandler() {
    $.reply({
        text: {
            body: "Our Services\nPlease Select the required service"
        },
        options: {
            buttons: ["New Order", "Edit Order", "Order Follow Up", "Our Location", "Working Hours", "Catering", "Help"]
        }
    }).listen({
        text: "New Order",
        handler: neworderHandler
    }, {
        text: "Edit Order",
        handler: editorderHandler
    }, {
        text: "Order Follow Up",
        handler: orderFollowUpHandler
    }, {
        text: "Our Location",
        handler: locationHandler
    }, {
        text: "Working Hours",
        handler: workingHoursHandler
    }, {
        text: "Catering",
        handler: cateringHandler
    }, {
        text: "Help",
        handler: helpHandler
    }, otherxxHandler);
}


function neworderHandler() {
    $.reply({
        text: {
            body: "New order\n\nTo return the main menu,  please send *   \nTo speak with a customer service representative, please send #\n\n↗️ Click on below URL\nhttps://www.cafebazzadelivery.com/"
        }
    }).listen({
        text: "*",
        handler: main_menuHandler
    }, {
        text: "#",
        handler: helpHandler
    }, main_menuHandler);
}

function editorderHandler() {
    $.reply({
        text: {
            body: "Thank you, Customer service will contact you as soon as possible."
        }
    });
    $.route.to.team("teamone");
}


function orderFollowUpHandler() {
    $.reply({
        text: {
            body: "Thank you, Customer service will contact you as soon as possible."
        }
    });
    $.route.to.team("teamone");
}


function locationHandler() {
    $.reply({
        text: {
            body: "Our Locations\n\nTo return the main menu,  please send *   \nTo speak with a customer service representative, please send #\n\n↗️ Cafe Bazza Avenues\nhttps://goo.gl/maps/g7dkZPVcG3RNGSNz5\n\n↗️ Bneid Al-Gar\nhttps://goo.gl/maps/dSWrfYiuhkrM24V88\n\n↗️ Hikayat Bint Saghirunah\nhttps://goo.gl/maps/MoUm9aopDPmJZaWy5\n\n↗️ Cafe Bazza Kefan\nhttps://goo.gl/maps/RqbLtG3oNJDCzMNc9\n\n↗️ Cafe Bazza Mahboula\nhttps://goo.gl/maps/z2GTAKQQpYZF4CCdA\n\n↗️ Cafe Bazza Mishref\nhttps://goo.gl/maps/pxT9NikFsBqpff6Q9\n\n↗️ Cafe Bazza Mohallab\nhttps://goo.gl/maps/8xfpmDHjR7xQKwDB9\n\n↗️ Cafe Bazza Salmiya\nhttps://goo.gl/maps/DZbnwpEPFLgqMQyS8\n\n↗️ Cafe Bazza Shamiya\nhttps://goo.gl/maps/7wJKN4gF77y7aUEQ8\n\n↗️ Cafe Bazza Gate Mall\nhttps://goo.gl/maps/uG4aHcfhj8NVHmSR8     }"
        }

    }).listen({
        text: "*",
        handler: main_menuHandler
    }, {
        text: "#",
        handler: helpHandler
    }, main_menuHandler);
}


function workingHoursHandler() {
    $.reply({
        text: {
            body: "Working Hours\n6:00 AM - 1:00 AM\n\nTo return the main menu,  please send *   \nTo speak with a customer service representative, please send #"
        }
    }).listen({
        text: "*",
        handler: main_menuHandler
    }, {
        text: "#",
        handler: helpHandler
    }, main_menuHandler);
}


function cateringHandler() {
    $.reply({
        text: {
            body: "For Catering\n\nTo return the main menu,  please send *   \nTo speak with a customer service representative, please send #\n\n↗️ Click on below URL\nhttps://www.cafebazzadelivery.com/"
        }
    }).listen({
        text: "*",
        handler: main_menuHandler
    }, {
        text: "#",
        handler: helpHandler
    }, main_menuHandler);
}


function helpHandler() {
    $.reply({
        text: {
            body: "Thank you, Customer service will contact you as soon as possible."
        }
    });
    $.route.to.team("teamone");
}



function otherxxHandler() {
    $.reply({
        text: {
            body: "Invalid Input"
        },
        options: {
            buttons: ["Main Menu", "Close Chat"]
        }
    }).listen({
        text: "Main Menu",
        handler: main_menuHandler
    }, {
        text: "Close Chat",
        handler: endHandler
    }, otherxxHandler);
}

function endHandler() {
    $.reply({
        text: {
            body: "Thank you for contacting us.\n\nHope we were able to handle your query satisfactorily today.\n\nFeel free to reach out to us for any assistance. This chat is closed now"
        }
    });
    return $.session.close();
}
```
