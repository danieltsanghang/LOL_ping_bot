import Discord from "discord.js";
import { config } from "./config.js";
import ping from "ping";

const client = new Discord.Client();

class server {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

const NA = new server("NA", "prod.na2.lol.riotgames.com");
const EUW = new server("EUW", "prod.euw1.lol.riotgames.com");
const EUNE = new server("EUNE", "prod.eun1.lol.riotgames.com");
const OCE = new server("OCE", "104.160.156.1");
const KR = new server("KR", "prod.kr.lol.riotgames.com");

var hosts = [NA, EUW, EUNE, OCE, KR];

client.on("message", (message) => {
  if (message.content === "!ping") {
    hosts.forEach((host) => {
      ping.promise.probe(host.address).then(function (res) {
        console.log(res);
        message.reply(host.name + " server: " + res.time);
      });
    });
  }
});
client.login(config.DIS_TOKEN);
