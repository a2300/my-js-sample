import { from } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { of } from 'rxjs';

let arr = [2, 4, 6, 8 , 10];
let test = from(arr);
test.subscribe(x => console.log(x));


/* console.log('=================================');
let testInterval = interval(2000);
let case1 = testInterval.pipe(take(5));
case1.subscribe(x => console.log(x)); */

console.log('=================================');
let ints = of(2,4,6,8,10,12);
ints.subscribe(x => console.log(x));