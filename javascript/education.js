function loadDetails(project){
  loadImage(project);
  loadText(project);
}

function loadProjects(){
  const container = document.getElementsByClassName('carousel__container');
  fetch("data.json")
    .then((resp) => resp.json())
    .then(function(data) {
      var projects = data.projects;
      return projects.map(function(project) {
        let div = createNode('div');
        div.setAttribute('class', 'carousel-item');
        let img = createNode('img');
        img.setAttribute('class', 'carousel-item__img');
        img.setAttribute('onmouseover', 'loadDetails('+project.image+')');
        img.src = project.source;
        append(div, img);
        append(container[0], div);
      })
    })
    .catch(function(err) {
      console.log('Fetch Load Projects Error: ', err);
    });
    loadDetails(0);
}

function loadText(project){
  fetch("data.json")
    .then((resp) => resp.json())
    .then(function(data) {
      var div_description = document.getElementsByClassName("details__description");
      clearElements(div_description[0]);
      var tittle = createNode("h1");
      tittle.setAttribute('class', 'tittle');
      tittle.innerHTML = data.projects[project].tittle;
      var stack = createNode("h3");
      stack.setAttribute('class', 'text');
      stack.innerHTML = data.projects[project].stack;
      var level = createNode("p");
      level.setAttribute('class', 'text');
      level.innerHTML = '<b>Level</b><br>' + data.projects[project].level;

      var githubText = createNode("p");
      if(data.projects[project].github){
        githubText.setAttribute('class', 'text');
        githubText.innerHTML = '<b>github</b><br>';
        var github = createNode("a");
        github.setAttribute('class', 'url');
        github.setAttribute("target", "_blank");
        github.text = data.projects[project].github.slice(18);
        github.href = data.projects[project].github;
        append(githubText, github);
      }

      var urlText = createNode("a");
      if(data.projects[project].url){
        urlText.setAttribute('class', 'text');
        urlText.innerHTML = '<b>url</b><br>';
        var url = createNode("a");
        url.setAttribute('class', 'url');
        url.setAttribute("target", "_blank");
        url.text = data.projects[project].url;
        url.href = data.projects[project].url;
        append(urlText, url);
      }

      var description = createNode("p");
      description.setAttribute('class', 'text');
      description.innerHTML = '<b>Brief Description</b><br>' + data.projects[project].description;

      append(div_description[0], tittle);
      append(div_description[0], stack);
      append(div_description[0], level);
      append(div_description[0], githubText);
      append(div_description[0], urlText);
      append(div_description[0], description);
    })
    .catch(function(err) {
      console.log('Fetch Load Text Error: ', err);
    });
}

function loadImage(project){
  var details__image = document.getElementsByClassName("details__image");
  var image = createNode("img");
  clearElements(details__image[0]);
  image.setAttribute('class', 'picture');
  console.log("../images/project_"+project+".png");
  image.src = "../images/project_"+project+".png";
  append(details__image[0], image);
}

// 
// STANDARD FUNCTIONS
// 

function clearElements(element){
  while(element.firstChild)
    element.removeChild(element.lastChild)
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}