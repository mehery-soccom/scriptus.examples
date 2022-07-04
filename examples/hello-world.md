---
layout: default
title: Hello World
parent : Examples
nav_order: 2
has_children: true
---
# Hello World

## Sample 1. Reply to incoming Message
```javascript
function onMessageReceive(){ // Default message handler
  return $.reply({
    text :  {
      body : "Hi, I am good how are you?"
     }
  });
}
```


## Sample 2. Handle Response from User
```javascript
function onMessageReceive(){ // Default message handler
  return $.reply({
    text :  {
      body : "Hi, I am good how are you?" // Ask Question
     }
  }).listen(onUserResponse); // handel response from customer
}

function onUserResponse(){
  return $.reply({
    text :  {
      body : `So you are are ${inbound.getText()}, today` // Read Customer input
     }
  });
}

```

## Sample 3. Give user Quick-Reply options
```javascript
function onMessageReceive(){ // Default message handler
  return $.reply({
    text :  {
      body : "Hi, I am good how are you?" // Ask Question
     },
     options : {
      buttons : ["Good","Bad"] // Give easy options to customer
     }
  }).listen(onUserResponse); // handel response from customer
}

function onUserResponse(){
  return $.reply({
    text :  {
      body : `So you are are ${inbound.getText()}, today`  // Read Customer input
     }
  });
}
```


## Sample 4. Handle Each Answer Seperatly
```javascript
function onMessageReceive(){
  return $.reply({
    text :  {
      body : "Hi, I am good how are you?"
     },
     options : {
       buttons : ["Good","Bad"]
     }
  }).listen({
    text : "Good",
    handler : goodHandle  //If answer is "Good"
  },{
    text : "Bad",
    handler : badHandle //If answer is "Bad"
  },otherHandle); // If answer is none of the above, this is default handler
}
function goodHandle() {
  $.reply({
    text :  {
      body : "Great!!"
     }
  });
}
function badHandle() {
  $.reply({
    text :  {
      body : "Sorry!!"
     }
  });
}
function otherHandle(){
  return $.reply({
    text :  {
      body : `So you are are ${inbound.getText()}, today`  // Read Customer input
     }
  });
}
```