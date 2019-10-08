class Abilities {
    action() {
        console.log('I have a ' + this._name);
    }
}

class Bug extends Abilities {
    constructor() {
        super();
        this._name = 'bug';
    }
}
class Fix extends Abilities {
    constructor() {
        super();
        this._name = 'fix'
    }
}

class Programmer {
    constructor() {
      this._abilities = [];
    };

    makeBug() {
        const bug = new Bug();
        this._abilities.push(bug);
    }

    makeFix() {
        const fix = new Fix();
        this._abilities.push(fix);
    }

    getAbilities() {
        return this._abilities.map(ability => ability.action());
    }
}

(() => {
    const Neo = new Programmer();
    Neo.makeBug();
    Neo.makeFix();
    Neo.getAbilities();
})();
