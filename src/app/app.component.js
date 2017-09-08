"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    { id: 11, name: 'Lugia' },
    { id: 12, name: 'Articuno' },
    { id: 13, name: 'Zapdos' },
    { id: 14, name: 'Moltres' },
    { id: 15, name: 'Raikou' },
    { id: 16, name: 'Entei' },
    { id: 17, name: 'Suicune' },
    { id: 18, name: 'Mew' },
    { id: 19, name: 'Mewtwo' }
];
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{title}}</h1>\n  <h2>My Heroes</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\" \n      [class.selected]=\"hero === selectedHero\"\n      (click)=\"onSelect(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedHero\">\n    <h2>{{selectedHero.name}} details!</h2>\n    <div><label>id: </label>{{selectedHero.id}}</div>\n    <div>\n    \t<label>name: </label>\n    \t<input [(ngModel)]=\"selectedHero.name\" placeholder=\"Pikachu\">\n    </div>\n  </div>",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map