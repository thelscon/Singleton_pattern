"use strict";
// Створіть механізм логування подій в програмі, використовуючи паттерн Singleton для забезпечення єдиного екземпляра об'єкта логу.
//
// Задачі:
// Створіть клас Logger (Логер):
//
// Створіть клас, який буде відповідати за логування подій.
// Забезпечте приватний конструктор для уникнення створення більше одного екземпляра.
// Реалізуйте метод для запису повідомлень логу.
// Створіть глобальний доступ:
//
// Забезпечте глобальний метод або властивість для отримання єдиного екземпляра логера.
// Використовуйте логер:
//
// Створіть декілька класів або об'єктів, які використовуватимуть логер для запису подій.
// Використовуйте глобальний логер для запису різних подій, таких як помилки, інформаційні повідомлення тощо.
// Запишіть лог у файл (додатково):
//
// Розширте функціонал логера, щоб він міг записувати лог у файл.
// Реалізуйте метод для вказання шляху до файлу логу та збереження відповідних повідомлень.
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
