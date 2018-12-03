var grid_size;
var grid_num = 10;
var monsterList = new Array();
var buildingList = new Array();
var canvas;
var ctx;
var generate_num = 0;
var map;
var max_wave = 3;
var outer_frame = 0;
var current_wave = 0;
var if_build_status = false;
var selected_building = null;
var selected_grid = null;
var current_frame = 99;
var current_money = 300;
var score = 0;
var base = 100;
var current_wave = 0;
var game_timer = null;
var buildingType = [
  {
    imgId: 'building-0',
    power: 1,
    radius: 50,
    price: 50
  },
  {
    imgId: 'building-1',
    power: 3,
    radius: 60,
    price: 100
  },
  {
    imgId: 'building-2',
    power:5,
    radius:100,
    price: 200
  }
];
var monsterType = [
  {
    speed: 1.5,
    blood: 100
  },
  {

    speed: 4,
    blood: 200
  },
  {
    speed: 8,
    blood: 250
  }
];
var route = [
  {x: 1, y: 0, tx: 110, ty: 495},
  {x: 0, y: -1, tx: 110, ty: 165},
  {x: 1, y: 0, tx: 495, ty: 165},
  {x: 0, y: -1, tx: 495, ty: 25}
];


function buyBuilding() {
  if (if_build_status){
    current_money += buildingType[selected_building].price;

    document.getElementById("b-" + selected_building.toString()).style.display = "none";
  }
  selected_building = parseInt(this.id);
  if (current_money < buildingType[selected_building].price) {
    document.getElementById("warning").style.display = '';
    for(let i = 0; i < 2; i++){
     setTimeout(function(){ document.getElementById("warning").style.display = 'none';}, 200+i*400);
     setTimeout(function(){ document.getElementById("warning").style.display = '';}, 400+i*400);
    }
     setTimeout(function(){ document.getElementById("warning").style.display = 'none';}, 5000);
  } else {
    if_build_status = true;
    current_money -= buildingType[selected_building].price;

    document.getElementById("b-" + this.id).style.display = "";
    document.getElementById("b-" + this.id).style.left = (window.event.clientX+10).toString() + "px";
    document.getElementById("b-" + this.id).style.top = (window.event.clientY+10).toString() + "px";

    document.getElementById("money").innerHTML = "$ " + current_money.toString();
  }
}

function follow(e) {
  if (!if_build_status) return;
  document.getElementById("b-" + selected_building.toString()).style.left = (e.clientX+10).toString() + "px";
  document.getElementById("b-" + selected_building.toString()).style.top = (e.clientY+10).toString() + "px";
}

function modify() {
  if (!if_build_status) return;
  document.getElementById("cart").style.backgroundColor = "DimGray";
}

function reset() {
  if (!if_build_status) return;
  document.getElementById("cart").style.backgroundColor = "silver";
}

function returnBuilding() {
  if (if_build_status) {
    if_build_status = false;
    current_money += buildingType[selected_building].price;

    document.getElementById("b-" + selected_building.toString()).style.display = "none";
    document.getElementById("cart").style.backgroundColor = "silver";

    document.getElementById("money").innerHTML = "$ " + current_money.toString();
    selected_building = null;
  }
}

function place_building(e, clicked){
  if(!if_build_status)return;
  follow(e);
  var x = e.clientX;
  var y = e.clientY;
  var cx = parseInt(x/grid_size);
  var cy = parseInt((y-50)/grid_size);
  selected_grid = map.grid_List[cx][cy];
  if(clicked){
    if(selected_grid.can_build()){
      new_building = new Building(cx*grid_size, cy*grid_size, buildingType[selected_building]);
      
      document.getElementById("b-" + selected_building.toString()).style.display = "none";
      
      selected_building = null;
      if_build_status = false;
      if(selected_grid.id == -1){
        selected_grid.id = buildingList.length;
        buildingList.push(new_building);
      }
      else{//Replace pre-built tower.
        delete buildingList[selected_grid.id];
        buildingList[selected_grid.id] = new_building;
      }
    }
    else{
      document.getElementById("warning-build").style.display = '';
      setTimeout(function(){ document.getElementById("warning-build").style.display = 'none';}, 1000);
    }
  }
}

function clear_select_grid(){
  selected_grid = null;
}

function check(){
      if(generate_num == max_wave*10 && monsterList.length == 0){
          clearInterval(game_timer);
          let you_win = document.getElementById("you-win");
          ctx.drawImage(you_win, 0, 0);
          document.getElementById("shop").style.display = "none";
          document.getElementById("overstate").style.display = "";
          if (if_build_status) {
            document.getElementById("b-" + selected_building.toString()).style.display = "none";
            if_build_status = false;
          }
        }  
      else if(base == 0){
          clearInterval(game_timer);
          let game_over = document.getElementById("game-over");
          ctx.drawImage(game_over, 0, 0);
          document.getElementById("shop").style.display = "none";
          document.getElementById("overstate").style.display = "";
          if (if_build_status) {
            document.getElementById("b-" + selected_building.toString()).style.display = "none";
            if_build_status = false;
          }
      }

}




function loop(){
      current_frame++;
      if(current_frame == 100){
          current_frame = 0;
          if(generate_num < (1+current_wave)*10){
	            generate_num++;
            generate_monster(10, 495, monsterType[current_wave]);
          }
      }
	
      if((1+current_wave)*10 == generate_num && monsterList.length == 0){
    	   outer_frame++;
    	   if(outer_frame == 80 || monsterList.length === 0){
    		//When the last wave ends, wait for 100 frames, then generate next wave.
    		  outer_frame = 0;
    		  if(1+current_wave < max_wave){
              document.getElementById("warning-wave").style.display = '';
              for(let i = 0; i < 2; i++){
               setTimeout(function(){ document.getElementById("warning-wave").style.display = 'none';}, 200+i*400);
               setTimeout(function(){ document.getElementById("warning-wave").style.display = '';}, 400+i*400);
              }
               setTimeout(function(){ document.getElementById("warning-wave").style.display = 'none';}, 5000);
              current_wave++;
              document.getElementById("wave").innerHTML = "Wave " + (current_wave+1).toString() + "/3";
        }
	     }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      map.render();
      var remainingMonsters = new Array();

             for (var i = 0; i < monsterList.length; ++i)
             {
                // console.log(monsterList);
                monsterList[i].move();
                if (monsterList[i].render())
                {
                   remainingMonsters.push(monsterList[i]);
                }
                else delete monsterList[i];
             }
             delete monsterList;
             monsterList = remainingMonsters;

             for(var i = 0; i < buildingList.length; i++){
              buildingList[i].render();
              buildingList[i].kill_monster();
             }
             if(selected_grid){
              selected_grid.highlight();
             }
            check();
    }


function main(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    grid_size = canvas.width / grid_num;
    map = new map();
    //generate_monster(10, 10, monsterType[0]);
    game_timer = setInterval(loop, 50);
    document.getElementById ("0").addEventListener ("click", buyBuilding, false);
    document.getElementById ("1").addEventListener ("click", buyBuilding, false);
    document.getElementById ("2").addEventListener ("click", buyBuilding, false);
    document.getElementById ("cart").addEventListener ("click", returnBuilding, false);
}
