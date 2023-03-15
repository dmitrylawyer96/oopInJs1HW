'use strict';

// Домашнє завдання по темі "ООП в JS 1"
// Реалізуйте наступну систему, схожу до розглянутої на вебінарі:
// 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, 
// окемони, раси і т.д. - проявіть фантазію)
// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи
// (але можна й більше)
// 3) у кожного класу має бути своя унікальна властивість
// 4) у кожного класу має бути приватна властивість
// 5) у двох класів має бути спільний предок та спільний метод характерний 
// тільки для них
// 6) у всіх чотирьох класів має бути один (крім проміжних) клас-предок


class Entity {
    constructor(name) {
      let privateProperty = 'I am a private property'; 
      this.name = name;
  
      this.getPrivateProperty = function() {
        return privateProperty;
      }
    }
  
    getName() {
      return this.name;
    }
  
    setName(newName) {
      this.name = newName;
    }
  }
  
  class Creature extends Entity {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  
    getType() {
      return this.type;
    }
  
    useSpecialAbility() {
      console.log(`This creature has no special ability.`);
    }
  }
  
  class Animal extends Creature {
    constructor(name, type, age) {
      super(name, type);
      this.age = age;
    }
  
    useSpecialAbility() {
      console.log(`${this.name} is very cute!`);
    }
  
    getAge() {
      return this.age;
    }
  }
  
  class Pokemon extends Creature {
    constructor(name, type, level) {
      super(name, type);
      this.level = level;
    }
  
    useAttack(attackName) {
      console.log(`${this.name} used ${attackName}!`);
    }
  
    useSpecialAbility() {
      console.log(`${this.name} can evolve into a stronger form!`);
    }
  
    getLevel() {
      return this.level;
    }
  }
  
  class Race extends Entity {
    constructor(name, description) {
      super(name);
      this.description = description;
    }
  
    getDescription() {
      return this.description;
    }
  
    setDescription(newDescription) {
      this.description = newDescription;
    }
  }
  
  class Color extends Entity {
    constructor(name, hexValue) {
      super(name);
      this.hexValue = hexValue;
    }
  
    getHexValue() {
      return this.hexValue;
    }
  
    setHexValue(newHexValue) {
      this.hexValue = newHexValue;
    }
  }
  