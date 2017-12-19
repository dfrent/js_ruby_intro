
// ruby code
/* apples = 14
puts apples

puts "I have #{apples} apples."
*/

// js version
// apples = 14
// console.log(apples);
// console.log(`I have ${apples} apples.`);

// ruby code
// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }

// js version

// var materials = ['wood', 'metal', 'stone']
//
// var words = {
//   elephant: "The world's largest land mammal.",
//   school: 'A place of learning.',
//   ice_cream: 'A delicious milk-based dessert.',
// };
//
// console.log(words);

// ruby code
// num = 16
// if num > 10
//   puts "#{num} is greater than 10."
// elsif num == 10
//   puts "#{num} is exactly 10."
// else
//   puts "#{num} must be less than 10."
// end

// js code

// num = 16
//
// if (num > 10) {
//   console.log(`${num} is greater than 10.`)
// } else if (num === 10) {
//   console.log(`${num} is exactly 10`)
// } else {
//   console.log(`${num} must be less than 10.`)
// };

// ruby code
// 10.times do
//   puts "Doing the same thing over and over."
// end\


// js code

// for (var i = 0; i < 10; i++) {
//   console.log('doing things the same times over and over and over and over aND OVER');
// };

// ruby code
// base = 5
// 20.times do |num|
//   puts num + base
// end

// js code
// var base = 5
// for ( var num = 0; num < 20; num++){
//   console.log(num + base);
// };

// ruby code

// total = 0
// 100.times do |num|
//   total += num
// end
// puts total

// js code
// var total = 0
// for ( var num = 0; num < 100; num++) {
//   total += num;
// }
// console.log(total);

// ruby code
// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end

// js code
// for ( var height = 3; height < 15; height++){
//   if (height > 9) {
//    console.log('you can get on the rollercoaster');
//   } else {
//     console.log("youre too short");
//   }
// }


// ruby code
// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end


// js code
// var containers = ['purse', 'wallet', 'backback']

// for ( containers = 0; containers < containers.length; containers++ ) {
//   console.log(containers[containers]);
// }

// for ( var i = 0; i < containers.length; i++ ) {
//   console.log(containers[i]);
// }

// ruby code

// def hello_world
//   puts "Hello world!"
// end
//
// hello_world

// js code
 function helloWorld() {
  console.log('hello world');
}

helloWorld()


// ruby code
// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount

// js code
function sumOFNums(first, second) {
    console.log(first + second);
}

sumOFNums(5, 7)
