class Girl {
    constructor() {
        this._boyfriends = [];
    };

    date(boyfriend) {
        this._boyfriends.push(boyfriend);
    }

    breakUp(exBoyfriend) {
        this._boyfriends = this._boyfriends.filter(boyfriend => boyfriend !== exBoyfriend);
    }

    changeStatus(status) {
        this._boyfriends.forEach(boyfriend => {
            boyfriend.updateStatus(status);
        });
    }
}

class Emotion {
    say(name) {
        console.log(name + 'said: ' + this._phrase);
    }
}

class Cute extends Emotion {
    constructor() {
        super();
        this._phrase = 'Oh, It\'s so cute';
    }
}
class Disappointed extends Emotion {
    constructor() {
        super();
        this._phrase = 'Wtf?';
    }
}
class Facepalm extends Emotion {
    constructor() {
        super();
        this._phrase = 'OK';
    }
}

class Boyfriend {
    constructor(name) {
        this._name = name;
    }

    updateStatus(status) {
        switch (status) {
            case 'Love':
                const cuteEmotion = new Cute();
                return cuteEmotion.say(this._name);
            case 'Complicated':
                const disappointedEmotion = new Disappointed();
                return disappointedEmotion.say(this._name);
            default:
                const facepalmEmotion = new Facepalm();
                return facepalmEmotion.say(this._name);
        }
    }
}

(() => {
    const Alena = new Girl();
    const Nikita = new Boyfriend('Nikita');
    const Mihail = new Boyfriend('Mihail');
    Alena.date(Nikita);
    Alena.date(Mihail);

    Alena.changeStatus('Love');
    Alena.breakUp(Mihail);
    Alena.changeStatus('Complicated');
})();