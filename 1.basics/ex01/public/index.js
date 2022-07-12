function App(){
    const App = document.createElement('div');
    App.textContent = "Hellow World";
    return App;
}

document
    .getElementById('root')
    .appendChild(App());