var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
player_obj="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_obj=Img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({
            top:player_x,
       left:player_y
        });
        canvas.add(player_obj);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_obj=Img;
    block_obj.scaleToWidth(block_image_width);
        block_obj.scaleToHeight(block_image_height);
        block_obj.set({
            top:player_x,
       left:player_y
        });
        canvas.add(block_obj);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='39'){
        right();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='84'){
        new_image('trunk.jpg');
    }
    if(keypressed=='68'){
        new_image('dark_green.png');
        
    }
    if(keypressed=='76'){
        new_image('light_green.jpg');
    }
    if(keypressed=='71'){
        new_image('ground.png');
    }
    if(keypressed=='87'){
        new_image('wall.jpg');
    }
    if(keypressed=='89'){
        new_image('yellow_wall.png');
    }
    if(keypressed=='82'){
        new_image('roof.jpg');
    }
    if(keypressed=='67'){
        new_image('cloud.jpg');
    }
    if(keypressed=='85'){
        new_image('unique.png');
    }
    if(e.shiftKey==true&&keypressed=='80'){
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&keypressed=='77'){
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
}
function up(){
    if(player_y>0){

    
    player_y=player_y-block_image_height;
    canvas.remove(player_obj);
    player_update();
    }
}
function down(){
    if(player_y<500){

    
    player_y=player_y+block_image_height;
    canvas.remove(player_obj);
    player_update();
    }
}
function right(){
    if(player_x<800){

    
    player_x=player_x+block_image_width;
    canvas.remove(player_obj);
    player_update();
    }
}
function left(){
    if(player_x>0){

    
    player_x=player_x-block_image_width;
    canvas.remove(player_obj);
    player_update();
    }
}