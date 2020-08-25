class Course {
    #price;

    get price() {
        return '$' + this.#price;
    }

    set price(value) {
        if (value < 0) {
            throw 'Invalid value!';
        }
        this.#price = value;
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculateValue() {
        return this.length/this.#price;
    }

    summary() {
        return `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`;
    }
}

const italianCourse = new Course('Italian Course', 100, 700);
console.log(italianCourse);
console.log(italianCourse.calculateValue());
console.log(italianCourse.summary());

const frenchCourse = new Course('French Course', 100, 800);
console.log(frenchCourse);
console.log(frenchCourse.calculateValue());
console.log(frenchCourse.summary());

class PracticalCourse extends Course {
    constructor(title, length, price, exercises) {
        super(title, price, length);
        this.numOfExercises = exercises;
    }
}

const listeningCourse = new PracticalCourse('Listening Course', 100, 300, 200);
console.log(listeningCourse);
console.log(listeningCourse.calculateValue());
console.log(listeningCourse.summary());

class TheoreticalCourse extends Course {
    publish() {
        console.log('Publishing!');
    }
}

const grammarCourse = new TheoreticalCourse('Grammar Course', 100, 400);

grammarCourse.price = 425;  // To update price
// grammarCourse.#price = 425; // Throws an error

console.log(grammarCourse);
console.log(grammarCourse.calculateValue());
console.log(grammarCourse.summary());
grammarCourse.publish();