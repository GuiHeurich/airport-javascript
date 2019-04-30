function Weather() {
  this.random = (Math.floor(Math.random() * 10));
};

Weather.prototype.isStormy = function () {
  return (this.random > 6);
};
