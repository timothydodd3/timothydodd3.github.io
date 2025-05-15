// For reference: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 
const welcomeMsg: string = "Welcome to Tim's Webpage!";

const welcomeHead = document.createElement("h1") as HTMLHeadElement;
welcomeHead.textContent = welcomeMsg;

document.body.append(welcomeHead);

