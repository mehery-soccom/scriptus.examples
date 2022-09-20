
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