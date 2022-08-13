const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=17538122&pid=afaa99854200461684ec24c45b6aa6e4&tid=bd72b1b63070d28cd97ce3dc1a3b5815",
    "https://www.maimemo.com/share/page?uid=22740102&pid=afaa99854200461684ec24c45b6aa6e4&tid=d162f6a70723bb039a93d5a34027782f",
    "https://www.maimemo.com/share/page?uid=24205654&pid=39b3968ca9169c65eccd24b7d376ca80&tid=d55d281129f6e85f1f67c7c7d0ea73b6",
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