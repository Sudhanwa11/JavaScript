var mymusic = {
    "name" : "sudhanwa",
    "album" : "mr.lucky",
    "year" : "2024",
    "genre" : "hip-hop",
    "length" : "32:50",
    
    "mrlucky" : {
        "length" : "4:22",
        "genre" : "hip-hop",
        "streams" : "12000",
        "released" : "2022",
        "review" : {
            "pitchfork" : "100"
        }
    }
};

var r = mymusic.mrlucky.review["pitchfork"];

console.log(r);
