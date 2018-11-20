import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.sass']
})
export class PlayGameComponent implements OnInit {

  private grid_size;
  private grid_num = 10;
  private monsterList = new Array();
  private buildingList = new Array();
  private canvas;
  private ctx;
  private map;
  private if_build_status = false;
  private selected_building = null;
  private selected_grid = null;
  private current_frame = 0;
  private current_money = 300;
  private score = 0;
  private base = 100;
  private current_wave = 0;
  private buildingType = [
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
  private monsterType = [
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
  private route = [
    {x: 0, y: 1, tx: 10, ty: 385},
    {x: 1, y: 0, tx: 275, ty: 385},
    {x: 0, y: -1, tx: 275, ty: 220},
    {x: 1, y: 0, tx: 495, ty: 220},
    {x: 0, y: 1, tx: 495, ty: 550}
  ];



  constructor() { }

  ngOnInit() {
  }

//   private buyBuilding(e) {
//     if (this.if_build_status){
//       this.current_money += this.buildingType[this.selected_building].price;
//     }
//     this.selected_building = parseInt(this.id);
//     if (current_money < buildingType[selected_building].price) {
//       document.getElementById("warning").style.display = '';
//       setTimeout(function(){ document.getElementById("warning").style.display = 'none';}, 1000);
//     } else {
//       if_build_status = true;
//       current_money -= buildingType[selected_building].price;
//       document.getElementById("money").innerHTML = "$ " + current_money.toString();
//     }
//   }
  
//   function returnBuilding(e) {
//     if (if_build_status) {
//       if_build_status = false;
//       current_money += buildingType[selected_building].price;
//       document.getElementById("money").innerHTML = "$ " + current_money.toString();
//       selected_building = null;
//     }
//   }
  
//   function place_building(e, clicked){
//     if(!if_build_status)return;
//     var x = e.clientX;
//     var y = e.clientY;
//     var cx = parseInt(x/grid_size);
//     var cy = parseInt(y/grid_size);
//     selected_grid = map.grid_List[cx][cy];
//     if(clicked){
//       if(selected_grid.can_build){
//         new_building = new Building(cx*grid_size, cy*grid_size, buildingType[selected_building]);
//         selected_building = null;
//         if_build_status = false;
//         if(selected_grid.id == -1){
//           selected_grid.id = buildingList.length;
//           buildingList.push(new_building);
//         }
//         else{//Replace pre-built tower.
//           delete buildingList[selected_grid.id];
//           buildingList[selected_grid.id] = new_building;
//         }
//       }
//       else{
//         document.getElementById("warning-build").style.display = '';
//         setTimeout(function(){ document.getElementById("warning-build").style.display = 'none';}, 1000);
//       }
//     }
//   }
  
//   function clear_select_grid(){
//     selected_grid = null;
//   }
  
  
//   function loop(){
//         current_frame++;
//         if(current_frame == 100){
//             current_frame = 0;
//             if(monsterList.length < 10){
//               generate_monster(10, 10, monsterType[0]);
//             }
//         }
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         map.render();
//         var remainingMonsters = new Array();
  
//                for (var i = 0; i < monsterList.length; ++i)
//                {
//                   // console.log(monsterList);
//                   monsterList[i].move();
//                   if (monsterList[i].render())
//                   {
//                      remainingMonsters.push(monsterList[i]);
//                   }
//                   else delete monsterList[i];
//                }
//                delete monsterList;
//                monsterList = remainingMonsters;
  
//                for(var i = 0; i < buildingList.length; i++){
//                 buildingList[i].render();
//                 buildingList[i].kill_monster();
//                }
//                if(selected_grid){
//                 selected_grid.highlight();
//                }
//       }
  
//   function main(){
//       canvas = document.getElementById('canvas');
//       ctx = canvas.getContext('2d');
//       grid_size = canvas.width / grid_num;
//       map = new map();
//       //generate_monster(10, 10, monsterType[0]);
//       setInterval(loop, 50);
//       document.getElementById ("0").addEventListener ("click", buyBuilding, false);
//       document.getElementById ("1").addEventListener ("click", buyBuilding, false);
//       document.getElementById ("2").addEventListener ("click", buyBuilding, false);
//       document.getElementById ("cart").addEventListener ("click", returnBuilding, false);
//   }

}
