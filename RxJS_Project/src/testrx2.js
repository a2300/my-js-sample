import { from } from 'rxjs';
import { max } from 'rxjs/operators';

let list1 = [1, 6, 15, 10, 58, 2, 40];
from(list1).pipe(max((a,b)=>a-b)).subscribe(x => console.log("The Max value is "+x));