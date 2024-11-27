import Notification from "./Notification"

let notifications = [
    {
        subject: "Valorant",
        content: "Room ID for the game is something else",
        date: "10/12/2024"
    },
    {
        subject: "CS:GO",
        content: "The match will start in 15 minutes, join the lobby ASAP!",
        date: "11/15/2024"
    },
    {
        subject: "Dota 2",
        content: "The team captain must submit the final roster by tonight.",
        date: "12/01/2024"
    },
    {
        subject: "FIFA 24",
        content: "Quarter-final matches rescheduled to 12 PM tomorrow.",
        date: "11/20/2024"
    },
    {
        subject: "Rocket League",
        content: "Warm-up matches will be held at 10 AM.",
        date: "11/25/2024"
    },
    {
        subject: "Apex Legends",
        content: "New map update available, ensure your game is up to date.",
        date: "12/05/2024"
    },
    {
        subject: "PUBG",
        content: "Join Discord for exclusive giveaways during the match.",
        date: "11/30/2024"
    },
    {
        subject: "League of Legends",
        content: "Draft phase rules have been updated, check the latest guidelines.",
        date: "11/28/2024"
    },
    {
        subject: "Overwatch 2",
        content: "Tournament skins are now unlocked for your account.",
        date: "11/10/2024"
    },
    {
        subject: "Fortnite",
        content: "Duos mode is now live, register your partner before the deadline.",
        date: "12/08/2024"
    },
    {
        subject: "Call of Duty: Warzone",
        content: "Airdrop crates will have special items in the semi-finals.",
        date: "11/17/2024"
    },
    {
        subject: "Minecraft",
        content: "Build competition will begin at 2 PM in the dedicated server.",
        date: "12/04/2024"
    },
    {
        subject: "Rainbow Six Siege",
        content: "New operators are banned in the tournament until further notice.",
        date: "11/13/2024"
    },
    {
        subject: "Hearthstone",
        content: "Deck submissions close tonight at midnight.",
        date: "12/02/2024"
    },
    {
        subject: "Smash Bros Ultimate",
        content: "Final bracket draw will be livestreamed tomorrow.",
        date: "11/19/2024"
    },
    {
        subject: "Tekken 8",
        content: "Don't miss the warm-up session with pro players at 6 PM.",
        date: "12/09/2024"
    },
    {
        subject: "Street Fighter 6",
        content: "Prepare for the combo challenge event at 4 PM.",
        date: "12/06/2024"
    },
    {
        subject: "NBA 2K24",
        content: "Player stats have been updated, check your team's lineup.",
        date: "11/21/2024"
    },
    {
        subject: "Clash Royale",
        content: "Clan battles will start in the next 30 minutes.",
        date: "11/29/2024"
    },
    {
        subject: "Brawlhalla",
        content: "Round robin phase extended by an extra day.",
        date: "12/03/2024"
    },
    {
        subject: "Genshin Impact",
        content: "Treasure hunt event starts at midnight, be prepared!",
        date: "11/18/2024"
    },
    {
        subject: "Splatoon 3",
        content: "Ink your way to victory in the team vs. team event tomorrow.",
        date: "12/07/2024"
    },
    {
        subject: "StarCraft II",
        content: "Base defense strategies will be discussed in the workshop.",
        date: "11/14/2024"
    },
    {
        subject: "World of Warcraft",
        content: "Guild raid scheduled for 8 PM, all players must be online.",
        date: "11/22/2024"
    },
    {
        subject: "Mortal Kombat 1",
        content: "Fatality competition starts this weekend, sign up now!",
        date: "12/10/2024"
    },
    {
        subject: "Pokemon Unite",
        content: "Team registration deadline extended by 24 hours.",
        date: "12/11/2024"
    }
];

// notifications = null

export default function Notifications()
{
    return (<div className="bg-cover bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/Sprinkle.svg)] h-full w-screen">
        <div className="backdrop-blur-[2px] h-full w-full">
            <div className="relative gap-1 top-1 p-1 flex flex-col grow h-[100%] w-[97%] mx-auto border-2 border-gray-800 rounded-[1.5em] bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg shadow-lg overflow-y-auto">
                {
                    notifications? notifications.map((notification, index)=>{
                        return (<Notification key={index} subject={notification.subject} content={notification.content} date={notification.date}/>)
                    }) : <div className="text-gray-400 m-auto">No Notifications</div>
                }
            </div>
        </div>

    </div>)
}