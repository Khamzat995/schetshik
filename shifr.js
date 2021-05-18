const vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
const consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];

function cryptText(text) {


   for (let i = 0; i < consonants.length; i++) {
   if (text[i][0] = consonants[i]) {
     console.log(text[i].slice(1) + text[i][0] + "инту");
   }
 }
//   if (text.length > 3 && text.match() === vowels) {
//     return `код${text}`;
//   }
}
//
cryptText('привет мир')



// var str = "", abbr = "";
// str = "Java Script Object Notation";
// str = str.split(' ');
// for (i = 0; i < str.length; i++) {
//   abbr += str[i].substr(0,1);
// }
// console.log(abbr);