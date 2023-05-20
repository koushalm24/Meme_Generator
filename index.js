const generateMemeBtn = document.querySelector(".main .generate-btn");
const memeTitle = document.querySelector(".main .meme-title");
const memeImg = document.querySelector(".main img");
const memeAuthor = document.querySelector(".main .meme-author");

const update = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By : ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme").then((response) => response.json().then(data =>{
        update(data.url, data.title, data.author)
    }) );
}

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme()