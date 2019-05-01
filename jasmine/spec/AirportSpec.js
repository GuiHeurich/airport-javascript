describe ("Airport", function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport(16);
    plane = "plane";
  });

    it("instructs a plane to land when not stormy", function(){
        spyOn(airport, 'isStormy').and.returnValue(false)
        airport.land(plane)
        expect(airport.planes).toContain(plane)
      });

    it("prevents a plane from landing when stormy", function(){
      spyOn(airport, 'isStormy').and.returnValue(true)
      expect( function() { airport.land(plane); } ).toThrow(new Error("Too stormy to land!"))
    });

    it("instructs a plane to take off when not stormy", function(){
      spyOn(airport, 'isStormy').and.returnValue(false);
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });

    it("prevents a plane from taking off when stormy", function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect( function() { airport.takeOff(plane); }).toThrow(new Error("Too stormy for take off!"))
    });

    it('prevents a plane from landing if landed planes is equal to 16', function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
      var i;
      for (var i = 0; i < 16; i++ ) { airport.land(plane); };
      expect( function() { airport.land(plane); } ).toThrow(new Error("Airport capacity full!"));
    });

});
