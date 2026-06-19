// The Title Page
document.title = "Welcome to My Site!";
var welcomeMsg = "Hi There!";
var welcomeHead = document.createElement("header");
welcomeHead.textContent = welcomeMsg;
var introMsg = document.createElement("h3");
introMsg.textContent = "Welcome to my site!";
var homeBody = document.createElement("p");
homeBody.textContent = "My Name is Tim, and I'm a Software Engineer specializing in C++." +
    " This is my first personal Typescript project & eventually" +
    " will become my professional online portfolio.";
var disclaimer = document.createElement("p");
disclaimer.textContent = "This site is still under construction, " +
    " Feel free to check whenever for updates!";
document.body.append(welcomeHead);
document.body.append(introMsg);
document.body.append(homeBody);
document.body.append(disclaimer);
