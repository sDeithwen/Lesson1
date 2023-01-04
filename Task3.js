const ojb = {
    method1() {
        return this;
    },
    method2() {
        return this;
    },
    method3() {
        console.log("метод3");
    }
}

ojb.method1().method2().method3();