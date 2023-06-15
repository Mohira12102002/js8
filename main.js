//1.sizga array berilgan. nums = [1,2,3,4]
// shu arrayni [1,3,6,10] shu shaklda qaytarib bering
// Tushuntirish: [1, 1+2, 1+2+3, 1+2+3+4].

// Tushuntirish: nums = [1,1,1,1,1] => [1,2,3,4,5] Sababi: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

// Tushuntirish: nums = [3,1,2,10,1] => [3,4,6,16,17]


let nums = [1,1,1,1,1];


    let result = [];
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
      result.push(total);
    }
    console.log(result);
  
  

//2.Gaplardan iborat array berilgan. shu gaplar orasidan eng uzun gapdagi so'zlar sonini chiqazing 
// ["alice and bob love google", "i think so too", "this is great thanks very much"]
// "alice and bob love google" => 5 ta so'z 
//  "i think so too" => 4 ta so'z
// "this is great thanks very much" => 6 ta so'z

const sentences = ["alice and bob love google", "i think so too", "this is great thanks very much"];


    let maxWordCount = 0;
    for (let i = 0; i < sentences.length; i++) {
      const words = sentences[i].split(' ');
      const wordCount = words.length;
      if (wordCount > maxWordCount) {
        maxWordCount = wordCount;
      }
    }
    console.log(maxWordCount); 
  


//3.Parametr sifatida bitta gap va son qabul qiladigan function yarating, gapdagi so'zlar sonini berilgan songa qarab qisqartiring. 
// masalan => gap = "Hello how are you Contestant", son = 4, result => "Hello how are you"
// masalan => gap = "What is the solution to this problem", son = 4, result => "What is the solution"
// masalan => gap = "chopper is not a tanuki", son = 5, result => "chopper is not a tanuki"

const gap = "Hello how are you Contestant";
const son = 4;
const words = gap.split(' ');
const shortenedWords = words.slice(0, son);
const shortenedSentence = shortenedWords.join(' ');
console.log(shortenedSentence); 

    
  
  
  