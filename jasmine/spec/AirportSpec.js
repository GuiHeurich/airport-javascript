describe ("Airport", function(){

  var airport;
  var plane = "plane";
  var weather;

  beforeEach(function(){
    airport = new Airport();
    weather = new Weather();
    // plane = new Plane();
  });

  describe("land plane", function(){
      it("instructs a plane to land", function(){
        airport.land(plane)
        expect(airport.planes).toContain(plane)
      });
    });

  });

});
