

function grid(id, x, y){
	this.id = id;
	this.x = x;
	this.y = y;
	//id = -1 if no previous building.Otherwise id represents the id of building(the index of building);
	this.can_build = true;

}


grid.prototype.highlight = function(){
	if(this.can_build == true){
		ctx.fillStyle = "rgba(255, 128, 0, 0.5)";
		ctx.fillRect(this.x*grid_size, this.y*grid_size, grid_size, grid_size);
	}
}