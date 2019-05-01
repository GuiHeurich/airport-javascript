describe("Planes", function(){
  var airport;
  var weather;
  var plane;

  beforeEach(function(){
    airport = "airport";
    plane = new Plane();
    weather = "weather";
  });

  it("lands in an airport", function() {
    plane.landIn(airport);
    expect(plane.airport.length).toEqual(1);
  });

  it("can't land if has already landed", function(){
    plane.landIn(airport);
    expect( function () { plane.landIn(airport) } ).toThrow(new Error("Plane already landed!"))
  });

  it("takes off from an airport", function(){
    plane.landIn(airport);
    plane.takeOff(airport);
    expect(plane.airport.length).toEqual(0);
  });

  it("can't take off if has already taken off", function(){
    plane.landIn(airport);
    plane.takeOff(airport);
    expect( function () { plane.takeOff(airport) } ).toThrow(new Error("Plane already took off!"))
  });
  
});
