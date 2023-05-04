// Declare your genre arrays here
let action = ["https://pic-bstarstatic.akamaized.net/ugc/4c382d24680de5a48a55bd28b3ca4f67.jpg@960w_540h_1e_1c_1f.webp", "https://m.media-amazon.com/images/M/MV5BMGNmMWI4MGUtYmU0ZS00ZDkxLTgzMTAtZDU4YmQ1MDM3Y2IyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg ", "https://upload.wikimedia.org/wikipedia/en/4/40/Virtua_Fighter_Anime.jpg"];
console.log(action);
let adventure = ["https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Case_Closed_2nd_Key_Visual.jpg/220px-Case_Closed_2nd_Key_Visual.jpg ", "https://pics.filmaffinity.com/wan_pisu_one_piece-830418147-mmed.jpg", "https://lzd-img-global.slatic.net/g/p/5dc2b7f706805009630e0a914f50cc47.jpg_720x720q80.jpg"];
console.log(adventure);

let drama = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQ0hdoM-ZfaQJwbzkMysx581zDXT6DiMXE_ZWE-5a3LOCcyd1mrsW5sFGRRnAIE-t8Zo&usqp=CAU", "https://m.media-amazon.com/images/M/MV5BMzg4YzFkNWEtYmM3YS00NzVhLTg3ZDUtMjk1Y2Q3ZjljNzBiXkEyXkFqcGdeQXVyMTE2MDU0NzAw._V1_.jpg", "https://static.wikia.nocookie.net/voice-actors-from-the-world/images/4/43/Anime_Himitsu_no_Hanazono.png/revision/latest?cb=20170827054415", "https://static.wikia.nocookie.net/voice-actors-from-the world/images/4/43/Anime_Himitsu_no_Hanazono.png/revision/latest?cb=20170827054415"];
console.log(drama);
// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");
// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
    let genreInput = document.querySelector(".input1").value;
    if (genreInput === "action") {
        for (let actionMovie of action) {
            let img = "<img src=" + actionMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }

    } else if (genreInput === "adventure") {
        for (let adventureMovie of adventure) {
            let img = "<img src=" + adventureMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreInput === "drama") {
        for (let dramaMovie of drama) {
            let img = "<img src=" + dramaMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    }

};
let suggestButton = document.querySelector(".Suggest");
suggestButton.onclick = function() {
let photoInput = document.querySelector(".input2").value;
action.push(photoInput);
drama.push(photoInput);
adventure.push(photoInput);
let img = "<img src =" + photoInput + ">";
result.insertAdjacentHTML("beforebegin", "<p>" + "Thank you for your suggestions!" + "</p>");
};