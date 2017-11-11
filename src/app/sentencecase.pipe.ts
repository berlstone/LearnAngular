import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase'
})
export class SentencecasePipe implements PipeTransform {

  transform(value: string): any {
    
    let words = value.split(' ');
    for(var index = 0; index<words.length;index++)
    {
      let word = words[index];

      if(index>0 && this.isPreposition(word))
        words[index] = word.toLowerCase(); 
       else
        words[index] = this.toTitleCase(word)
    }
    return words.join(' ');
  }
 private toTitleCase( word: string):string {
   return word.substr(0,1).toUpperCase()+word.substr(1).toLowerCase();
 }
 private isPreposition( word: string):boolean {
  let prepositions = ['the', 'of', 'is', 'on', 'in', 'at','for','to','until'];
  return prepositions.includes(word);
}
}
