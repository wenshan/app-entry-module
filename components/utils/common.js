var utils = {
    merge: function () {
        const ret = {};
        const args = [].slice.call(arguments, 0);
        args.forEach((a) => {
            Object.keys(a).forEach((k) => {
                ret[k] = a[k];
            });
        });
        return ret;
    }
};


module.exports = utils;
