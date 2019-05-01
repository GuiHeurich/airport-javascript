
function Airport(capacity, weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._capacity = capacity;
  this.planes = [];
};

Airport.prototype.land = function (plane) {
  if (this.isStormy()){
    throw new Error("Too stormy to land!");
  } else if (this.planes.length === 16) {
    throw new Error("Airport capacity full!")
  } else {
    return this.planes.push(plane);
  }
};

Airport.prototype.take_off = function (plane) {
  if (this.isStormy()) {
    throw new Error("Too stormy for take off!");
  } else {
    return this.planes.pop();
  };

};

Airport.prototype.hangar = function () {
  return this.planes;
};

Airport.prototype.isStormy = function () {
    return this._weather;
  };
