import { Observable } from 'rxjs';

var observer = new Observable(
   function subscribe(subscriber) {
    try {
      subscriber.next("My First Observable");
      subscriber.next("Testing Observable");
      subscriber.complete();      
    }catch(e) {
      subscriber.error(e);
    }  
   }
);
observer.subscribe({ next: x => console.log(x),
                     error: e => console.log(e),
                     complete:() => console.log("Observable is complete")
                   });