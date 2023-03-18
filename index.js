class Formatter {
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replaceAll(/[^A-Za-z0-9 \' \-]/g, '');
  }
  static titleize(str){
    const small_words = ['a', 'an', 'the', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return str.split(' ').map((word, index) => {
      if(index !== 0 && small_words.includes(word))
        return word.toLowerCase();
      else
        return this.capitalize(word);
    }).join(' ');
  }
}