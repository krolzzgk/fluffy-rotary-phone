class NegociacaoController {


	constructor() {
		//bind(algumacoisa) mantém a associação com o objeto
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

	}

	adiciona(event) {
		event.preventDefault();

		let data = new Date(
			...this._inputQuantidade.value
			.split('-')
			.map((item, indice) => item - indice % 2)
		);


	}


}