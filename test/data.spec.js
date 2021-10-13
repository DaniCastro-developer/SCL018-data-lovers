import filters from './data.js';

const testArray = [{id: 1, name: "Summer Smith", status: "Dead"},
 {id: 2, name: "Morty Smith", status: "Alive"},
  {id: 3, name: "Beth Smith", status: "Dead"}];


describe('filters', () => {

  it('is a object', () => {
    expect(typeof filters).toBe('object');
  });

  describe('filters.orderAZ', () => {

    it('should be a function', () => {
      expect(typeof filters.orderAZ).toBe('function');
    });


    it('return testArray width orderAZ', () => {
      expect(filters.orderAZ(testArray)).toEqual([{id: 3, name: "Beth Smith", status: "Dead"}, {id: 2, name: "Morty Smith", status: "Alive"}, {id: 1, name: "Summer Smith", status: "Dead"}]);
    });

    it('return testArray width orderZA', () => {
      expect(filters.orderZA(testArray)).toEqual([{id: 1, name: "Summer Smith", status: "Dead"}, {id: 2, name: "Morty Smith", status: "Alive"}, {id: 3, name: "Beth Smith", status: "Dead"}]);
  });

});

});
