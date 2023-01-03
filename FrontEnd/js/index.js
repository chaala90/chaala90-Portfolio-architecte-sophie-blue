//envoyer une requête HTTP de type GET au service web(fetch: aller chercher)
fetch ("http://localhost:5678/api/works")
//récupérer le résultat de la requête au format json
.then(function (Res) {
       return Res.json();  
       console.log(Res)
})
.then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    // Une erreur est survenue
    console.log(err)
  })
