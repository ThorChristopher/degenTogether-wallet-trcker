export class HelpMessages {
  static generalHelp = `
How to use <b>DegenTogether Wallet Tracker Bot: </b>

🔮 Main Commands:
/start - Open main menu
/add - Add wallet(s)
/delete - Delete wallets(s)
/manage - Manage all your tracked wallets
/upgrade - Upgrade your DegenTogether plan

🆘 Help Commands:
/help_notify - How to use DegenTogether notifications
/help_group - How to add DegenTogether to group chats
`

  static groupsHelp = `
<b>How to add DegenTogether to Telegram groups:</b>

1️⃣ Add DegenTogether as an administrator in your Group chat
2️⃣ Send /start in the Group Chat
3️⃣ Send /activate | after this only the person who activated the bot will be able to add or delete wallets
4️⃣ Send /add to start adding wallets
`

  static notifyHelp = `
<b>How to use DegenTogether Bot:</b>
1️⃣ Send /start
2️⃣ Click on <b>Add</b> Button
3️⃣ Paste the address you want to track

<b>Understand DegenTogether notifications:</b>
<b>@</b> - Token Price
<b>MC</b> - Token Market Cap
<b>HOLDS</b> - Amount of tokens and supply percentage this wallet holds
`
}
