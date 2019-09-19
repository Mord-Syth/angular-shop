import { OrderByPipe } from './order-by.pipe';
import { NaturalSortService } from '../../core/services/natural-sort.service';

describe('OrderBy pipe', () => {

  const naturalSortService = new NaturalSortService();
  const pipe = new OrderByPipe(naturalSortService);

  const test = [
    { name: '111' },
    { name: '222' }
  ];


  it('should order by descending by default', () => {

    const result = pipe.transform(test, 'name');

    expect(result[0].name).toBe('222');
    expect(result[1].name).toBe('111');
  });
});
