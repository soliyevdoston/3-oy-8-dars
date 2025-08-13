// 1. Har bir so‘zni katta harf bilan yozish
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return (
        word.slice(0, 1).toUpperCase() + word.slice(1, Infinity).toLowerCase()
      );
    })
    .join(" ");

  // 1. Bo‘sh joylardan bo‘lib so‘zlarga ajratamiz
  // 2. Har bir so‘zni birinchi harfini katta qilib, qolganini kichik yozamiz
  // 3. So‘zlarni yana bo‘sh joy bilan birlashtiramiz
}
str = "salom dunyo";
console.log(capitalizeWords("salom dunyo")); // "Salom Dunyo"

// 2. Massivdagi har bir ismni katta harfga o‘tkazing
function toUpperNames(names) {
  return names.map((name) => {
    return name.toUpperCase();
  });
  // 1. map() yordamida har bir ismdan yangi massiv yaratamiz
  // 2. Har bir ismni toUpperCase() bilan yozamiz
}
const names = ["ali", "vali", "hasan"];
console.log(toUpperNames(["ali", "vali", "hasan"])); // ["ALI", "VALI", "HASAN"]

// 3. Massivda nechta musbat son borligini toping
function countPositive(numbers) {
  return numbers.filter((num) => {
    return num > 0;
  }).length;

  // 1. filter() yordamida musbat sonlargina ajratib oling
  // 2. filter() natijasining uzunligini qaytaring
}
const numbers = [1, -3, 4, 0, 6];
console.log(countPositive([1, -3, 4, 0, 6])); // 3

// 4. Stringdagi bo‘sh joylarni olib tashlang
function removeSpaces(str) {
  return str.trim().replaceAll(" ", "");
  // 1. trim() yordamida bosh va oxiridagi bo‘sh joylarni oling
  // 2. replaceAll() bilan oradagi bo‘sh joylarni ham olib tashlang
}
str = "  salom   dunyo  ";
console.log(removeSpaces("  salom   dunyo  ")); // "salomdunyo"

// 5. Berilgan sonlar orasidan biror juft son bor-yo‘qligini tekshiring
function hasEvenNumber(arr) {
  return arr.some((num) => {
    return num % 2 === 0;
  });
  // 1. some() yordamida bironta son juft ekanligini tekshiring
}
arr = [1, 3, 5, 8];
console.log(hasEvenNumber([1, 3, 5, 8])); // true

// 6. Massivdagi 0 qiymatli elementlarni olib tashlang
function removeZeros(arr) {
  return arr.filter((num) => {
    return num !== 0;
  });

  // 1. filter() yordamida faqat 0 ga teng bo‘lmagan qiymatlarni oling
}
arr = [0, 1, 2, 0, 3];
console.log(removeZeros([0, 1, 2, 0, 3])); // [1, 2, 3]

// 7. Har bir so‘zni teskari qilib qaytaring
function reverseWords(str) {
  return str.split(" ").map((word) => {
    return word.split("").reverse().join("");
  });
  // 1. split() bilan so‘zlarga ajrating
  // 2. map() orqali har bir so‘zni teskari qilib chiqing
  // 3. So‘zlarni yana birlashtiring
}
str = "salom dunyo";
console.log(reverseWords("salom dunyo")); // "molas oynud"

// 8. Faqat 3 harfli so‘zlarni qoldiring
function threeLetterWords(words) {
  return words.filter((word) => {
    return word.length === 3;
  });
  // 1. filter() yordamida uzunligi 3 ga teng so‘zlarni ajrating
}
words = ["sal", "olma", "ko‘r", "bor"];
console.log(threeLetterWords(["sal", "olma", "ko‘r", "bor"])); // ["sal", "ko‘r", "bor"]

// 9. Massivdagi sonlarni 2 ga ko‘paytiring
function doubleNumbers(numbers) {
  return numbers.map((num) => {
    return num * 2;
  });
  // 1. map() yordamida har bir elementni 2 ga ko‘paytiring
}
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

// 10. Matndagi har bir harfni alohida massivga oling
function splitChars(str) {
  return str.split("");
  // 1. split('') orqali harflarga bo‘ling
}
str = "hello";
console.log(splitChars("hello")); // ['h','e','l','l','o']

// 11. Massivdagi butun sonlarni saqlang
function onlyIntegers(arr) {
  return arr.filter((num) => {
    return Number.isInteger(num);
  });
  // 1. filter() yordamida Number.isInteger bilan tekshiring
}
arr = [1.5, 2, 3.1, 4];
console.log(onlyIntegers([1.5, 2, 3.1, 4])); // [2, 4]

// 12. Massivdagi har bir elementga uning indexini qo‘shing
function addIndex(arr) {
  return arr.map((qiymat, index) => {
    return qiymat + index;
  });
  // 1. map() yordamida qiymatga uning indeksini qo‘shing
}
arr = [10, 20, 30];
console.log(addIndex([10, 20, 30])); // [10, 21, 32]

// 13. Stringda nechta 'a' harfi borligini sanang
function countA(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => {
      return char === "a";
    }).length;
  // 1. toLowerCase() qiling
  // 2. split() bilan harflarga bo‘ling
  // 3. filter() orqali faqat 'a' harflarini oling va uzunligini toping
}
str = "Ananas";
console.log(countA("Ananas")); // 3

// 14. Har bir so‘zdan faqat birinchi harfni oling
function getInitials(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0);
    })
    .join("");
  // 1. split() orqali so‘zlarga bo‘ling
  // 2. map() orqali har bir so‘zdan faqat birinchi harfni oling
  // 3. join('') bilan birlashtiring
}
str = "Hello World From JS";
console.log(getInitials("Hello World From JS")); // "HWFJ"

// 15. Ichma-ich massivlarni tekislashtiring
function flattenArray(arr) {
  return arr.flat(2);
  // 1. flat() metodidan foydalaning
}
arr = [1, [2, 3], [4, 5]];
console.log(flattenArray([1, [2, 3], [4, 5]])); // [1,2,3,4,5]

// 17. Stringdagi raqamlarni sonlarga aylantiring
function extractNumbers(str) {
  Muammmooooooooooooo;
  // 1. split('') bilan harflarga bo‘ling
  // 2. filter() bilan faqat raqamlar ajrating
  // 3. map() bilan ularni Number ga aylantiring
}
str = "ab1c3d2";
console.log(extractNumbers("ab1c3d2")); // [1,3,2]

// 18. Har bir so‘zni teskari qilib, oxirgi so‘zni katta harf bilan qaytaring
function specialReverse(str) {
  return str.split(" ").map((word) => {
    return word.split("").reverse().join("").toUpperCase();
  });

  // 1. split() orqali so‘zlarga bo‘ling
  // 2. map() orqali har birini teskari qiling
  // 3. oxirgi so‘zni toUpperCase() qiling
}
str = "salom dunyo js";
console.log(specialReverse("salom dunyo js")); // ['molas', 'oynud', 'SJ']
// 20. Massivda barcha qiymatlar son ekanligini tekshiring
function allNumbers(arr) {
  return arr.every((num) => {
    return typeof num === "number";
  });
  // 1. every() yordamida typeof qiymat 'number' ekanligini tekshiring
}
arr = [1, 2, 3];
console.log(allNumbers([1, 2, 3])); // true
