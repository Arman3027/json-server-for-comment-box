const jsonServer = require("./node_modules/json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);
server.listen(process.env.PORT || 8000, () => {
  console.log("JSON Server is running");
});
