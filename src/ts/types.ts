type str = string
type int = number
type bool = boolean
type date = Date

Object.defineProperties(Object.prototype, {
    keys: {
        value(){
            return Object.keys(this);
        },
        enumerable: false,
        writable: false,
        configurable: false
    },
    values: {
        value(){
            return Object.values(this);
        },
        enumerable: false,
        writable: false,
        configurable: false
    }
});

interface Object {
    keys(): string[];
    values(): any[];
}