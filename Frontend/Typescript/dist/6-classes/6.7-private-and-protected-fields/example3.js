"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// protected members are accessible within the class and its subclasses
class Chef {
    cook() {
        console.log("Cooking " + this.getDish());
    }
    getDish() {
        return "pasta";
    }
}
class SpecialChef extends Chef {
    prepareSpecialDish() {
        // OK to access protected member here
        console.log("Preparing special dish: " + this.getDish());
    }
}
const chef = new SpecialChef();
chef.cook(); // OK
// chef.getDish(); // Error: Property 'getDish' is protected and only accessible within class 'Chef' and its subclasses.
