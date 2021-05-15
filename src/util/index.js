export const createThrottleProxy = (fn, rate) => {
    let lastClick = Date.now() - rate;
    return new Proxy(fn, {
        apply(target, context, args) {
            if (Date.now() - lastClick > rate) {
                fn(...args);
                lastClick = Date.now();
            }
        },
    });
};

// 未知形参个数
export const curringNoArgs = fn => {
    return (...args) => {
      if (args.length !== 0) {
        return curringNoArgs(fn.bind(null, ...args));
      }
      return fn(...args);
    };
  }
  
  // 已知形参个数
  export const curringHasArgs = (fn, arr = []) => {
    var len = fn.length;
    return (...args) => {
      let concatValue = [...arr, ...args];
      if (concatValue.length < len) {
        return curringHasArgs(fn, concatValue);
      }
      return fn(...concatValue);
    };
  }