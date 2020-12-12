const a = new Array('A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A')
const b = new Array('B', 'B')
const c = new Array('C', 'C')
const d = new Array('D', 'D', 'D', 'D')
const e = new Array('E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E')
const f = new Array('F', 'F')
const g = new Array('G', 'G', 'G')
const h = new Array('H', 'H')
const i = new Array('I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I')
const j = new Array('J')
const k = new Array('K')
const l = new Array('L', 'L', 'L', 'L')
const m = new Array('M', 'M')
const n = new Array('N', 'N', 'N', 'N', 'N', 'N')
const o = new Array('O', 'O', 'O', 'O', 'O', 'O', 'O', 'O')
const p = new Array('P', 'P')
const q = new Array('Q')
const r = new Array('R', 'R', 'R', 'R', 'R', 'R')
const s = new Array('S', 'S', 'S', 'S')
const t = new Array('T', 'T', 'T', 'T', 'T', 'T')
const u = new Array('U', 'U', 'U', 'U')
const v = new Array('V', 'V')
const w = new Array('W', 'W')
const x = new Array('X')
const y = new Array('Y', 'Y')
const z = new Array('Z')

const alphabetArray  = function () { 
return  [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h, ...i, ...j, ...k, ...l, ...m, ...n,
  ...o, ...p, ...q, ...r, ...s, ...t, ...u, ...v, ...w, ...x, ...y, ...z] 
  // ... = spread operator,  makes it a one dimensional array
}

const scoreChart = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 4, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
  }

const Adagrams = {
  drawLetters() {
  
    const alphabet = alphabetArray();
    const ten_letters = []
    for(let i= 0; i < 10; i += 1) {
      let randomIndex = Math.floor((Math.random() * alphabet.length)) //pick a random number
      let temp = alphabet[randomIndex]
      let lastIndex = alphabet.length - 1

      alphabet[randomIndex] = alphabet[lastIndex]
      alphabet.pop()
      ten_letters.push(temp)
    }
    return ten_letters
  },

  usesAvailableLetters(input, lettersInHand) {
    const letterCount = this.countLetters(lettersInHand)
    for (let i = 0; i < input.length; i += 1) {
      let currentLetter = input[i]
      let count = letterCount[currentLetter]
      if (count === 0) {
        return false
      } else if (count === undefined) {
          return false
      } else {
        count -= 1
        letterCount[currentLetter] = count
      } 
    }
    return true        

  },

  countLetters(letters) {
    const letterFrequency = {}
  
     for (const letter of letters) {
      if (letterFrequency[letter] === undefined) {
        letterFrequency[letter] = 1;
      } else {
        letterFrequency[letter] += 1;
      }
     }
     return letterFrequency
  },
  
  scoreWord(word) {
    for (letter in word) {
   
      const scoreChart = {
        1: [A, E, I, O, U, L, N, R, S, T],
        2: [D, G],
        3: [B, C, M, P],
        4: [F, H, V, W, Y],
        5: [K],
        8: [J, X],
        10: [Q, Z]
        }
    }
  }

};

// const usesAvailableLetters = function(input, lettersInHand) {
//   const letterCount = countLetters(lettersInHand)
//   for (let i = 0; i < input.length; i += 1) {
//     let count = letterCount[i]
//     if (count === 0) {
//       return false
//     } else {
//       count -= 1
//       letterCount[i] = count
//       return true
//     }
//   }
// }







// Do not remove this line or your tests will break!
export default Adagrams;
