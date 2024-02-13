const left = document.querySelector('.left')
const right = document.querySelector('.right')

fetch('./datas.json')
  .then(response => response.json())
  .then(data => {
        console.log(data);
        data.users.forEach(function(element, index){
            left.innerHTML += `<img src="${element.image}" alt="img de célib" class="image" data-index="${index}">`
        })
      })
      .catch(error => {console.log("Erreur lors de la récup des données :", error);
    })

function generate(index) {
  fetch('./datas.json')
  .then(response => response.json())
  .then(data => {
        console.log(data);
        right.innerHTML = `<img src="${data.users[index].image}" alt="img de célib"><h3>${data.users[index].name}</h3><h4>${data.users[index].age} ans</h4><a href="mailto:${data.users[index].email}">💌</a><p>${data.users[index].address.street} - ${data.users[index].address.city} (${data.users[index].address.country})</p>`
      })
      .catch(error => {console.log("Erreur lors de la récup des données :", error);
    })
}

left.addEventListener('click', function(e) {
    if (e.target.classList.contains('image')) {
      let position = parseInt(e.target.getAttribute('data-index'));
      console.log(position);
      generate(position);
    }
  });