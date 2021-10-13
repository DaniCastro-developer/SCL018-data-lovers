import filters from '../src/data.js';

const testArray = [{id: 1, name: "Summer Smith", status: "Dead"},
 {id: 2, name: "Morty Smith", status: "Alive"},
  {id: 3, name: "Beth Smith", status: "Dead"}];


describe('filters', () => {

  it('should be an object', () => {
    expect(typeof filters).toBe('object');
  });

  describe('filters.orderAZ', () => {

    it('should be a function', () => {
      expect(typeof filters.orderAZ).toBe('function');
    });

    
    it('return testArray width orderAZ', () => {
      expect(filters.orderAZ(testArray)).toEqual([{id: 3, name: "Beth Smith", status: "Dead"}, {id: 2, name: "Morty Smith", status: "Alive"}, {id: 1, name: "Summer Smith", status: "Dead"}]);
    });

  describe('filters.orderZA', () => {

      it('should be a function', () => {
        expect(typeof filters.orderZA).toBe('function');
      });

    it('return testArray width orderZA', () => {
      expect(filters.orderZA(testArray)).toEqual([{id: 1, name: "Summer Smith", status: "Dead"}, {id: 2, name: "Morty Smith", status: "Alive"}, {id: 3, name: "Beth Smith", status: "Dead"}]);
  });

});

  });

});

/*describe('filters.statusFunction', () => {

  it('should be a function', () => {
    expect(typeof filters.statusFunction).toBe('function');
  });

  it('return status characters', () => {
    expect(filters.statusFunction(testArray, 'status')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });


}); */
