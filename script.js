document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    const raioInput = document.getElementById("raio");
    const resultadoPara = document.getElementById("resultado");

    calcularButton.addEventListener("click", function() {
        const raio = parseFloat(raioInput.value);

        if (!isNaN(raio) && raio > 0) {
            const area = calcularAreaDoCirculo(raio);
            resultadoPara.textContent = `A área do círculo é ${area.toFixed(2)}`;
        } else {
            resultadoPara.textContent = "Por favor, insira um valor válido para o raio.";
        }
    });

    function calcularAreaDoCirculo(raio) {
        return Math.PI * raio * raio;
    }
});
