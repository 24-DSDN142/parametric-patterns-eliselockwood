//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

var eyeY = 64 //was 62
var eyeSize = 8// was 5

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(200); //grey
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//var x = 100;
//var x ellipseY = 150; 
let xval = 100
let yval = 100
/// dark grey - 10

    stroke (10) //outline of snowman in a dark grey
    circle (100,150,80,20) //circle at the bottom of the snowman
    ellipse(100, 100, 50, 50); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
    circle (100,70,30,40) 
    line (80, 100, 50, 70) //Left arm on snowman
   
     //set the colour fill to grey 
     stroke (100)   

    // snowman eyes
    fill (255);
    ellipse(95, eyeY, 5, eyeSize); //left eye 
    ellipse(105, eyeY, 5, eyeSize) //right eye
  
    
    //buttons
    ellipse (xval, 90, 5, 5) //top button
    ellipse (xval, 97, 5, 5) //second button
    ellipse (xval, 104, 5, 5) //third button
    
    stroke (10) //outline of snowman in a dark grey
    
    // Draw a rectangle on top of the circle (bottom of the hat)
    rect(70, 50, 60, 6);
    
    //Draw rectange on top of the bottom of the hat (top of the hat square)
    rect(80, 40, 40, 9);
    line (120, 100, 140, 70) 
    triangle (101, 70, 120, 79)
    }
