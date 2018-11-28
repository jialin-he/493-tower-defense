// function generate_building(x, y, type){
// 	buildingList.push(new Building(x, y, type));
// }


function Building(x, y, type){
	this.x = x;
	this.y = y;
	this.radius = type.radius;
	this.power = type.power;
	this.img = document.getElementById(type.imgId);
	this.wave = new Wave(x, y, 0);
	this.frame_num = 0;
}


function Wave(x, y, radius){
	this.x = x + 1/2*grid_size; //centering
	this.y = y + 1/2*grid_size;
	this.radius = radius;
}



Building.prototype.check_collision = function(monster){
	var d1 = Math.pow(monster.x - grid_size/2 - this.x, 2) + Math.pow(monster.y - grid_size/2 - this.y, 2);
	var d2 = Math.pow(monster.x + grid_size/2 - this.x, 2) + Math.pow(monster.y - grid_size/2 - this.y, 2);
	var d3 = Math.pow(monster.x - grid_size/2 - this.x, 2) + Math.pow(monster.y + grid_size/2 - this.y, 2);
	var d4 = Math.pow(monster.x + grid_size / 2 - this.x, 2) + Math.pow(monster.y + grid_size / 2 - this.y, 2);
	var squared_r = Math.pow(this.wave.radius, 2);
	return (d1 <= squared_r) || (d2 <= squared_r) || (d3 <= squared_r) || (d4 <= squared_r);


}


Building.prototype.kill_monster = function(){
	for(var i = 0; i < monsterList.length; i++){
		if(this.check_collision(monsterList[i])){
			if (this.power === 3) {
				monsterList[i].frozeFrame = 1;
				monsterList[i].speed = monsterList[i].ospeed - 1;
			} else {
				monsterList[i].current_blood -= this.power;
			}
		}
	}
}


Building.prototype.render = function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(this.img, this.x, this.y);
	if(this.wave.radius == this.radius){
		delete this.wave;
		this.wave = new Wave(this.x, this.y, 0);
		this.frame_num = 0;
	}

	if(this.wave.radius == 0){
		this.frame_num++;
	}
	if(this.frame_num == 60){
		this.wave.radius += 5;
	}
	ctx.beginPath();
	ctx.arc(this.wave.x, this.wave.y, this.wave.radius,0,2*Math.PI);
	ctx.stroke();
}