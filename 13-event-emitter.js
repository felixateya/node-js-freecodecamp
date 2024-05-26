const EventEmitter = require("events");

const customEmmitter = new EventEmitter()

customEmmitter.on('response', (name, id)=>{
  console.log(`data recieved user ${name} wwith id:${id}`)
})
customEmmitter.on('response', ()=>{
  console.log(`some other logic here`)
})

customEmmitter.emit('response', 'john', 34)