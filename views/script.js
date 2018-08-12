var xhr = new XMLHttpRequest();

var href = "data?location=" + encodeURIComponent(window.location);

xhr.open('GET', href, true);

xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  }
}
