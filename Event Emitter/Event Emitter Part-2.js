/*
1> We can have multiple functions listening to a single event.
2> order matters ie first we define the methods listening to the event and after that we emit events. So, first on() is defined then emit() is defined.
 */

const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, price) => {
  console.log(`data recieved, instructor:-${name}\nprice:-${price} `);
});

customEmitter.on("response", () => {
  console.log(`data processed`);
});

customEmitter.emit("response","John Smilga",890);
