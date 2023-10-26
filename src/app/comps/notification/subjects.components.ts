import { Subject } from 'rxjs';

const chatSubject = new Subject();

// Component 1 sends a message
chatSubject.next('Hello from Component 1!');

// Component 2 subscribes and receives the message
chatSubject.subscribe(message => {
    console.log('Component 2 Received:', message);
});

// Component 3 sends another message
chatSubject.next('Hi from Component 3!');

// Output: Component 2 Received: Hello from Component 1!
// Output: Component 2 Received: Hi from Component 3!