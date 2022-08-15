const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=d9854f92d3dbb94c2b6ac1c01be49876&tid=73efc8782196dd1bb0c9300ec4c2cf44",
    "https://www.maimemo.com/share/page?tid=90a7e415965bfe5de96a042d8331bcd3&uid=17134313&pid=d9854f92d3dbb94c2b6ac1c01be49876", 
    "https://www.maimemo.com/share/page?tid=8876329e71f844975846db7ce05c0374&uid=21955403&pid=d9854f92d3dbb94c2b6ac1c01be49876",
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
