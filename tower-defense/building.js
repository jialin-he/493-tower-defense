

function generate_building(x, y, type){
	buildingList.push(new Building(x, y, type));
}


function Building(x, y, type){
	this.x = x;
	this.y = y;
	this.radius = type.radius;
	this.power = type.power;
	this.img = document.getElementById(type.imgId);
	this.wave = new Wave(x, y, 0);

}


function Wave(x, y, radius){
	this.x = x + 1/2*grid_size; //centering
	this.y = y + 1/2*grid_size;
	this.radius = radius;
}


Building.prototype.render = function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(this.img, this.x, this.y);
	if(this.wave.radius == this.radius){
		delete this.wave;
		this.wave = new Wave(this.x, this.y, 0);
	}
	this.wave.radius += 5;
	ctx.beginPath();
	ctx.arc(this.wave.x, this.wave.y, this.wave.radius,0,2*Math.PI);
	ctx.stroke();
}