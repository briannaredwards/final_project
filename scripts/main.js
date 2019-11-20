var mymap = L.map('mapid').setView([20.707409,-70.520052], 5.25);

L.tileLayer('https://api.mapbox.com/styles/v1/briannaedwards/ck2xhftpk0kxn1cnqgshbky4w/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpYW5uYWVkd2FyZHMiLCJhIjoiY2syeGd0MG5vMHE2dDNtbzJ3emhtOXl3diJ9.5N2Hl6x9_edGUmKKkv4hew', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);
