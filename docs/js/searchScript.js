// Javascript Program from W3Schools which uses the php file
// to implement a search bar feature and modified by Conner Harbaugh
function showResult(str) {
  if (str.length==0) {
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("searchBarResults").innerHTML=this.responseText;
      document.getElementById("searchBarResults").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","../php/searchForQuery.php?q="+str,true);
  xmlhttp.send();
}
