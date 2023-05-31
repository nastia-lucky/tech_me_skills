const users: string[] = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

let newNames: string[] = users.map((value: string, index: number) => { return value = `member ${index + 1} : ${value}` });

console.log(newNames); 
