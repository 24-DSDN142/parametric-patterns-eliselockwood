//your parameter variables go here!
  let xval = 100 // was 115
  let yval = 100 
  var eyeY = 62 //was 62 changes position on y axis where circle sits
  var eyeSize = 5// was 5 changes size of eye circle
  var eyewidth = 5 // 5 changes width of eye circle 
  let detailcolour = 100 //was 200 - this changes the eye colour and the buttom colour i.e 100 is black, 200 is light grey in low opacity. 
  var linewidth = 10 // was 100 - changes right snowman arm width & opacity 
  let tophat = true; //change top hat to disappear 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 180;
}

function wallpaper_background() {
  background(17, 100, 90, ); //background colour RGB 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//var x = 100;
//var x ellipseY = 150; 
let xval = 100 // changes buttons placement 
let yval = 100 
/// dark grey - 10

    stroke (10) //outline of snowman in a dark grey
    circle (100,150,80,20) //circle at the bottom of the snowman
    ellipse(100, 100, 50, 50); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
    circle (100,70,30,40) 
    line (80, 100, 50, 70) //Left arm on snowman
   
    //set the colour fill to grey 
    stroke (100)   

    //snowman eyes
    //fill (200);
    fill(detailcolour); 
    ellipse(95, eyeY, eyewidth, eyeSize); //left eye 
    ellipse(105, eyeY, eyewidth, eyeSize) //right eye
  
    //snowman buttons
    ellipse (xval, 90, 5, 5) //top button
    ellipse (xval, 97, 5, 5) //second button
    ellipse (xval, 104, 5, 5) //third button
    fill(200)

    stroke (linewidth) //outline of snowman in a dark grey

    let topHat = true; //change top hat to disappear 
    if (tophat) {
    //Draw a rectangle on top of the circle (bottom of the hat) 
    rect (70, 50, 60, 6);
    //Draw rectangle on top of the bottom of the hat (top of the hat square) 
    rect (80, 40, 40, 9); 
  }

    line (120, 100, 140, 70) 
    triangle (101, 70, 120, 79)
    }
