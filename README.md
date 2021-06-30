## discordBot

# DJSBOT
DJSBOT is a free, open-source, extensible bot for Discord servers, built on top of <a href="https://discord.js.org">discord JS </a>

 
 # Installation

This bot runs on [node.js](https://nodejs.org). You will need at least node 12. In order for music playback to work, you will need python and ffmpeg to be present on your system.

## Linux

### General

Install [node 12 or newer]((https://nodejs.org/en/download/)), Python, and FFmpeg, along with a C compiler for npm to use.

Run `npm install` in the bot directory and make sure it passes.

Now set up your `auth.json` and run `npm start` or `node discord_bot.js` to test the bot out!

### Ubuntu

First install the needed system dependencies:
 `sudo apt install build-essential nodejs python ffmpeg`

 Now run `node --version` and make sure it is v12 or later. If not refer to [the node.js download page](https://nodejs.org/en/download/) to get an updated version.

Run `npm install` in the bot directory and make sure it passes.

Now set up your `auth.json` and run `npm start` or `node discord_bot.js` to test the bot out!

## Windows

1. Install [node.js](https://nodejs.org/en/download/)
2. Install [python](https://www.python.org/)
3. Install [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/)
4. Install [FFmpeg](https://www.ffmpeg.org/download.html)
5. Open `x64 Native Tools Command Prompt for VS 2019` and cd to the bot's folder
6. Run `npm install` and make sure it succeeds
7. Set up your `auth.json`
8. Run `npm start` or `node discord_bot.js` to test the bot out!
