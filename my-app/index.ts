import { A, B, C } from "my-package";

class A1 implements A {
  constructor(public id: number) {}
}

class B1 implements B {
  constructor(public name: string) {}
}

class C1 extends C {}

// @ts-ignore
console.log(A1, B1, C1);
