let ball;
function setup(){
    new Canvas(600, 400);
    background(220);

    world.gravity.y = 10;
}
function draw(){
    background(220);
    if(mouse.presses('right') || mouse.presses('left')){
        ball = new Sprite();
        ball.x = mouse.x;
        ball.y = mouse.y;
        ball.radius = 20;
        ball.collider = 'dynamic'; 
    }
}
