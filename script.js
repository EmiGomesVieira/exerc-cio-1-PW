function exibirNumerosPares() {
    const valorMaximo = parseInt(document.getElementById("valorMaximo").value);
    let numerosPares = [];
    let soma = 0;

    for (let i = 1; i <= valorMaximo; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
            soma += i;
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p>Números Pares: ${numerosPares.join(", ")}</p>
        <p>Soma Total: ${soma}</p>
    `;
}