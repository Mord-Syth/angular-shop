import { Pipe, PipeTransform } from '@angular/core';
import { NaturalSortService } from '../../core/services/natural-sort.service';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  constructor(private naturalSort: NaturalSortService) {}

  transform(arr: object[], sortBy: string, descending: boolean = true): any {
    if (!sortBy) {
      return arr;
    }

    if (descending) {
      return arr.sort((a, b) => this.naturalSort.compareDescIns(a[sortBy], b[sortBy]));
    } else {
      return arr.sort((a, b) => this.naturalSort.compareIns(a[sortBy], b[sortBy]));
    }
  }
}
