//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "kilifi, Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "254792515335";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxJUzNlYXBqYzJWRWR4aXFURk1hRUY3WVFuQjRGbmpYK3ZtUVpvcXpsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXJzWEVTRUpEYkpEYUQ0K3JFUGF5cFVzQm9XMFdXYTdja1hjSnNHZkQyUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTEFxOFJzWWI3alRmOVZNS01EV1dRSzFWcGFXQ21yNk1VeWMyZHcrMTBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsQXVjT2M3aWRVREg2bkp0cnBIU3BJa0l4OUcybWdRRGJPcEtVdzlBM3owPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Mcm9hbFBzR0N3a3dZQlpqSkJPZ2hxY3lRU2NUWm04ZVdSSm02V1ZqMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldtZnZJUDhSK2dCY2ZJQUpJQlV6QXI5YjlSOGdDQVlwdVlnaFFxTnFHMWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZzVlZ1T2QrTmNzTlI4Zzc5amFVbDVIY3R0RzZPa2tPVGlWdXJ2OFdtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlA2UE1oc1VsQ05FV2YvVDJ0d1NjK01tcHMrVGh1bVl3ZVZzR3IyU0huQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdiRUE3aDgyODFweU9rL2ZQdkJZL3FlWm9rYk9kM3RJd1pOTXM0Z3N0RVNNNXNOTGJtUVlieGtVV0lmRW5Hc050T1NVVU52Z005cWc2Vi9mU1NRZ0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJaWFY4MWZ5aVlxOGM3QVBoalB5Y2JYTTJVb0drY2FrU2tkbUZnYkJiOVNNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDbWpQbXpyM1JQZVhLcVpFZzlQb0R3IiwicGhvbmVJZCI6Ijk0ZDA5NjM4LTdiNjMtNDdhYy1iM2Y1LTY3YTkzZTExZTAzNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNzF4Um8xS3BvbnBxdi9SdzR4VlR3UWhBekU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaElZT05LdXZMUkJZVlpnWWlVZTdVWldQWm5JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRDSkJNOFNHIiwibWUiOnsiaWQiOiIyNTQ3OTI1MTUzMzU6MzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQU5PTllNT1VTX1RFQ0gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l6eitPc0ZFUFhKN0xRR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1yL3JVMUZmbS90T05MdEY0UytUeWVMUkFDOHZOTjQ4ZDc3WWs1WDVxUVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1pZEJ0ZFUvYkRiSytuVk1KZ21RcWsvdkNrREZvRGN2OS9xOWF4QW1zU2VXSmx4ZnFIQUVWbWMvWGhML2QvcDg5TWdCMW13cU94NW5TZXFpbE9LY0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtRDMrVUh4bnF2aG1odktSUys4elNuT1lxVm9CcUtNcjl3SWQ0SnZCS0JZQ2QwY2pvdGN2ZVR0VkFWSUl4eDNtckdvdUFRUVBGaDB3bXcxdzBycmtCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5MjUxNTMzNTozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSy82MU5SWDV2N1RqUzdSZUV2azhuaTBRQXZMelRlUEhlKzJKT1YrYWtGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDQzNjAyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ANONYMOUS_TECH™-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Anonymous_tech™",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
