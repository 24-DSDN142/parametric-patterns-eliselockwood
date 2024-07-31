//your parameter variables go here!
let xval = 97 // was 97
let yval = 97 // changes the position of the buttons (97 is the best y position value for middle button)
var eyeY = 62 // was 62 changes position on y axis where circle sits
var eyeSize = 5// was 5 changes size of eye circle
var eyewidth = 5 // 5 changes width of eye circle 
let detailcolour = 20 //was 200 - this changes the eye colour and the buttom colour i.e 100 is black, 200 is light grey in low opacity. 
var linewidth = 100 // was 100 - changes right snowman arm width & opacity 
let tophat = true; //change top hat to disappear 
let size = 5 // parameterized control over size of buttons

function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(GLIDE_WALLPAPER);
pWallpaper.resolution(A3);
pWallpaper.show_guide(false); //set this to false when you're ready to print

//Grid settings
pWallpaper.grid_settings.cell_width  = 80;
pWallpaper.grid_settings.cell_height = 200;
pWallpaper.grid_settings.row_offset  = 20;
}

function wallpaper_background() {
background(900, 900, 900,); //background colour RGB 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


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
    ellipse (xval, yval - 7, 5, 5) //top button
    ellipse (xval, yval, 5, 5) //second button
    ellipse (xval, yval + 7, 5, 5) //third button
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
