function montarTabela(objetos, headers = [], props = []) {
  if (!objetos || objetos.length === 0) return "<p>Nenhum dado encontrado</p>";

  // cabeçalho
  let thead = "<tr>" + headers.map(h => `<th>${h}</th>`).join("") + "</tr>";

  // corpo
  let tbody = objetos.map(o => {
    return "<tr>" + props.map(p => `<td>${o[p] ?? ""}</td>`).join("") + "</tr>";
  }).join("");

  return `<table>${thead}${tbody}</table>`;
}
