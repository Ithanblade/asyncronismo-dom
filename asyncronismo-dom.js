//Ithan Camacho
// Link de la coleccion de API's https://public-api-lists.github.io/public-api-lists/
//API usada: https://catfact.ninja
//Endpoint: /fact

//Usando then y catch
fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
        console.log('Hecho numero 1 sobre gatos:\n', data.fact);
    })
    .catch((error) => {
        console.log('Error:', error);
    });

//Usando async y await
const getCatFact = async () => {
    try {
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        console.log('Hecho numero 2 sobre gatos:\n', data.fact);
    } catch (error) {
        console.log('Error:', error);
    }
}

getCatFact();



