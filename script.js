document.getElementById('trade-form').addEventListener('submit', addTrade);

function addTrade(e) {
  e.preventDefault();

  // Get form values
  const date = document.getElementById('date').value;
  const pair = document.getElementById('pair').value;
  const direction = document.getElementById('direction').value;
  const entry = parseFloat(document.getElementById('entry').value);
  const exit = parseFloat(document.getElementById('exit').value);
  const stopLoss = parseFloat(document.getElementById('stopLoss').value);
  const takeProfit = parseFloat(document.getElementById('takeProfit').value);
  const notes = document.getElementById('notes').value;

  // Calculate profit/loss
  const profitLoss = direction === 'Long' ? exit - entry : entry - exit;

  // Calculate risk/reward ratio
  const risk = Math.abs(entry - stopLoss);
  const reward = Math.abs(takeProfit - entry);
  const riskRewardRatio = reward / risk;

  // Create table row with trade data
  const table = document.getElementById('trade-table').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${date}</td>
    <td>${pair}</td>
    <td>${direction}</td>
    <td>${entry.toFixed(4)}</td>
    <td>${exit.toFixed(4)}</td>
    <td>${stopLoss.toFixed(4)}</td>
    <td>${takeProfit.toFixed(4)}</td>
    <td>${profitLoss.toFixed(4)}</td>
    <td>${riskRewardRatio.toFixed(2)}</td>
    <td>${notes}</td>
  `;

  // Reset form
  document.getElementById('trade-form').reset();
}
