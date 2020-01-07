export default class PersianToEnglish {
   static _convertPersianToEnglish(value : string){
        if (!value) {
            return;
        }
        const persianChar = [ "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و","ئ" ],
            englishChar = [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",","m" ];

        for (let i = 0, charsLen = persianChar.length; i < charsLen; i++) {
            value =  value.replace(new RegExp( persianChar[i], "g"), englishChar[i]);
        }

        return value;
    }
}