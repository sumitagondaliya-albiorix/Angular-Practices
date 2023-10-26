
import { fromEvent } from 'rxjs';
const clicks = fromEvent(document, 'click');

clicks.subscribe(event => {
    // console.log('Mouse Clicked at:', event.clientX);
});