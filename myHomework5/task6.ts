
function foo(): void {
    console.log(foo.name);
}

function boo(): void {
    console.log(boo.name);
}

function fooboo(a: boolean, foo: { (): void; (): void; }, boo: { (): void; (): void; }): void {
    if (a) {
        foo();
    }
    else { boo(); }
}


fooboo(false, foo, boo);