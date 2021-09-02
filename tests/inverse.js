'use strict';

QUnit.module('Тестируем функцию deepCopy', function() {
	QUnit.test('Функция работает с массивом объектов', function (assert) {
		const a = [{a : "aaa"}, {b : "bbb"}];
		let b = deepCopyFunc(a);
		b[0].a = "abc";
		assert.notDeepEqual(b, a);
	});

	QUnit.test('Функция работает со вложенными массивами', function (assert) {
		const a = [[1], [2]];
		let b = deepCopyFunc(a);
		b[0][0] = 2;
		assert.notDeepEqual(b, a);
	});
});

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('В случае если передан не массив, возвращает undefined', function(assert) {
		assert.deepEqual(inverse(1, Infinity), undefined);
		assert.deepEqual(inverse(undefined), undefined);
	})

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([ 1 ]), [ 1 ]);
		assert.deepEqual(inverse([ 'a' ]), [ 'a' ]);
		assert.deepEqual(inverse([ null ]), [ null ]);
		assert.deepEqual(inverse([ false ]), [ false ]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ]), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ]), [ 'e', 'd', 'c', 'b', 'a' ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ]), [ '', Infinity, 0, false, null ]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 1), [ 1, 5, 4, 3, 2 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 2), [ 1, 2, 5, 4, 3 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -1), [ 4, 3, 2, 1, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -2), [ 3, 2, 1, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция корректно работает с "зеркальными" массивами', function(assert) {
		assert.deepEqual(inverse([ 1, 3, 3, 1 ]), [ 1, 3, 3, 1 ]);
		assert.deepEqual(inverse([ 1, 3, 3, 1 ], 1), [ 1, 1, 3, 3 ], 1);
		assert.deepEqual(inverse([ 1, 3, 3, 1 ], 2), [ 1, 3, 1, 3 ], 2);
		assert.deepEqual(inverse([ 'a', 'b', 'b', 'b', 'a' ]), [ 'a', 'b', 'b', 'b', 'a' ]);
	});

	QUnit.test('Функция не ломается от второго параметра, который больше размера массива', function(assert) {
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e'], Infinity), [ 'a', 'b', 'c', 'd', 'e']);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e'], -Infinity), [ 'a', 'b', 'c', 'd', 'e']);
	})

});
