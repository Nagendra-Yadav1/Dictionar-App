const DisplayData = (result) => {
    let div = document.createElement("div");
    document.getElementById("interface").appendChild(div);
    div.classList.add("text");
    document.querySelector(".text").innerHTML=" "
    div.innerHTML = `
    <h2>Word : <span>${result[0].word}</span></h2>
    <p>Meaning : <span>${result[0].meanings[0].definitions[0].definition}</span></p>
    <p>Example : <span>${result[0].meanings[0].definitions[0].example==undefined ? "Data Not Found" : result[0].meanings[0].definitions[0].example}</span></p>
    <p>Synonyms : <span>${result[0].meanings[0].definitions[0].synonyms==undefined ||  " " ? "Synonyms Not Found": result[0].meanings[0].definitions[0].synonyms}</span></p>
    <button id="linkButton" ><a href="${result[0].sourceUrls}" target="_blank">More Details</a></button>
    `;
};
const onclickData = async (searchInput) => {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`);
    let result = await response.json();
    DisplayData(result);
}
document.getElementById("searchBtn").addEventListener("click", () => {
    const searchInput = document.getElementById("input").value;
    if (searchInput == "") {
        alert("Please Wright Someting")
    }
    else {
        onclickData(searchInput)
    }
});






























