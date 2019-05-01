function Plane() {
  this.airport = []
};

Plane.prototype.landIn = function (airport) {
  if (this.airport.length === 1) {
    throw new Error("Plane already landed!");
  } else {
    this.airport.push(airport);
  }
};

Plane.prototype.takeOff = function (airport) {
  if (this.airport.length === 0) {
    throw new Error("Plane already took off!");
  } else {
    this.airport.pop(airport);
  }
};
