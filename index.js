"use strict";
class Notifications {
    firstExample = [];
    secondExample = [];
    thirdExample = [];
}
class Logger {
    #log = new Notifications();
    static #exemplar;
    constructor() { }
    static instantiation() {
        if (!Logger.#exemplar) {
            Logger.#exemplar = new Logger();
        }
        return Logger.#exemplar;
    }
    writeNotificationToLog(example, notification) {
        switch (true) {
            case isFirstExample(example):
                this.#log.firstExample.push(notification);
                break;
            case isSecondExample(example):
                this.#log.secondExample.push(notification);
                break;
            case isThirdExample(example):
                this.#log.thirdExample.push(notification);
                break;
        }
    }
    viewingLogs(example) {
        switch (true) {
            case isFirstExample(example):
                return [...this.#log.firstExample];
                break;
            case isSecondExample(example):
                return [...this.#log.secondExample];
                break;
            case isThirdExample(example):
                return [...this.#log.thirdExample];
                break;
        }
    }
}
const logger = Logger.instantiation();
class Example {
    example(log) {
        logger.writeNotificationToLog(this, log);
    }
}
class FirstExample extends Example {
}
const isFirstExample = (type) => type instanceof FirstExample;
class SecondExample extends Example {
}
const isSecondExample = (type) => type instanceof SecondExample;
class ThirdExample extends Example {
}
const isThirdExample = (type) => type instanceof ThirdExample;
const first = new FirstExample();
first.example('first');
const second = new SecondExample();
second.example('second');
const third = new ThirdExample();
third.example('third');
console.log(logger.viewingLogs(first));
console.log(logger.viewingLogs(second));
console.log(logger.viewingLogs(third));
