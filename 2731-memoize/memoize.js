/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFn = (...args) => {
        const key = JSON.stringify(args); // Generate unique key per input
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    };

    memoizedFn.getCallCount = () => callCount;

    return memoizedFn;
}
