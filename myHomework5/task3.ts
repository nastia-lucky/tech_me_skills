function trimString(str: string, a: number, b: number): string {
    return str.substring(a, b);
}

console.log(trimString("soome text", 4, 5))