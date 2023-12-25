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


interface INotifications {
    readonly firstExample : string[]
    readonly secondExample : string[]
    readonly thirdExample : string[]
}
class Notifications implements INotifications {
    firstExample = []
    secondExample = []
    thirdExample = []
}

interface ILogger {
    readonly writeNotificationToLog : (exapmle : IExample , notification : string) => void
    readonly viewingLogs : (example : IExample) => string[] | undefined
}

class Logger implements ILogger {
    readonly #log : INotifications = new Notifications ()

    static #exemplar : ILogger
    private constructor () {}

    static instantiation () {
        if (!Logger.#exemplar) {
            Logger.#exemplar = new Logger ()
        }

        return this.#exemplar
    }

    writeNotificationToLog (example : IExample , notification : string) {
        switch (true) {
            case isFirstExample (example) :
                this.#log.firstExample.push (notification)
                break
            case isSecondExample (example) :
                this.#log.secondExample.push (notification)
                break
            case isThirdExample (example) :
                this.#log.thirdExample.push (notification)
                break
        }
    }
    viewingLogs (example : IExample) {
        switch (true) {
            case isFirstExample (example) :
                return [...this.#log.firstExample]
                break
            case isSecondExample (example) :
                return [...this.#log.secondExample]
                break
            case isThirdExample (example) :
                return [...this.#log.thirdExample]
                break
        }
    }
}

interface IExample {
    readonly example : (log : string , logger : ILogger) => void
}
abstract class Example implements IExample {
    example (log : string , logger : ILogger) {
        logger.writeNotificationToLog (this , log)
    }
}
class FirstExample extends Example {}
const isFirstExample = (type : IExample) : type is FirstExample => type instanceof FirstExample

class SecondExample extends Example {}
const isSecondExample = (type : IExample) : type is SecondExample => type instanceof SecondExample

class ThirdExample extends Example {}
const isThirdExample = (type : IExample) : type is ThirdExample => type instanceof ThirdExample

const logger : ILogger = Logger.instantiation ()

const first = new FirstExample ()
first.example ('first' , Logger.instantiation ())

const second = new SecondExample ()
second.example ('second' , Logger.instantiation ())

const third = new ThirdExample ()
third.example ('third' , Logger.instantiation ())


console.log (Logger.instantiation ().viewingLogs (first))
console.log (Logger.instantiation ().viewingLogs (second))
console.log (logger.viewingLogs (third))