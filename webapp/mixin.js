// Mixin that implements the observer pattern
// Mixins are used to add functionality to classes without using inheritance

export const observerMixin = {
    // using a set structure because there is no order and there  are duplications
    observers: new Set(),
    addObserver(obs) {this.observers.add();},
    removeObserver(obs){this.observers.delete(obs);},
    notify() { this.observers.forEach(obs=>obs());}
}