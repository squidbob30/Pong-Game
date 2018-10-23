var sketchProc = function(processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400); 
       
        // Program goes here
//
//Pong Game
//
// game w/ two paddles where you stop a ball from leaving the screen
//
//authur: Alex Turnbull
// Date: 9/12/2018

//ball variables
var ballX, ballY, ballXSPD, ballYSPD, ballRadius;
ballX = 200;
ballY = 200;
ballXSPD = 3;
ballYSPD = -5;
ballRadius = 10;

//paddle variables
var paddleX, paddleY, paddleH, paddleW;
paddleX = 150;
paddleY = 350;
paddleH = 20;
paddleW = 100;
var bounceCommands = function() {
    //bounce right side
    if (ballX >= width - ballRadius) {
        ballXSPD = ballXSPD * -1;
    }
    //bounce left side
    if (ballX <= ballRadius){
        ballXSPD = ballXSPD * -1;
    }
    //bounce off roof
    if (ballY <= ballRadius){ 
        ballYSPD = ballYSPD*-1;
    }
    //stop ball at bottom
    if (ballY >= height - ballRadius){
        
        
        ballYSPD = 0;
        ballXSPD = 0;
    }
    
   //bounce off paddle
   if (ballY + ballRadius >= paddleY  &&
      ballX >= paddleX && ballX <= paddleX + paddleW) { 
          
          ballYSPD = -ballYSPD;
    }
};
draw = function() {
    
    // moving ball in current direction
    ballX = ballX + ballXSPD;
    ballY = ballY + ballYSPD;
    
    //background
    background(0, 0, 0);
    
    fill(255, 255, 255);
    ellipse(ballX, ballY, ballRadius*2, ballRadius*2);
    
    //draw the paddle (lower(player)
    fill(255, 0, 0);
    rect(paddleX, paddleY, paddleW, paddleH);


     //move paddle left (A key)
   if(keyIsPressed && key.toString() === 'a') {
       paddleX -= 10;
    //move paddle right (d key)
   }
   if(keyIsPressed && key.toString() === 'd') {
       paddleX += 10;
    }
    bounceCommands();
};
   

            }
        }
    
