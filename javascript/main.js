function loadDetails(project){
  loadImage(project);
  loadText(project);
}

function loadImage(project){
  var details__image = document.getElementsByClassName("details__image");
  var image = document.createElement("img");
  clearElements(details__image[0]);
  image.setAttribute("src", "../images/"+project+".png");
  image.setAttribute('class', 'picture');
  details__image[0].appendChild(image);
}

function loadText(project){
  fetch("data.json")
    .then(function(resp){
      return resp.json();
    })
    .then(function(data){
      console.log(data.projects[project].Tittle);
      var div_description = document.getElementsByClassName("details__description");
      clearElements(div_description[0]);
      var tittle = document.createElement("h1");
      tittle.setAttribute('class', 'tittle');
      tittle.innerHTML = data.projects[project].Tittle;
      div_description[0].appendChild(tittle);
    })
}

function clearElements(element){
  while(element.firstChild)
    element.removeChild(element.lastChild)
}