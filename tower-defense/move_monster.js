function Monster(x, y, type){
	//Define monster
	this.x = x;
	this.y = y;
	this.speed = type.speed;
	this.blood = type.blood;
	this.current_blood = type.blood;
	this.frame_num = 0;
	this.img = [document.getElementById('monster-1'),
				document.getElementById('monster-2'),
				document.getElementById('monster-3')];
}

function generate_monster(x, y, type){
	monsterList.push(new Monster(x, y, type));
}




Monster.prototype.render = function()
{
	var life_factor = this.current_blood / this.blood;
	ctx.drawImage(this.img[this.frame_num], this.x+grid_size/10, this.y+grid_size/10);
	this.frame_num++;
	this.frame_num = this.frame_num % 3;

	ctx.fillStyle = "#000";
	ctx.fillRect(this.x, this.y, grid_size, grid_size/10);
	ctx.fillStyle = "#f00";
	ctx.fillRect(this.x+grid_size/40, this.y+grid_size/40, life_factor*(grid_size - grid_size/20), (grid_size/10 - grid_size/20));
	if(this.current_blood <= 0){
		console.log("dead!");
		current_money += 50;
		score += 100;
	}
	if(this.x < canvas.width && this.current_blood > 0)return true;
	else{		
		return false;
	}
}

Monster.prototype.move = function()
{
	this.x += 1;


}
