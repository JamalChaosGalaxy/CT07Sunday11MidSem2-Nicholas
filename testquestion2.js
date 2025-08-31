let ball;
let floor;
function setup(){
    new Canvas(600, 400);


    world.gravity.y = 10;
    floor = new Sprite(0, 400, 1400, 30);
    floor.colour = "blue";
    floor. collider = 'static';

}
function draw(){
    background(220);
    if(mouse.presses('right') || mouse.presses('left')){
        ball = new Sprite();
        ball.x = mouse.x;
        ball.y = mouse.y;
        ball.radius = 20;
        ball.collider = 'dynamic'; 
        ball.bounciness = 0.5;
    }
}