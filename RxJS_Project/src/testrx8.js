import { of, forkJoin } from 'rxjs';

let list1 = of(2, 3, 4, 5, 6);
let list2 = of(4, 9, 16, 25, 36)
let final_val = forkJoin([list1, list2]);
final_val.subscribe(x => console.log(x));