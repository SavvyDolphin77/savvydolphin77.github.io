// A script that accesses the github API to pull info about repos
// to display on the website page.

const url = "https://api.github.com/users/savvydolphin77/repos?per_page=100";
var totalProjectsDisplay = 2;

$.get(url, function(data) {

  for(let j = 0; j < totalProjectsDisplay; j++) {
    let sortedRepos = data.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count));
    let repoName = sortedRepos[j].name;
    let repoDescription = sortedRepos[j].description;
    let repoLink = sortedRepos[j].html_url;
    let repoStars = sortedRepos[j].stargazers_count;
    let languages = [];
    $.get(sortedRepos[j].languages_url, function(languageData) {
      for(let i = 0; i < Object.keys(languageData).length; i++) {
        languages.push(Object.keys(languageData)[i]);
      }
    });
    $(document).ready(function() {
      $("#repoLink" + j).attr('href', repoLink);
      $("#repoTitle" + j).html(repoName);
      $("#repoStars" + j).html(repoStars);
      $("#repoDescription" + j).html(repoDescription);
      //New Code
      let languageList = $("#repoLanguageList" + j);
      setTimeout(function() {
        for(let i = 0; i < languages.length; i++) {
          languageList.append(`<li><strong>${languages[i]}</strong></li>`);
        }
      });
    });
  }



});
