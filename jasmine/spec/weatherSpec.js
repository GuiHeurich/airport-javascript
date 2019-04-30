describe ("Weather", function() {

  var weather;
  beforeEach(function() {
    weather = new Weather();
  });


  describe ("When stormy", function() {
    it ("returns true", function() {
      spyOn(weather, "isStormy").and.returnValue(true);
      expect(weather.isStormy()).toEqual(true)
    });
  });

  describe ("When NOT stormy", function() {
    it ("returns false", function() {
      spyOn(weather, "isStormy").and.returnValue(false);
      expect(weather.isStormy()).toEqual(false)
    });
  });
});
