describe(`jest test`, () => {
    it(`should pass`, () => {
      expect(1 + 2).toEqual(3);
    });
  
    it('should fail', () => {
      expect('1' + '1').toEqual(2);
    });
  });