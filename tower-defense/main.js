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
var current_frame = 0;
var current_money = 300;
var score = 0;
var base = 100;
var current_wave = 0;
var buildingType = [
  {
    imgId: 'building-0',
    power: 1,
    radius: 50,
    price: 50
  },
  {
    imgId: 'building-1',
    power: 20,
    radius: 60,
    price: 100
  },
  {
    imgId: 'building-2',
    power:50,
    radius:50,
    price: 200
  }
];
var monsterType = [
  {
    speed: 1,
    blood: 100
  },
  {
    speed: 50,
    blood: 200
  },
  {
    speed: 100,
    blood: 300
  }
];
var route = [
  {x: 0, y: 1, tx: 10, ty: 385},
  {x: 1, y: 0, tx: 275, ty: 385},
  {x: 0, y: -1, tx: 275, ty: 220},
  {x: 1, y: 0, tx: 495, ty: 220},
  {x: 0, y: 1, tx: 495, ty: 550}
];


function buyBuilding(e) {
  if (if_build_status){
    current_money += buildingType[selected_building].price;
  }
  selected_building = parseInt(this.getAttribute('id'));
  if (current_money < buildingType[selected_building].price) {
    document.getElementById("warning").style.display = '';
    setTimeout(function(){ document.getElementById("warning").style.display = 'none';}, 1000);
  } else {
    if_build_status = true;
    current_money -= buildingType[selected_building].price;
    document.getElementById("money").innerHTML = "$ " + current_money.toString();
  }
}

function returnBuilding(e) {
  if (if_build_status) {
    if_build_status = false;
    current_money += buildingType[selected_building].price;
    document.getElementById("money").innerHTML = "$ " + current_money.toString();
    selected_building = null;
  }
}

function place_building(e, clicked){
  if(!if_build_status)return;
  var x = e.clientX;
  var y = e.clientY;
  var cx = parseInt(x/grid_size);
  var cy = parseInt(y/grid_size);
  selected_grid = map.grid_List[cx][cy];
  if(clicked){
    if(selected_grid.can_build){
      new_building = new Building(cx*grid_size, cy*grid_size, buildingType[selected_building]);
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


function loop(){
      current_frame++;
      if(current_frame == 100){
          current_frame = 0;
          if(generate_num < (1+current_wave)*10){
	    generate_num++;
            generate_monster(10, 10, monsterType[current_wave]);
          }
      }
	
      if(generate_num == 10*(1+current_wave)){
	outer_frame++;
	if(outer_frame == 1000){
		outer_frame = 0;
		if(1+current_wave < max_wave)
			current_wave++;
	}
      }

      if((1+current_wave)*10 == generate_num && monsterList.length == 0){
		alert("You win!")
	
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
    }

function main(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    grid_size = canvas.width / grid_num;
    map = new map();
    //generate_monster(10, 10, monsterType[0]);
    setInterval(loop, 50);
    document.getElementById ("0").addEventListener ("click", buyBuilding, false);
    document.getElementById ("1").addEventListener ("click", buyBuilding, false);
    document.getElementById ("2").addEventListener ("click", buyBuilding, false);
    document.getElementById ("cart").addEventListener ("click", returnBuilding, false);
}
