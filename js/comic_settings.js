//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 12; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "jpg"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        mature: ,
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1,
        title: "Welcome (back)",
        date: writeDate(2025, 10, 2),
        altText: "A Little Angle Fox.",
        imageFiles: 7,
        authorNotes: `
            <p>Welcome to the New WebComic(NWC).</p>
            <p>┬⁠─⁠┬</p>
            `,
    },
    {
        pgNum: 2,
        title: "Old BlueCream",
        date: writeDate(2025, 7, 21),
        altText: "Old BlueCream",
        imageFiles: 9,
        authorNotes: `
            <p>Ugh! Damn it, Eric, why did you bring an possessed old animatronic from Afton Robotics? We're not in the 1980s or 1990s.🤦‍♂️</p>
            <p>┬⁠─⁠┬</p>
            `,
    },
    {
        pgNum: 3,
        title: "Think",
        date: writeDate(2025, 8, 10),
        altText: "23-Boy is cooked.",
        imageFiles: 7,
        authorNotes: `
            <p>Ouch! 23-Boy tries to hit his head with a hammer. 🤕🔨</p>
            <p>Credit:<br>
            • This character "23-Boy(a.k.a. Băiatul 23)" belongs to <a href="https://youtube.com/@lumealuidedo">DEDO's World(a.k.a. Lumea lui DEDO) from YouTube.</a></p>
            <p>┬⁠─⁠┬</p>
            `,
    },
    {
        pgNum: 4,
        title: "Thirst",
        date: writeDate(2025, 8, 19),
        altText: "Don't drink!",
        imageFiles: 6,
        authorNotes: `
            <p>Reminder: Do not drink afterwater from the river.</p>
            <p>┬⁠─⁠┬</p>
            `,
    },
    {
        pgNum: 5,
        title: "Play time",
        date: writeDate(2025, 9, 8),
        altText: "Play time!",
        imageFiles: 2,
        authorNotes: `
            <p>After finishing work and then play time.<br><br>It's better to play outside and touch the grass in the sun than to stay at home scrolling social media on a smartphone.</p>
            <p>┬⁠─⁠┬</p>
            `,
    },
    {
        pgNum: 6,
        title: "Andreea is...",
        date: writeDate(2025, 10, 1),
        altText: "IT'S SPOOKY MONTH!",
        imageFiles: 6,
        authorNotes: `
            <p>October 1st, Andreea is now a zombie.<br>IT'S SPOOKY MONTH!!</p>
            <img src="img/ITS_SPOOKY_MONTH.gif" alt="IT'S SPOOKY MONTH!" width="300">
            <p>Credit:<br>
            • This OC on the right "Pietrelle" belongs to @PietersonOficjal.<br>
            • Based on this movie scene(The Croods) - <a href="https://youtu.be/YUluLIr98qc">https://youtu.be/YUluLIr98qc</a><br>
            •Based on this meme(I'm Sorry Coach):<br>
            <img src="img/I'm_sorry.jpg" width="300">
            </p>
            <p>┬⁠─⁠┬</p>
            `,
    },
    {
        pgNum: 7,
        title: "Another eye",
        date: writeDate(2025,10,20),
        altText: "Another eye",
        imageFiles: 8,
        authorNotes: `
            <p>Andreea can see with her missing eye while she has powers in her heart.<br>And... Jack the Pumpkin is back.</p>
            <p>IT'S SPOOKY MONTH!!!</p>
            <img src="img/ITS_SPOOKY_MONTH.gif" alt="IT'S SPOOKY MONTH!" width="300">
            <p>Note: Jack the Pumpkin's body looks like "The Grand Pumpkin" from "The Simpsons".</p>
            <p>┬⁠─⁠┬</p>
        `
    },
    {
        pgNum: 8,
        title: "Happy Halloween + Bonus comic",
        date: writeDate(2025,10,31),
        altText: "Happy Halloween!👻🎃🦇",
        imageFiles: 9,
        authorNotes: `
        <p>UPDATE NOTE: On November 1st, I replaced the Green Cross Symbol with the Hospital Symbol in the bonus comic.<br>The Green Cross Symbol is not protected by law but the Symbol looks like a pharmacy.</p>
        <p>Bonus comic name: Zombie to normal</p>
        <p>
            Happy Halloween!👻🎃🦇<br>
            It's sad that Spooky Month is ending. :(</p>
        <p>Note: It's better to draw the useful medical symbols than the Red Cross.</p>
        <p>┬⁠─⁠┬</p>
        `
    },
    {
        pgNum: 9,
        title: "What they choose for developmemt",
        date: writeDate(2025,11,24),
        altText: "What they choose for developmemt",
        imageFiles: 1,
        authorNotes: `
        <p>For the next question, what they choose?<br>
        Game development, App development, or Web development?</p>
        <p>┬⁠─⁠┬</p>
        `
    },
    {
        pgNum: 10,
        title: "She found diamonds!",
        date: writeDate(2025,12,5),
        altText: "She found diamonds!",
        imageFiles: 1,
        authorNotes: `
        <p>
            Andreea found diamonds.<br>
            Who wants to play Minecraft?
        </p>
        <p>┬⁠─⁠┬</p>
        `
    },
    {
        pgNum: 11,
        title: "Birthday (2025)",
        date: writeDate(2025,12,14),
        altText: "Happy Birthday!!",
        imageFiles: 1,
        authorNotes: `
        <p>
            Today is my birthday!🥳🎂<br>
            Now I'm 22.
        </p>
        <p>┬⁠─⁠┬</p>
        `
    },
    {
        pgNum: 12,
        title: "Tired legs",
        date: writeDate(2025,12,15),
        altText: "Tired legs",
        imageFiles: 4,
        authorNotes: `
        <p>
            She has a ghost tail, right?<br>
            Lucky.
        </p>
        <p>┬⁠─⁠┬</p>
        `
    },
    
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
