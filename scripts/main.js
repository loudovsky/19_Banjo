const left = document.querySelector('.left')

fetch('./datas.json')
  .then(response => response.json())
  .then(data => {
        console.log(data);
        left.innerHTML= "";
        data.users.forEach(function(element){
            left.innerHTML += `<div class="image"><img src="${element.image}" alt="gif de ouf"></div>`
        })
      })
      .catch(error => {console.log("Erreur lors de la récup des données :", error);
    })