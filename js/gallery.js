
function upDate(img){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    document.getElementById('image').style.backgroundImage = `url('${img.src}')`;

    
    document.getElementById('image').innerHTML= img.alt;
	}

	function unDo(){
	document.getElementById('image').style.backgroundImage = `url('')`;
    
    document.getElementById('image').innerHTML= "Hover over an image below to display here.";
	}