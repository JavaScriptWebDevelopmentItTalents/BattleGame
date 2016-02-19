/*global WorldObject, Inventory, validator*/
var Player = (function iife(parent, Inventory) {
    'use strict';
    var PlayerConstants = {
        MaxInventorySize: 20,
        StartingMana: 100,
        StartingHealth: 100,
        StartingBaseDamage: 5,
        StartingBaseDefence: 10,
        DefaultName: 'Player'
    };

    function Player(name) {
        var _name,
            _health,
            _mana,
            _baseDamage,
            _baseDefence,
            _inventory = new Inventory(PlayerConstants.MaxInventorySize);
        validator.validateIfString(name);
        _name = name;
        parent.call(this);

        this.getName = function get() {
            return _name;
        };
        this.getHealth = function get() {
            return _health;
        };
        this.setHealth = function set(health) {
            validator.validateIfNumber(health, 'Player health');
            _health = health;
        };
        this.getMana = function get() {
            return _mana;
        };
        this.setMana = function set(mana) {
            validator.validateIfNumber(mana, 'Player mana');
            _mana = mana;
        };
        this.getPlayerInventory = function get() {
            return _inventory;
        };
        this.addToInventory = function addToInventory(item) {
            console.log(this.getName() + ' added to inventory ' + item.getType());
            _inventory.addToInventory(item);
        };
        this.getBaseDamage = function get() {
            return _baseDamage;
        };
        this.setBaseDamage = function set(damage) {
            validator.validateIfNumber(damage, 'Player base damage');
            _baseDamage = damage;
        };
        this.getBaseDefence = function get() {
            return _baseDefence;
        };
        this.setBaseDefence = function set(defence) {
            validator.validateIfNumber(defence, 'Player base defence');
            _baseDefence = defence;
        };

        this.setHealth(PlayerConstants.StartingHealth);
        this.setMana(PlayerConstants.StartingMana);
        this.setBaseDamage(PlayerConstants.StartingBaseDamage);
        this.setBaseDefence(PlayerConstants.StartingBaseDefence);
    }

    Player.prototype = Object.create(parent.prototype);
    Player.constructor = Player;
    Player.prototype.getDamage = function getPlayerDamage() {
        var i,
            damage = 0;
        for (i = 0; i < this.getPlayerInventory().getInventory().length; i += 1) {
            if (this.getPlayerInventory().getInventory()[i].getType() === 'weapon' &&
                this.getMana() > 0
            ) {
                damage += this.getPlayerInventory().getInventory()[i].getBonusDamage();
                break;
            }
        }
        damage += this.getBaseDamage();
        if (Math.random() > 0.5) {
            damage *= 2;
            this.setMana(this.getMana() - 50);
        }
        console.log(this.getName() + ' is making damage:' + damage);
        return damage;
    };
    Player.prototype.takeHit = function takeHit(damage) {
        this.setHealth(this.getHealth() - damage);
        console.log(this.getName() + ' took damage: ' + damage);
        if (this.getHealth() <= 0) {
            console.log(this.getName() + ': I am dead.');
            //TODO : player die
        }
    };
    Player.prototype.usePotion = function usePotion(type) {
        var i;
        for (i = 0; i < this.getPlayerInventory().getInventory().length; i += 1) {
            if (this.getPlayerInventory().getInventory()[i].getType() === type) {
                console.log(this.getName() + ' used ' + type + ' potion.');
                this.getPlayerInventory().getInventory()[i].refill(this);
                //this.getPlayerInventory().removeFromInventoryById(this.getPlayerInventory().getInventory()[i].getId());
                return;
            }
        }
        console.log(this.getName() + " don't have any " + type + ' potion.');
    };
    Player.prototype.showInventory = function showInventory() {
        console.log(this.getName() + ' inventory: ');
        var i;
        for (i = 0; i < this.getPlayerInventory().getInventory().length; i += 1) {
            this.getPlayerInventory().getInventory()[i].displayInfo();
        }
    };
    Player.prototype.hit = function hit(player) {
        console.log(this.getName() + ' hit: ' + player.getName());
        var damage = this.getDamage();
        player.takeHit(damage);
        console.log(player.getName() + ' health: ' + player.getHealth());
    };
    return Player;
}(WorldObject, Inventory));