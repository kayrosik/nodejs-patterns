// Interface
class PhysicalAbilities {
    action() {
        console.log('Oh, I can ' + this._name);
    }
}

class Cook extends PhysicalAbilities {
    constructor() {
        super();
        this._name = 'cook';
    }
}
class WashDishes extends PhysicalAbilities {
    constructor() {
        super();
        this._name = 'wash dishes'
    }
}

// Subject
class Girl {
    constructor() {
      this._abilities = [];
    };

    perfomCook() {
        const cook = new Cook();
        this._abilities.push(cook);
    }

    perfomWashDishes() {
        const washDishes = new WashDishes();
        this._abilities.push(washDishes);
    }

    getAbilities() {
        return this._abilities.map(ability => ability.action());
    }
}

(() => {
    const Alisa = new Girl();
    Alisa.perfomCook();
    Alisa.perfomWashDishes();
    Alisa.getAbilities();
})();
