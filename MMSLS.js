const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=d9854f92d3dbb94c2b6ac1c01be49876&tid=73efc8782196dd1bb0c9300ec4c2cf44",
    "https://www.maimemo.com/share/page?uid=24205654&pid=39b3968ca9169c65eccd24b7d376ca80&tid=d55d281129f6e85f1f67c7c7d0ea73b6",
    "https://www.maimemo.com/share/page?uid=9265100&pid=39b3968ca9169c65eccd24b7d376ca80&tid=9bc1d06ff8eae7e62eb2697da204adcc",
"https://www.maimemo.com/share/page?tid=90a7e415965bfe5de96a042d8331bcd3&uid=17134313&pid=d9854f92d3dbb94c2b6ac1c01be49876", 
 ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
