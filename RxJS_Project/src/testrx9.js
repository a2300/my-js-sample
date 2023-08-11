import { of} from 'rxjs';
import { switchMap } from 'rxjs/operators';

let text = of('Welcome To');
let case1 = text.pipe(switchMap((value) => of(value + ' Tutorialspoint!')));
case1.subscribe((value) => {console.log(value);});