class Hero {
    constructor(name,hp,damage){
        this.name = name,
        this.hp = hp,
        this.damage =damage
    }
    ApplyDamage(damage){
        this.hp -= damage
    }
    attack(ename){
        ename.ApplyDamage(this.damage)
    }
}

// heroA.attack(heroB);
// console.log({heroA,heroB});
class RangeHero extends Hero{
    constructor(name,hp,damage,range){
        super(name,hp,damage);
        this.range = range;
    }
    attack(ename){
        super.attack(ename);
        this.hp +=this.damage;
        
    }
}
let heroA = new RangeHero('A',100,10);
let heroB = new Hero('B',200,5);
console.log({heroA,heroB});
heroA.attack(heroB);
console.log({heroA,heroB});