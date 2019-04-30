function Airport(){
  this.capacity = 0;
  this.planes = [];
};

Airport.prototype.land = function (plane) {
  return this.planes.push(plane);
};
