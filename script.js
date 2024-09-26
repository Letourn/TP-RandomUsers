// Fetch de l'api
const endpoint = "https://randomuser.me/api/?results=50";
// Définition de la constante tableau basé sur le tableau HTML
const tableau = document.getElementById('Tableau');

fetch(endpoint)
// En cas de réussote
.then(
    function (response) {
        console.log(response.status)
        if (response.status === 200)
        {
            // Si le statut est à 200 on parse en JSON
            response.json()
            .then(
                (data) => {
                    console.log(data);
                    const users = data.results
                    users.forEach((user) => {

                    });
                }
            )
        }
    },

    // Si le statut n'est pas 200 afficher erreur
    function (error) {
        console.log(error);
    }
)