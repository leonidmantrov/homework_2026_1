'use strict';

QUnit.module("Тестируем функцию fibonacciGenerator", function() {
    QUnit.test("Правильно генерирует первое число Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(1);

        assert.deepEqual([...fibGen], [0], "fibonacciGenerator(1). Должно быть сгенерировано только первое число Фибоначчи. Результат = [0]");
    });
    
    QUnit.test("Правильно генерирует 5 первых чисел Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(5);

        assert.deepEqual([...fibGen], [0, 1, 1, 2, 3], "fibonacciGenerator(5). Должны быть сгенерированы первые 5 чисел Фибоначчи. Результат = [0, 1, 1, 2, 3]");
    });

    QUnit.test("Работает правильно с отрицательным числом чисел", function(assert) {
        const fibGen = fibonacciGenerator(-5);

        assert.deepEqual([...fibGen], [], "fibonacciGenerator(-5). Генерация отрицательного числа должна вернуть пустой массив. Результат = []");
    });
    
    QUnit.test("Правильно отрабатывает с переданным 0", function(assert) {
        const fibGen = fibonacciGenerator(0);

        assert.deepEqual([...fibGen], [], "fibonacciGenerator(0). Генерация с числом 0 должна вернуть пустой массив. Результат = []");
    });
    
    QUnit.test("Правильно генерирует 2 первых числа Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(2);

        assert.deepEqual([...fibGen], [0, 1], "fibonacciGenerator(2). Должны быть сгенерированы первые 2 числа Фибоначчи. Результат = [0, 1]");
    });

    QUnit.test("Правильно генерирует 10 первых чисел Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(10);

        assert.deepEqual([...fibGen], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], "fibonacciGenerator(10). Должны быть сгенерированы первые 10 чисел Фибоначчи. Результат = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]");
    });
});
