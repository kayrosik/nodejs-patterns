
 class Command {
    constructor(command) {
        this._command = command;
    }

    execute() {
        this._command.execute();
    }
 }

 class MusicOn {
     constructor(app) {
         this._app = app;
     }

     execute() {
         this._app.setFavouriteSong();
         this._app.musicOn();
     }
 }

 class MusicOff {
    constructor(app) {
        this._app = app;
    }

    execute() {
        this._app.musicOff();
    }
 }

 class AlisaMusic {
    constructor() {
        this._musicState = false;
    }

    setFavouriteSong() {
        this._song = 'Evil Morty';
    }

    musicOn() {
        this._musicState = true;
    }

    musicOff() {
        this._musicState = false;
    }
 }

 (() => {
     const alisaMusic = new AlisaMusic();
     const musicOn = new MusicOn(alisaMusic);
     const musicOff = new MusicOff(alisaMusic);
     const command = new Command(musicOn);
     command.execute();
 })();