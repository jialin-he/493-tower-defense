function Monster(x, y, type){
	//Define monster
	this.x = x;
	this.y = y;
	this.frozeFrame = 0;
	this.ospeed = type.speed;
	this.speed = type.speed;
	this.blood = type.blood;
	this.current_blood = type.blood;
	this.frame_num = 0;
	this.img = [document.getElementById(type.id+'1'),
				document.getElementById(type.id+'2'),
				document.getElementById(type.id+'3')];
	this.ice = document.getElementById('ice');
	this.index = 0;
}

function generate_monster(x, y, type){
	monsterList.push(new Monster(x, y, type));
}




Monster.prototype.render = function()
{
	var life_factor = this.current_blood / this.blood;
	ctx.drawImage(this.img[this.frame_num], this.x+grid_size/10, this.y+grid_size/10);
	if (this.frozeFrame > 0) {
		ctx.drawImage(this.ice, this.x+grid_size/10, this.y+grid_size/10);
		this.frozeFrame++;
		if (this.frozeFrame === 500) {
			this.speed = this.ospeed;
			this.frozeFrame = 0;
		}
	} else {
		this.frame_num++;
		this.frame_num = this.frame_num % 3;
	}

	ctx.fillStyle = "#000";
	ctx.fillRect(this.x, this.y, grid_size, grid_size/10);
	ctx.fillStyle = "#f00";
	ctx.fillRect(this.x+grid_size/40, this.y+grid_size/40, life_factor*(grid_size - grid_size/20), (grid_size/10 - grid_size/20));
	if(this.current_blood <= 0){
		console.log("dead!");
		current_money += 50;
		score += 100;
		document.getElementById("score").innerHTML = score.toString();
		document.getElementById("money").innerHTML = "$ " + current_money.toString();
	}
	if(this.index < route.length && this.current_blood > 0)return true;
	else{		
		return false;
	}
}

Monster.prototype.move = function()
{
	if (this.x == route[this.index].tx && this.y == route[this.index].ty) {
		this.index ++;
		if (this.index >= route.length) {
			// arrive at base
			base -= 20;
			if (base == 0) {
				
			} else {
				if (base == 80) {
					document.getElementById("base").style.width = "80%";
				}
				else if (base == 60) {
					document.getElementById("base").style.width = "60%";
					document.getElementById("base").classList.remove("progress-bar-success");
					document.getElementById("base").classList.add("progress-bar-info");
				}
				else if (base == 40) {
					document.getElementById("base").style.width = "40%";
					document.getElementById("base").classList.remove("progress-bar-info");
					document.getElementById("base").classList.add("progress-bar-warning");
				}
				else {
					document.getElementById("base").style.width = "20%";
					document.getElementById("base").classList.remove("progress-bar-warning");
					document.getElementById("base").classList.add("progress-bar-danger");
				}
			}
			return;
		}
	}
	if(Math.abs(this.speed*route[this.index].x) > Math.abs(route[this.index].tx - this.x) ){
		this.x = route[this.index].tx;
	}
	else this.x +=  this.speed*route[this.index].x;
	if(Math.abs(this.speed*route[this.index].y) > Math.abs(route[this.index].ty - this.y) ){
		this.y = route[this.index].ty;
	}
	else this.y += this.speed*route[this.index].y;
	return;
}