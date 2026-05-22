async function ladeNachrichten() {
    const url = "https://www.tagesschau.de/api2u/news/";
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const ausgabe = document.getElementById("ausgabe");

    ausgabe.innerHTML = "";

    data.news.forEach(nachrichten => {
        ausgabe.innerHTML += `
        <h2>${nachrichten.title}</h2>
        <p>${nachrichten.firstSentence ?? ""}</p>
        <a href="${nachrichten.shareURL}" target="_blank">Artikel öffnen</a>
        <hr>
        `;
    })
}