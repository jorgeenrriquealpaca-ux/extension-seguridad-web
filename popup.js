const MARCAS = ["paypal", "google", "microsoft", "amazon", "apple",
     "facebook", "netflix", "instagram", "santander", "bbva", "caixabank"];

function normalizar(texto) {
  return texto
    .replace(/rn/g, "m")
    .replace(/vv/g, "w")
    .replace(/0/g, "o")
    .replace(/[1i]/g, "l")
    .replace(/3/g, "e")
    .replace(/5/g, "s");
}

function analizar(urlTexto) {
    const avisos = [];
    const url = new URL(urlTexto);
    const host = url.hostname;

    if (url.protocol !== "https:") avisos.push("No  usa HTTPS");
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) avisos.push("Usa una IP en vez de un dominio");
    if (host.split(".").length > 4) avisos.push("Demasiados subdominios");
    if (host.includes("xn--")) avisos.push("Dominios con caracteres raros");
    if (urlTexto.includes("@")) avisos.push("Contiene @ en la URL");
    if (urlTexto.length > 100) avisos.push("URL muy larga");

    const partes = host.split(".");
    const dominio = partes.length >= 2 ? partes[partes.length - 2] : host;
    for (const marca of MARCAS){
        if (dominio !== marca && normalizar(dominio) === normalizar(marca)) {
            avisos.push("Parece imitar a " + marca);
        }
    }
    return avisos;
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    document.getElementById("url").textContent = url;
    const resultado = document.getElementById("resultado");

    if (!url || !url.startsWith("http")) {
        resultado.textContent = "Página interna, no se analiza";
        return;
    }

    const avisos = analizar(url);
    const color = avisos.length === 0 ? "✅" : avisos.length === 1 ? "⚠️" : "⛔";
    resultado.innerHTML = color + " " + (avisos.length ? avisos.join("<br>") : "Sin avisos");
});