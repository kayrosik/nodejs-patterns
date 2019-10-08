class Man {
    constructor() {}
    emotion(obj) {
        obj.emotion(obj);
    }
}

class Programmer extends Man {
    constructor(name) {
        super();
        this._name = name;
    }

    emotion () {
        console.log(this._name);
    }
}

class Emotion extends Programmer {
    constructor(programmer) {
        super();
        this._programmer = programmer;
    }

    emotion() {
        this._programmer.emotion();
    }
}

class Rage extends Emotion {
    constructor(programmer) {
        super(programmer);
        this._rage = 'Fuck it!'
    }

    emotion() {
        super.emotion();
        console.log(this._rage);
    }
}

class Sad extends Emotion {
    constructor(programmer) {
        super(programmer);
        this._sad = '*single tear*';
    }

    emotion() {
        super.emotion();
        console.log(this._sad);
    }
}

(() => {
    const Neo = new Programmer('Neo');
    const rage = new Rage(Neo);
    const sad = new Sad(rage);
    sad.emotion();
})();