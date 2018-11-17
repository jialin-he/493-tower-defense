

function map(){
	this.grid_List = {}
	this.map_width = canvas.width;
	this.map_height = canvas.height;
	for(var i = 0; i < grid_num; i++){
		this.grid_List[i] = {};
		for(var j = 0; j < grid_num; j++){
			gd = new grid(-1, i, j);
			this.grid_List[i][j] = gd;
		}
	console.log(this.grid_List);
	}//Initialize the grid with grid_num x grid_num

}