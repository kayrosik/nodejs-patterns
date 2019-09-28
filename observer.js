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

class Boyfriend {
    constructor(name) {
        this._name = name;
    }

    cute() {
        console.log(this._name + ' said: Ooh, It\'s so cute');
    }

    disapointed() {
        console.log(this._name + ' said: Wtf?');
    }

    facepalm() {
        console.log(this._name + ' said: OK');
    }

    updateStatus(status) {
        switch (status) {
            case 'Love':
                return this.cute();
            case 'Complicated':
                return this.disapointed();
            default:
                return this.facepalm();
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