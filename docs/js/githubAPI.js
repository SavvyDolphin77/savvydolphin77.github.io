// A script that accesses the github API to pull info about repos
// to display on the website page.

const url = "https://api.github.com/users/savvydolphin77/repos?per_page=100";

// set this number to current boxes one has on the page as elements
var totalProjectsDisplay = 2;

// pulls data from the url defined above
$.get(url, function(data) {

  // a for loop that goes and adds the content from the data based on the highest stars
  for(let j = 0; j < totalProjectsDisplay; j++) {
    // below sorts and extracts data to variables for further use
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

    // part of code that takes the data and adds it to each html element
    $(document).ready(function() {
      $("#repoLink" + j).attr('href', repoLink);
      $("#repoTitle" + j).html(repoName);
      $("#repoStars" + j).html(repoStars);
      $("#repoDescription" + j).html(repoDescription);
      let languageList = $("#repoLanguageList" + j);
      setTimeout(function() {
        for(let i = 0; i < languages.length; i++) {
          languageList.append(`<li><strong>${languages[i]}</strong></li>`);
        }
      });
    });
  }
});
