// The Title Page
document.title = "Welcome to My Site!";

const welcomeMsg: string = "Hi There!";
const welcomeHead = document.createElement("header") as HTMLHeadElement;
welcomeHead.textContent = welcomeMsg;

const introMsg = document.createElement("h3") as HTMLHeadingElement;
introMsg.textContent = "Welcome to my site!"

const homeBody = document.createElement("p") as HTMLParagraphElement;
homeBody.textContent = "My Name is Tim, and I'm a Software Engineer specializing in C++." + 
" This is my first personal Typescript project & eventually" + 
" will become my professional online portfolio.";

const disclaimer = document.createElement("p") as HTMLParagraphElement;
disclaimer.textContent = "This site is still under construction, " +
" Feel free to check whenever for updates!";

document.body.append(welcomeHead);
document.body.append(introMsg);
document.body.append(homeBody);
document.body.append(disclaimer);