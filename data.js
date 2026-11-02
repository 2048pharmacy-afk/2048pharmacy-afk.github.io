/* ============================================================
   data.js — THE ONLY FILE YOU EVER EDIT
   Edit on github.com → Commit → live in ~1-10 min. That's it.
   cost:   number (points) | "FREE" | "?" (TBC) | any string ("20pt stake")
   status: "" | "new" | "updated" | "disabled"
           disabled cards grey out; the badge auto-detects the type
           from the description: (Broadcaster only) / (Mod only) /
           (VIP+ and up) / (Offline) — anything else shows Soon™
   ============================================================ */

window.MENU = {
  streamer: "Drewdj4",
  updated: "2026-11-02",

  links: [
    { label: "Twitch", url: "https://www.twitch.tv/drewdj4" },
    { label: "YouTube", url: "https://www.youtube.com/channel/UCOO1k_PDmTEQT6TGnuIFuDA?sub_confirmation=1" },
    { label: "Discord", url: "https://discord.gg/TD9dDumUR" },
  ],

  intro: "<b>AYO YO YO!</b> You earn <b>1 point every minute</b> you watch — as long as you're subbed and actually vibing in chat. Spend 'em on chaos below. In chat? Type <b>!c</b> for the quick list.",

  sections: [
    {
      name: "🎵 Music & Media",
      note: "<b>PRO-TIP:</b> YouTube links are auto-blocked in chat — just paste the <b>11-character video ID</b> instead (e.g. <i>dQw4w9WgXcQ</i>) and it queues automatically. Title + uploader name still works too!",
      items: [
        { name: "!sr ID/Title", cost: 21, desc: "Take over as DJ! Track or playlist, no link needed. Plays thru YT Music", cooldown: "", status: "" },
        { name: "!mrv title", cost: 25, desc: "Video request — same vibe, bigger screen.", cooldown: "", status: "" },
        { name: "!bump", cost: 15, desc: "Wanna skip the queue? BUMP IT!", cooldown: "", status: "" },
        { name: "!skip", cost: "?", desc: "Skip the current song or request.", cooldown: "", status: "" },
        { name: "!Gif whatever", cost: 15, desc: "Plays a GIF of whatever you request. Yes, whatever.", cooldown: "", status: "" },
        { name: "!GifClip whatever", cost: 20, desc: "Like !Gif, but a short video clip. Cinema.", cooldown: "", status: "" },
        { name: "!pause", cost: "FREE", desc: "Pause the current track. The queue forgives.", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "💥 Chaos",
      items: [
        { name: "!nuts", cost: 42, desc: "THINK FAST!!!", cooldown: "", status: "" },
        { name: "!TTS text", cost: 15, desc: "Classic text-to-speech. Make the robot say it.", cooldown: "10sec", status: "" },
        { name: "!twerk", cost: 31, desc: "Plays WorldStar's Top Video of the Week. You already know.", cooldown: "30sec", status: "" },
        { name: "!brap", cost: 15, desc: "No description available. It speaks for itself. 💨", cooldown: "0", status: "" },
        { name: "!Hog", cost: 48, desc: "Summon Him.", cooldown: "0", status: "" },
        { name: "!bug", cost: 22, desc: "Take over my keyboard. What could possibly go wrong.", cooldown: "60sec", status: "" },
        { name: "!shutup", cost: 33, desc: "I shut up for 5 minutes. Use it wisely.", cooldown: "5min per user", status: "" },
        { name: "!spooky", cost: 55, desc: "BOO!", cooldown: "", status: "" },
        { name: "!chill", cost: 26, desc: "Take a chill pill.", cooldown: "", status: "" },
        { name: "!rainbow", cost: 33, desc: "Taste the Rainbow!!!", cooldown: "120sec", status: "" },
        { name: "!dragon", cost: 33, desc: "Flame!!!", cooldown: "120sec", status: "" },
        { name: "!Chef item", cost: 32, desc: "Tutorial RIGHT NOW. Example: !chef Egg", cooldown: "", status: "" },
        { name: "!gamer", cost: 25, desc: "Backseat me — style, strategy, chaos. Your call.", cooldown: "60sec", status: "" },
        { name: "!switchgame", cost: 555, desc: "Pick a game I own and we switch. Big Boss energy.", cooldown: "", status: "" },
        { name: "!brbbug", cost: "NA", desc: "Plays the bug BRB screen.", cooldown: "", status: "disabled" },
        { name: "!brbspace", cost: "NA", desc: "Plays the space BRB screen.", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🎡 The Wheel",
      items: [
        { name: "!spin", cost: 88, desc: "New Age Challenge wheel!!!", cooldown: "60sec", status: "" },
        { name: "!spinner", cost: 88, desc: "The OG spinner. Points, media picks, challenges, PFP hijacks — jackpot up to +222!", cooldown: "60sec", status: "" },
        { name: "!addSpin", cost: 5, desc: "Add YOUR idea to the wheel. Be nice. Ish.", cooldown: "5min", status: "" },
        { name: "!wheeladd", cost: 5, desc: "Same as !addSpin. For the alias enjoyers.", cooldown: "5min", status: "" }
      ]
    },
    {
      name: "🎮 Games & Gambling",
      items: [
        { name: "!games", cost: "FREE", desc: "Every chat game on the menu. Window shopping is free.", cooldown: "", status: "" },
        { name: "!bet option amount", cost: "Your bet", desc: "Put your points where your mouth is. E.g. !bet Yes 100", cooldown: "", status: "" },
        { name: "!catch", cost: 10, desc: "A wild Pokémon appears! Throw a ball, fill your Pokédex (!pokedex).", cooldown: "", status: "" },
        { name: "!pokedex", cost: "FREE", desc: "Check your caught Pokémon. Gotta catch 'em all, apparently.", cooldown: "", status: "" },
        { name: "!rob @user", cost: "20pt stake", desc: "PvP Heist! 40% chance to steal 10–20% of a lad's points (cap 200). Caught? 15pt fine. Targets need 15+ pts.", cooldown: "15 min", status: "" },
        { name: "!crime", cost: "FREE", desc: "50% chance to earn 15–40pts, 50% chance to pay a 10–25pt fine. No skill required.", cooldown: "15 min", status: "" },
        { name: "!Gamble", cost: "Your bet", desc: "Feeling lucky? The house always wins.", cooldown: "", status: "" },
        { name: "!scratchcard / !sc", cost: 25, desc: "Tiny odds, but every buy feeds the jackpot pool!", cooldown: "", status: "" },
        { name: "!givepoints @user", cost: "FREE", desc: "Gift some of your points to a homie. Gotta pay the Troll toll doe", cooldown: "", status: "" },
        { name: "!giftp @user", cost: "FREE", desc: "Gift points after hours. (Offline).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "♠️ Blackjack",
      note: "Start with <b>!blackjack</b>. Take on the House or duel a chatter. It's 21 — you know how this works.",
      items: [
        { name: "!blackjack", cost: "Your bet", desc: "21 against the House. Hit me.", cooldown: "", status: "" },
        { name: "!hit", cost: "FREE", desc: "Gimme another card.", cooldown: "", status: "" },
        { name: "!stand", cost: "FREE", desc: "I'm good. Hold.", cooldown: "", status: "" },
        { name: "!double", cost: "FREE", desc: "Double the bet, one more card. Chest out.", cooldown: "", status: "" },
        { name: "!split", cost: "FREE", desc: "Got a pair? Run two hands.", cooldown: "", status: "" },
        { name: "!surrender", cost: "FREE", desc: "Bail out, keep half your bet. Coward's discount.", cooldown: "", status: "" },
        { name: "!duel @user", cost: "?", desc: "Challenge a homie to a 1v1 Blackjack duel.", cooldown: "", status: "" },
        { name: "!accept", cost: "FREE", desc: "Accept a duel.", cooldown: "", status: "" },
        { name: "!decline", cost: "FREE", desc: "Decline a duel. Noted forever.", cooldown: "", status: "" },
        { name: "!stats", cost: "FREE", desc: "Your W/L record. The receipts.", cooldown: "", status: "" },
        { name: "!allstats", cost: "FREE", desc: "The global leaderboard. See who's actually good.", cooldown: "", status: "" },
        { name: "!house", cost: "?", desc: "Open table — everyone vs the House.", cooldown: "", status: "" },
        { name: "!join", cost: "FREE", desc: "Pull up a chair.", cooldown: "", status: "" },
        { name: "!insurance", cost: "FREE", desc: "Side bet when the dealer's showing an Ace.", cooldown: "", status: "disabled" },
        { name: "!deal", cost: "FREE", desc: "Deal a fresh hand.", cooldown: "", status: "disabled" },
        { name: "!quit", cost: "FREE", desc: "Walk away from the table.", cooldown: "", status: "disabled" },
        { name: "!repeat", cost: "FREE", desc: "Repeat the last bot message.", cooldown: "", status: "disabled" },
        { name: "!resettut", cost: "FREE", desc: "Reset the tutorial (Mod only).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🪢 Hangman",
      note: "Guess the word letter by letter. <b>!g [letter]</b> to guess.",
      items: [
        { name: "!hangman / !hm", cost: "FREE", desc: "Start a game. Guess wrong and the stickman gets it.", cooldown: "10min User cooldown", status: "" },
        { name: "!g [letter]", cost: "FREE", desc: "Guess a letter.", cooldown: "", status: "" },
        { name: "!hma", cost: "FREE", desc: "Addict mode. Longer words, more rope.", cooldown: "", status: "" },
        { name: "!hmr", cost: "FREE", desc: "Re-show the board, for the latecomers.", cooldown: "", status: "" },
        { name: "!hmp", cost: "FREE", desc: "Personal Hangman stats (Offline).", cooldown: "", status: "disabled" },
        { name: "!hml", cost: "FREE", desc: "Lookup another user's Hangman stats (Offline).", cooldown: "", status: "disabled" },
        { name: "!hms", cost: "FREE", desc: "Hangman leaderboard (Offline).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🧠 Trivia",
      note: "Start a match with <b>!trivia</b> or <b>!t</b>. Harder questions pay more.",
      items: [
        { name: "!trivia / !t", cost: "FREE", desc: "Start a match. Brains on.", cooldown: "10min User cooldown", status: "" },
        { name: "!suggest", cost: "FREE", desc: "Submit a question. Stump us.", cooldown: "", status: "" },
        { name: "!what", cost: 10, desc: "On-screen guesser. Winner takes the pot. Don't overthink it.", cooldown: "", status: "" },
        { name: "!TA", cost: "FREE", desc: "Toggle Trivia Addict mode. Sweat optional.", cooldown: "", status: "" },
        { name: "!fctrivia", cost: "FREE", desc: "End the current game early. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!skiptrivia", cost: "FREE", desc: "Skip the current question. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!tstats", cost: "FREE", desc: "Personal Trivia stats (Offline).", cooldown: "", status: "disabled" },
        { name: "!tss", cost: "FREE", desc: "Search the Trivia leaderboard (Offline).", cooldown: "", status: "disabled" },
        { name: "!ttb", cost: "FREE", desc: "Top Trivia board (Offline).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🎰 Slots",
      items: [
        { name: "!slots", cost: "?", desc: "Play the slot machine. Good luck.", cooldown: "", status: "" }
      ]
    },
    {
      name: "🎲 Quick Games",
      note: "Fast, low-stakes, zero skill required. The bot referees, the bot judges, the bot remembers.",
      items: [
        { name: "!8ball question", cost: "FREE", desc: "Ask the magic 8-ball. It has seen things it cannot unsee.", cooldown: "", status: "new" },
        { name: "!rps @user", cost: "FREE", desc: "Rock, Paper, Scissors vs another chatter. No skill. All pride.", cooldown: "", status: "new" },
        { name: "!quiz", cost: "FREE", desc: "Quick-fire quiz round. Brains optional, bragging mandatory.", cooldown: "", status: "" },
        { name: "!quizleaderboard", cost: "FREE", desc: "The quiz leaderboard. Flex responsibly.", cooldown: "", status: "" },
        { name: "!challenge @user", cost: "FREE", desc: "Challenge a homie to a bot-run showdown.", cooldown: "", status: "" },
        { name: "!mytickets", cost: "FREE", desc: "Check your lotto tickets. One of them is definitely the one.", cooldown: "", status: "" },
        { name: "!rollp", cost: "?", desc: "Roll for points. The dice don't care.", cooldown: "", status: "disabled" }, // not fully built yet — stays disabled here
        { name: "!loan amount", cost: "?", desc: "Borrow points from the bot bank. The interest is real. So is the regret.", cooldown: "", status: "disabled" },
        { name: "!challengeStats", cost: "FREE", desc: "Your challenge record. Wins, losses, trauma.", cooldown: "", status: "disabled" },
        { name: "!raffle", cost: "?", desc: "Enter the raffle. Winner pulled live on stream.", cooldown: "", status: "disabled" },
        { name: "!lotto", cost: "?", desc: "Buy a lotto ticket. Tiny odds, life-changing channel money.", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🚢 Battleship",
      note: "[BG] Battleship — custom-built. Coordinates look like <b>A3</b>. Aim before you fire, coward.",
      items: [
        { name: "!battleship / !bs", cost: "FREE", desc: "Start a game (or challenge someone). Man the cannons. May the best fleet win.", cooldown: "", status: "new" },
        { name: "!fire A3", cost: "FREE", desc: "Fire at a coordinate. Miss and it's just water, everywhere, forever.", cooldown: "", status: "new" },
        { name: "!fleet", cost: "FREE", desc: "See what's left of your ships. Usually: not much.", cooldown: "", status: "new" },
        { name: "!bstats", cost: "FREE", desc: "Season scoreboard — still in the dry dock.", cooldown: "", status: "disabled" },
        { name: "!ballstats", cost: "FREE", desc: "All-time scoreboard. Also in the dry dock.", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🏟️ Arena (PvP)",
      note: "Fight chatters or the boss. The Fluffless Cat Arena is LIVE.",
      items: [
        { name: "!fkoth", cost: "FREE", desc: "King of the Hill! Hold the crown.", cooldown: "", status: "" },
        { name: "!fpvp @user", cost: "FREE", desc: "1v1 fight — shows on stream. Square up.", cooldown: "", status: "" },
        { name: "!battle", cost: "FREE", desc: "Duel a chatter. Loser eats chat.", cooldown: "", status: "" },
        { name: "!fboss", cost: "?", desc: "Fight the Arena boss. It does not go easy.", cooldown: "", status: "" },
        { name: "!fuser", cost: "?", desc: "Your Arena fighter card.", cooldown: "", status: "" },
        { name: "!freset", cost: "?", desc: "Wipe your Arena fighter. Fresh start, same mistakes.", cooldown: "", status: "" },
        { name: "!fstop", cost: "FREE", desc: "Stop the current Arena fight (Mod only).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🤖 Egg Cohost (StreamLinkr)",
      note: "We got a cohost living in chat. It remembers the regulars, reads the room, and talks back — greetings, shoutouts, roasts on demand, plus the holy trinity: hugs, slaps, bonks. <b>Everything below is FREE unless marked as a game.</b>",
      items: [
        { name: "!comment", cost: "FREE", desc: "Talk to the Egg directly. Ask it anything — it has opinions.", cooldown: "", status: "new" },
        { name: "!roast @user", cost: "FREE", desc: "The Egg roasts you. It knows you better than you know you.", cooldown: "", status: "new" },
        { name: "!compliment @user", cost: "FREE", desc: "The Egg says something nice. Might be backhanded. No refunds.", cooldown: "", status: "new" },
        { name: "!rank", cost: "FREE", desc: "The Egg assigns your official chat rank. Results may hurt.", cooldown: "", status: "new" },
        { name: "!hug @user", cost: "FREE", desc: "Wholesome virtual hug. The bot means it. Probably.", cooldown: "", status: "new" },
        { name: "!slap @user", cost: "FREE", desc: "Slap a homie with whatever the bot finds nearby. Classic chat energy.", cooldown: "", status: "new" },
        { name: "!bonk @user", cost: "FREE", desc: "BONK. Straight to jail. (The horny jail is self-serve.)", cooldown: "", status: "new" },
        { name: "!lurk", cost: "FREE", desc: "Tell the bot you're lurking. It'll remember.", cooldown: "", status: "new" },
        { name: "!unlurk", cost: "FREE", desc: "Back from lurk city! The bot noticed you left. It counted the minutes.", cooldown: "", status: "new" },
        { name: "!ignoreme", cost: "FREE", desc: "The bot stops responding to you. Blissful silence, on demand.", cooldown: "", status: "new" },
        { name: "!dontignoreme", cost: "FREE", desc: "Undo !ignoreme. Attention restored, regret pending.", cooldown: "", status: "new" },
        { name: "!clip", cost: "FREE", desc: "Clips the moment and yeets it to Discord.", cooldown: "", status: "new" },
        { name: "!weather", cost: "FREE", desc: "Ask the Egg about the weather.", cooldown: "", status: "new" },
        { name: "!coinflip", cost: "FREE", desc: "Heads or tails. The fairest fight in chat.", cooldown: "", status: "new" },
        { name: "!8ball", cost: "FREE", desc: "Ponder the Ball.", cooldown: "", status: "new" },
        { name: "!urban", cost: "FREE", desc: "Urban Dictionary, via the Egg. Educational-ish.", cooldown: "", status: "new" },
        { name: "!stfu", cost: "FREE", desc: "Egg yapping? Shut him up bruh.", cooldown: "", status: "new" },
        { name: "!command text", cost: "FREE", desc: "Make the Egg say anything, out loud. (Mod only) — you had your chance.", cooldown: "60s", status: "disabled" },
        { name: "!spin", cost: "FREE", desc: "Challenge Wheel. Free spins, mod-run. (Mod only).", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🧰 Lookups & Extras",
      note: "Info on demand — weather, words, ages, leaderboards. Effort level required from you: zero.",
      items: [
        { name: "!help", cost: "FREE", desc: "The bot explains itself. A rarity among bots.", cooldown: "", status: "" },
        { name: "!weather", cost: "FREE", desc: "Weather check. Touch grass vicariously.", cooldown: "", status: "" },
        { name: "!firstseen", cost: "FREE", desc: "When you first appeared in this chat. Your origin story.", cooldown: "", status: "" },
        { name: "!topchatter", cost: "FREE", desc: "The loudest legends this channel has produced.", cooldown: "", status: "" },
        { name: "!followage", cost: "FREE", desc: "How long you've followed. Emotional support included.", cooldown: "", status: "" },
        { name: "!accountage", cost: "FREE", desc: "How old your account is. Boomer check.", cooldown: "", status: "" },
        { name: "!leaderboard", cost: "FREE", desc: "The egg economy leaderboard. Top of the food chain.", cooldown: "", status: "" },
        { name: "!counters", cost: "FREE", desc: "Everything we're counting. Yes, we keep count.", cooldown: "", status: "" },
        { name: "!points", cost: "FREE", desc: "Check your points balance. Count those eggs.", cooldown: "", status: "" },
        { name: "!urban term", cost: "FREE", desc: "Urban Dictionary lookup. Educational. Allegedly. (VIP+ and up).", cooldown: "", status: "disabled" },
        { name: "!define word", cost: "FREE", desc: "Real dictionary definition. Edu-ma-cation.", cooldown: "", status: "disabled" },
        { name: "!convert amount", cost: "FREE", desc: "Unit & currency converter. Math, but automated.", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "❓ Mystery Commands",
      note: "These commands exist in the bot. What they do is between the bot and God.",
      items: [
        { name: "!subathon", cost: "FREE", desc: "subathon...", cooldown: "", status: "disabled" }
      ]
    },
    {
      name: "🛠️ Utility",
      items: [
        { name: "!note text", cost: "FREE", desc: "Slap a note onto the stream overlay. Multilingual: !postit, !notiz, !merken.", cooldown: "", status: "new" },
        { name: "!shownotes", cost: "FREE", desc: "Everything currently stuck on screen.", cooldown: "", status: "new" },
        { name: "!delnote", cost: "FREE", desc: "Delete a specific note. (aka !radier)", cooldown: "", status: "new" },
        { name: "!clearnotes", cost: "FREE", desc: "Nuke ALL notes. Fresh slate. (Mod only) — ya gremlins.", cooldown: "", status: "new" },
        { name: "!q / !look", cost: "FREE", desc: "Search chat history and profiles. The receipts are kept.", cooldown: "", status: "" },
        { name: "!s", cost: "FREE", desc: "Suggest anything — lands straight in the Discord. You joined, right?", cooldown: "10sec", status: "" },
        { name: "!firstrank", cost: "FREE", desc: "The first chatter this channel ever had. Certified OG.", cooldown: "", status: "" },
        { name: "!menu", cost: "FREE", desc: "Drops a link to this very page. You're already here. Hello.", cooldown: "", status: "new" }
      ]
    },
    {
      name: "🔧 Mod & Broadcaster Tools",
      note: "Role-locked. Greyed out because they're not for chat — mods and the man himself, this shelf is yours.",
      items: [
        { name: "!tts text", cost: "FREE", desc: "The bot's TTS voice on demand. (Broadcaster only) Viewers: use the !TTS redeem in Chaos.", cooldown: "", status: "disabled" },
        { name: "!info", cost: "FREE", desc: "Bot and channel info dump. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!stats", cost: "FREE", desc: "Bot stats. Numbers go up. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!recap", cost: "FREE", desc: "Recap of the stream so far. For mods who tabbed out. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!resetwheel", cost: "FREE", desc: "Reset the Challenge Wheel. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!resetcounter counter", cost: "FREE", desc: "Reset a counter to zero. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!setcounter counter N", cost: "FREE", desc: "Set a counter to any value. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!quizleaderboardclear", cost: "FREE", desc: "Wipe the quiz leaderboard. Brutal. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!deletequote", cost: "FREE", desc: "Delete a quote from the wall. (Broadcaster only).", cooldown: "", status: "disabled" },
        { name: "!givetickets @user N", cost: "FREE", desc: "Hand out lotto tickets. (Broadcaster only).", cooldown: "", status: "disabled" },
        { name: "!ticketleaderall", cost: "FREE", desc: "Full ticket leaderboard. (Broadcaster only).", cooldown: "", status: "disabled" },
        { name: "!givepoints @user N", cost: "FREE", desc: "Mint points out of thin air. (Broadcaster only).", cooldown: "", status: "disabled" },
        { name: "!addpoints @user N", cost: "FREE", desc: "Add points to a user. (Broadcaster only).", cooldown: "", status: "disabled" },
        { name: "!removepoints @user N", cost: "FREE", desc: "Confiscate points. The IRS of chat. (Broadcaster only).", cooldown: "", status: "disabled" },
        { name: "!setpoints @user", cost: "FREE", desc: "Set a user's points directly. (Mod only).", cooldown: "", status: "disabled" },
        { name: "!so @user", cost: "FREE", desc: "Shoutout another streamer. (Mod only).", cooldown: "", status: "disabled" }
      ]
    }
  ],

  changelog: [
    { date: "2026-11-02", text: "🎃➡️🥚 Spooky Season over — Terminal Green restored. The eggs are eggs again. Layout pass: sticky filters, section counts, collapsible sections, badges that tell the truth. Same chaos, less scrolling. Also: Egg !spin is mod-only now, and !commment got its third m confiscated." },
    { date: "2026-10-29", text: "..." },
    { date: "2026-10-28", text: "🎃 SPOOKY SEASON IS LIVE — Blood Moon palette deployed. The eggs are pumpkins now. Don't ask." },
    { date: "2026-10-28", text: "v2 — Massive command dump added (Blackjack, Hangman, Trivia, Slots, Fluffless Cat Arena). Mod/Offline commands are now greyed out." },
    { date: "2026-10-28", text: "🥚 Egg Cohost section added. It remembers regulars and talks back." },
    { date: "2026-10-28", text: "v1 — the menu escapes Pastebin. Click-to-copy, live search, category filters, eggs." }
  ]
};
