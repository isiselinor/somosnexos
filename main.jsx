const nexosRoot = ReactDOM.createRoot(document.getElementById('root'));
window.__nexosRender = function(){ nexosRoot.render(<EditorialLandingExport key={Date.now()}/>); };
window.__nexosRender();
