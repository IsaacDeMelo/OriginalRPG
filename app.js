import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Configurar o body-parser para analisar solicitações de formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o body-parser para analisar solicitações JSON
app.use(bodyParser.json());
// Configurando o EJS como view engine
app.set('view engine', 'ejs');
// Definindo a rota principal
app.get('/', (req, res) => {
    const message = 'Olá, mundo!';
    res.render('index', { message });
});
app.get('/personagens', (req, res) => {
    res.render('pp');
})
// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});