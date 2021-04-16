// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    /* funciones originales que también funcionan

    vikingAttack(){
        let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        if(result.includes('died')){
            this.saxonArmy.splice(0,1)
        }
        return result
    }
    saxonAttack(){
        let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        if(result.includes('died')){
            this.vikingArmy.splice(0,1)
        }
        return result
    }
    */
    getRandom(array){
        let arraylength = array.length
        return Math.floor(Math.random() * arraylength)
    }

    warAttack(defender, attacker ){
        let defenderRandom = this.getRandom(defender)
        let attackerRandom = this.getRandom(attacker)
        let result = defender[defenderRandom].receiveDamage(attacker[attackerRandom].strength)
        if(result.includes('died')){
            defender.splice(defenderRandom,1)
        }
        return result
    }
    vikingAttack(){
        return this.warAttack(this.saxonArmy, this.vikingArmy)
    }
    saxonAttack(){
        return this.warAttack(this.vikingArmy, this.saxonArmy)
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}