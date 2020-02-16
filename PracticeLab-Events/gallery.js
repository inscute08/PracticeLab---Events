function upDate(previewPic){
    var x = document.getElementById('image');
    var y = document.getElementById('image').innerHTML;
    var src = previewPic.getAttribute( "src" );
    x.style.backgroundImage = "url('" + src + "')";
    y = previewPic.alt;
}

function unDo(){
    var text = "Hover over an image below to display here.";
    x.style.backgroundImage = "url('')";
    y= text;
}