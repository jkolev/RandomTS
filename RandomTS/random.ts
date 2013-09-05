
class Random {
    private _seed;
    private _multiplier = 48271; // don't change this
        private _modulus = 2147483647 // don't chage this
        private _mq;
    private _mr;

    constructor(seed: Number) {
        this._seed = seed;
        this._mq = Math.floor(this._modulus / this._multiplier);
        this._mr = this._modulus % this._multiplier;
    }

    getInteger() {
        var temp = this._multiplier * (this._seed % this._mq) - (this._mr * Math.floor(this._seed / this._mq));

        if (temp > 0) {
            this._seed = temp;
        } else {
            this._seed = temp + this._modulus;
        }

        return this._seed;
    }

    getReal() {
        var temp = this.getInteger();

        return temp / this._modulus;
    }

    getSeed() {
        return this._seed;
    }
}