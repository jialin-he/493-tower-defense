var grid_size;
var grid_num = 10;
var monsterList = new Array();
var buildingList = new Array();
var canvas;
var ctx;
var map;
var if_build_status = false;
var selected_building = null;
var selected_grid = null;

var current_money = 300;
var score = 0;
var current_wave = 0;
var buildingType = [
  {
    imgId: 'building-0',
    power: 10,
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
    speed: 5,
    blood: 50
  },
  {
    speed: 10,
    blood: 100
  }
];

function buyBuilding(e) {
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
    generate_building(cx*grid_size, cy*grid_size, buildingType[selected_building]);
    selected_building = null;
    if_build_status = false;
  }
}

function clear_select_grid(){
  selected_grid = null;
}


function loop(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var remainingMonsters = new Array();

             for (var i = 0; i < monsterList.length; ++i)
             {
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
    generate_monster(10, 10, monsterType[0]);
    setInterval(loop, 50);
    document.getElementById ("0").addEventListener ("click", buyBuilding, false);
    document.getElementById ("1").addEventListener ("click", buyBuilding, false);
    document.getElementById ("2").addEventListener ("click", buyBuilding, false);
    document.getElementById ("cart").addEventListener ("click", returnBuilding, false);
}