class GetterSetter {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

/**
 * get / set keyword don't need ()
 * @type {GetterSetter}
 */
let getterSetter = new GetterSetter('shbak');
console.log('getName :', getterSetter.getName);
getterSetter.setName = 'fingdori';
console.log('After getterSetter.setName = \'fingdori\' getName:', getterSetter.getName);
