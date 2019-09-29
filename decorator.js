class Feminism {
    constructor() {}
    static rageAnswer(obj) {
        obj.rageAnswer();
    }
}

class Women extends Feminism {
    constructor(name) {
        super();
        this._name = name;
    }

    rageAnswer() {
        console.log(this._name + ' said: \nWomen are people!')
    }
}

class Rage extends Feminism {
    constructor(woman) {
        super();
        this._woman = woman;
    }

    rageAnswer() {
        this._woman.rageAnswer();
    }
}

class FuckU extends Rage {
    constructor(woman) {
        super(woman);
        this._fuckPhrase = 'Fuck u!'
    }
    rageAnswer() {
        super.rageAnswer();
        console.log(this._fuckPhrase);
    }
}

class PeaceOfShit extends Rage {
    constructor(woman) {
        super(woman);
        this._shitPhrase = 'Peace of shit!';
    }
    rageAnswer() {
        super.rageAnswer();
        console.log(this._shitPhrase);
    }
}

(() => {
    const Masha = new Women('Masha');
    const fuckU = new FuckU(Masha);
    const peaceOfShit = new PeaceOfShit(fuckU);
    Feminism.rageAnswer(peaceOfShit);
})();