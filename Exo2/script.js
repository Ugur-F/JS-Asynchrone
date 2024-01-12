
let resultContainer = document.createElement("div");
document.body.appendChild(resultContainer);

let input = document.getElementById('input');

document.getElementById('btn').addEventListener('click', function () {

    let word = input.value;
    console.log(word);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((json) => {
            // la fonction qui créé une nouvelle div pour afficher le résultat
            const resultDiv = document.createElement("div");
            resultDiv.textContent = `Name: ${json[0].word} | Definition: ${json[0].meanings[0].definitions[0].definition}`;

            // on lie la div résultat au conteneur de résultat
            resultContainer.appendChild(resultDiv);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

});


// document.getElementById('trash').addEventListener('click', function () {
//     resultDiv.textContent = ` `;
// });