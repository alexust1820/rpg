array = [{name: '', age: ''}, {name: '', age: ''},{name: '', age: ''},{name: '', age: ''}];

document.getElementById('js-button_1').onclick = collect;
function collect() {
	array[0].name = prompt('Введите имя');
	array[0].age = +prompt('Введите возраст');
	if (array[0].age < 7 || !array[0].age) {
		alert('Nononnonononononono');
		array[0].age = +prompt('Введите возраст');
	} else {
		console.log(array[0]);
	}
};

document.getElementById('js-button_2').onclick = collect1;
function collect1() {
	array[1].name = prompt('Введите имя');
	array[1].age = +prompt('Введите возраст');
	if (array[1].age < 7 || !array[1].age) {
		alert('Nononnonononononono');
		array[1].age = +prompt('Введите возраст');
	} else {
		console.log(array[1]);
	}
};

document.getElementById('js-button_3').onclick = collect2;
function collect2() {
	array[2].name = prompt('Введите имя');
	array[2].age = +prompt('Введите возраст');
	if (array[2].age < 7 || !array[2].age) {
		alert('Nononnonononononono');
		array[2].age = +prompt('Введите возраст');
	} else {
		console.log(array[2]);
	}
};

document.getElementById('js-button_4').onclick = collect3;
function collect3() {
	array[3].name = prompt('Введите имя');
	array[3].age = +prompt('Введите возраст');
	if (array[3].age < 7 || !array[3].age) {
		alert('Nononnonononononono');
		array[3].age = +prompt('Введите возраст');
	} else {
		console.log(array[3]);
	}
};