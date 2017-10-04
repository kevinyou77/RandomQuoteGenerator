var quotes = [
    {
        id: 1,
        quoteContent: "Don't cry because it's over, smile because it happened",
        quoteAuthor: "Dr. Seuss"
    },
    {
        id: 2,
        quoteContent: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        quoteAuthor: "Marilyn Monroe"
    },
    {
        id: 3,
        quoteContent: "Be yourself; everyone else is already taken.",
        quoteAuthor: "Olivia Wilde"
    },
    {
        id: 4,
        quoteContent: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        quoteAuthor: "Bernard M. Baruch"
    }
];

function cycle () {
    var color = "#";
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    
    return rgb;
}

$("#next").on("click", function() {
    var cycleID = Math.floor(Math.random() * quotes.length);
    var color = cycle();

    $("#quoteContent").text('"' + quotes[cycleID].quoteContent + '"');
    $("#quoteAuthor").text(quotes[cycleID].quoteAuthor);
    $("body").animate({backgroundColor: color, color: color}, "slow");
    $("button").animate({color: color}, "slow");

    $(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?text=" + quotes[cycleID].quoteContent + " #quotes'");
});