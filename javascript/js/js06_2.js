// alert(text);
console.log('length: ', text.length);

// slice, substring(start_index, end_index);
console.log('slice: ', text.slice(3, 9));
console.log('substring: ', text.substring(3, 9));

// substr(start_index, num_of_char);
console.log('substr: ', text.substr(3, 6));

// 전달한 값이 음수라면 인덱스를 뒤에서부터 세준다
console.log('slice: ', text.slice(2));
console.log('slice: ', text.slice(2, -1));
console.log('slice: ', text.slice(2, -2));
console.log('slice: ', text.slice(2, -3));

console.log('toUpperCase: ', text.toUpperCase(text));
console.log('toLowerCase: ', text.toLowerCase(text));

console.log('trim: ', '     ABCDEFG');
console.log('trim: ', '     ABCDEFG'.trim());

console.log('before padding: ', 'ABCDEFG');
console.log('after padding: ', 'ABCDEFG'.padStart(13, '#').padEnd(20, '*'));

console.log('ABCDEFG'.charAt(3));
console.log('ABCDEFG'[3]);
console.log('ABCDEFG'.charCodeAt(3));

const fruit_arr = fruits.split('/');
console.log(fruit_arr);

console.log(text.indexOf('H'));
console.log(text.indexOf('a'));
console.log(text.lastIndexOf('a'));

// indexOf는 시작 위치를 결정할 수 있다
console.log(text.indexOf('Java', 10));

// search는 정규표현식을 사용할 수 있다
console.log(text.search('J.{3}'));

// match: 문자열에 대한 정규표현식 검사를 할 수 있다
console.log(names.match('.{2}민수'));

console.log('includes 박민규?', names.includes('박민규'));
console.log('includes 서우현?', names.includes('서우현'));

console.log('text startswidth hello?', text.startsWith("hello"));
console.log('text startswidth Hello?', text.startsWith("Hello"));

console.log('text endswidth script!?', text.endsWith("script!"));