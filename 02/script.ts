const users = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

const buscarUsuario = (palavra: string): { nome: string, idade: number, status: boolean }[] | string => {
    let arrayEncontrado = [];

    for (const item of users) {
        if(item.nome.includes(palavra)) {
            arrayEncontrado.push(item);
        };
    };

    if (arrayEncontrado.length > 0) {
        return arrayEncontrado;
    } else {
        return 'Nenhum usuário foi encontrado!'
    }
};


console.log(buscarUsuario('Jo'));