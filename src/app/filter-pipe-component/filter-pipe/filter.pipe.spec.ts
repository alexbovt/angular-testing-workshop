import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {

  let pipe: FilterPipe;

  const mocks = {
    values: ['foo', 'bar', 'baz']
  };

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('should return array if filterer is not probidede', () => {
    const result = pipe.transform(mocks.values);
    expect(result).toEqual(mocks.values);
  });

  it('should filter array', () => {
    const result = pipe.transform(mocks.values, 'b');
    expect(result).toEqual(['bar', 'baz']);
  });

  it('should be case insesetive', () => {
    const result = pipe.transform(mocks.values, 'B');
    expect(result).toEqual(['bar', 'baz']);
  });


});
