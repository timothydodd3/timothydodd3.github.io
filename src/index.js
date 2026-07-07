"use strict";
// The Title Page
document.title = "Welcome to My Site!";
const welcomeMsg = "Hi There!";
const welcomeHead = document.createElement("header");
welcomeHead.textContent = welcomeMsg;
const introMsg = document.createElement("h3");
introMsg.textContent = "Welcome to my site!";
const homeBody = document.createElement("p");
homeBody.textContent = "My Name is Tim, and I'm a Software Engineer specializing in C++." +
    " This is my first personal Typescript project & eventually" +
    " will become my professional online portfolio.";
const disclaimer = document.createElement("p");
disclaimer.textContent = "This site is still under construction, " +
    " Feel free to check whenever for updates!";
document.body.append(welcomeHead);
document.body.append(introMsg);
document.body.append(homeBody);
document.body.append(disclaimer);
