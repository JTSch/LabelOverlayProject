var array = [
{x: 5, y: 10, label: "Moscow"},
{x: 10, y: 20, label: "S-Petersburg"},
{x: 55, y: 60, label: "Kazan"},
{x: 30, y: 45, label: "Kirov"},
{x: 35, y: 47, label: "Los-Angeles"},
{x: 35, y: 97, label: "NewYork"}, 
{x: 55, y: 130, label: "Berlin"},
{x: 80, y: 40, label: "Warsaw"},
{x: 75, y: 60, label: "Dusseldorf"},
{x: 330, y: 145, label: "Amsterdam"},
{x: 135, y: 180, label: "Paris"},
{x: 135, y: 97, label: "Rome"},
];

function createDots() {
  for (var i=0; i<array.length; i++) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.top = array[i].y + 'px';
    div.style.left = array[i].x + 'px';
    var span = document.createElement('span');
      div.appendChild(span);
      span.innerHTML = array[i].label;
  };

  var divs = document.getElementsByTagName('div');
  var divs2 = [].slice.call(divs); 
  for (var i=0; i<divs.length; i++) {
    var iCoords = divs[i].querySelector('span').getBoundingClientRect();
    console.log(iCoords)
   for (var j=0; j<divs2.length; j++) {
      var jCoords = divs2[j].getBoundingClientRect();
       //if (i == j) continue;
         if (jCoords.left > iCoords.left && jCoords.left < iCoords.right) {
            if (jCoords.top > iCoords.top && jCoords.top < iCoords.bottom) {
              divs[i].querySelector('span').innerHTML="";
            } else if (jCoords.bottom > iCoords.top && jCoords.bottom < iCoords.bottom) {
              divs[i].querySelector('span').innerHTML="";
            }
         } else if (jCoords.right > iCoords.left && jCoords.right < iCoords.right) {
            if (jCoords.bottom > iCoords.top && jCoords.bottom < iCoords.bottom) {
              divs[i].querySelector('span').innerHTML="";
            } else if (jCoords.top > iCoords.top && jCoords.top < iCoords.bottom) {
              divs[i].querySelector('span').innerHTML="";
            }
         } 
    }
  }
};
createDots();

//If Arrows are used instead of Objects

/*var array = [
[5, 10, "Moscow"],
[10, 20, "Spb"],
[55, 60, "Kazan"],
[30, 45, "Kirov"],
[35, 47, "Los-Angeles"],
[35, 97, "NewYork"], 
[55, 130, "Berlin"],
[80, 40, "Warsaw"],
[75, 60, "Dusseldorf"],
[330, 145, "Amsterdam"],
[135, 180, "Paris"],
[135, 97, "Rome"]
];

var width = 20,
height = 20;
function createDots() {
	for (var i=0; i<array.length; i++) {
		for (var j=0; j<array.length; j++) {
      if (i != j) {
			if ((array[i][0] - array[j][0] <= width) && (array[i][1] - array[j][1] <= height)) {
			
					array[i].splice(2, 1);
       
				}
			}
		}
	};
  for (var i=0; i<array.length; i++) {
  	var div = document.createElement('div');
  	document.body.appendChild(div);
  	div.style.top = array[i][0] + 'px';
  	div.style.left = array[i][1] + 'px';
  	if (array[i][2]) {
    	var span = document.createElement('span');
    	div.appendChild(span);
    	span.innerHTML = array[i][2];
	  }
  }
};
createDots();

 
/*var divs = document.getElementsByTagName('div');
  for (var i=0; i<divs.length; i++) {
   for (var j=0; j<divs.length; j++) {
      if (i !== j) {
        if ((divs[j].getBoundingClientRect().top - divs[i].getBoundingClientRect().top > 2.5) && (divs[i].getBoundingClientRect().bottom - divs[j].getBoundingClientRect().top > 2.5)) {
          divs[i].querySelector('span').innerHTML="";
        } else if ((divs[j].getBoundingClientRect().bottom - divs[i].getBoundingClientRect().top > 2.5) && (divs[i].getBoundingClientRect().bottom - divs[j].getBoundingClientRect().bottom > 2.5)) {
            divs[i].querySelector('span').innerHTML="";
        }
      }
    }
  }*/
    

	