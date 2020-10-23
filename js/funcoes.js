var genero;
var nome;
var idade;
var telefone;
var pessoa = {
    masculino: [
        {
            GENERO: "m",
            NOME: "n",
            IDADE: "i",
            TELEFONE: "t"
        }
    ],
    ferminino: [
        {
            GENERO: "m",
            NOME: "n",
            IDADE: "i",
            TELEFONE: "t"
        },
    ]
};


$("#id-genero-m").attr('checked', true);
$("#id-nome").val("São Lucas");
$("#id-idade").val("18");
$("#id-telefone").val("3655-4499");

$("#btn-salvar").click(function () {
    genero = $('input:radio[name=g-genero]:checked').val();
    nome = $("#id-nome").val();
    idade = $("#id-idade").val();
    telefone = $("#id-telefone").val();
    alert("Genero: " + genero + "\nnome: " + nome + "\nidade: " + idade + "\ntelefone: " + telefone);
    $("#id-nome").val("");
    $("#id-idade").val("");
    $("#id-telefone").val("");
    $('input:radio[name=g-genero]:nth(0)').attr('checked', false);

    $("ul.lbNome").text("São Lucas");


    listapessoa(genero, nome, idade, telefone);
});

function listapessoa(g, n, i, t) {
    
    var obj = {
        GENERO: g,
        NOME: n,
        IDADE: i,
        TELEFONE: t
    };
    pessoa.masculino.push(obj);
    console.log(pessoa.masculino)
    //alert("Genero: "+pessoa.masculino[0].GENERO+"\nnome: "+pessoa.masculino[0].NOME+"\nidade: "+pessoa.masculino[0].IDADE+"\ntelefone: "+pessoa.masculino[0].TELEFONE);
    //lista(pessoa);
}



function lista(pessoa) {


}

function listaddd() {
    console.log("masculino");
    for (var i = 0; i < pessoa.masculino[0].length; i++) {
        console.log("carro n° " + [i + 1] + "  - " + pessoa.masculino[i].GENERO, pessoa.masculino[i].NOME, pessoa.masculino[i].IDADE, pessoa.masculino[i].TELEFONE);
        alert("carro n° " + [i + 1] + "  - " + pessoa.masculino[i].GENERO + " - " + pessoa.masculino[i].NOME + " - " + pessoa.masculino[i].IDADE + " - " + pessoa.masculino[i].TELEFONE);
    }
    console.log(`
    
    ferminino`);
    for (var y = 0; y < pessoa.ferminino[0].length; y++) {
        console.log(`carro n° ${[y+1]}  - ${pessoa.masculino[i].GENERO} ${pessoa.masculino[i].NOME} ${pessoa.ferminino[y].IDADE } ${pessoa.ferminino[y].TELEFONE}`);
        alert(`carro n° ${[y+1]}  - ${pessoa.masculino[i].GENERO} ${pessoa.masculino[i].NOME} ${pessoa.ferminino[y].IDADE } ${pessoa.ferminino[y].TELEFONE}`);
    }
    console.log(`
    
    
    `);
}

// banco sqLite    
var db;
var shortName = 'teste';
var version = '1.0';
var displayName = 'teste';
var maxSize = 65535;


// Abrindo o banco de dados
function openDb() {
    db = openDatabase(shortName, version, displayName, maxSize);
}

// Funções de sucesso e erro
function sucesso() {
    console.log("inseriu")
}

function error() {
    console.log("esta com erro")
}

function exeSql(Sql) { db.transaction(tx => tx.executeSql(Sql)) }

// Criando a tabela teste
function createDb() { exeSql('CREATE TABLE teste(id integer not null, nome text)') }

// Inserindo dados
function insertSql(sql = '') {
    // db.transaction(function(tx) {tx.executeSql('INSERT INTO teste VALUES(1,"TESTE")')})
    db.transaction(function(transaction) {
        transaction.executeSql('INSERT INTO teste(id, nome) VALUES (?,?)',[1,"robson"], sucesso,error);
    })
}

// Buscando dados
function searchDb() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * from teste',[],function(transaction, result) {
            var arr = result.rows;
    
            $(arr).each((id, item) => {
                console.log(id, item);
                render(item, id);
            })
        })
    })
}

function render(val, id, element = '#app') {
    var app = $(element);
    app.append(`<span>${id}) ${val.nome}</span><br>`); 
} 

openDb();
createDb();
insertSql();
searchDb();
