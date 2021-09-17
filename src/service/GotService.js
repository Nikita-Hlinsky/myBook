import axios from 'axios'

export default class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api'
	}

	async getResource(url) {
		// const res = await axios.get(`${this._apiBase}${url}`)

		// if (!res.ok) {
		// 	throw new Error(`Could not fetch ${url}, received ${res.status}`)
		// }
		// return await res.json()//

        const res = await axios.get(`${this._apiBase}${url}`)
            .then(res => {
                // setPosts(res.json)
                console.log(res.data)
                console.log(res)
            })
    
        // if (!res.ok) {
        //   throw new Error(`Could not fetch ${url}` +
        //     `, received ${res.status}`);
        // }
        return await res;
	}

	async getAllBooks(){
		const res = await this.getResource('/books/')
        // console.log(res)
		return res.map(this._transformBook)
	}

	async getBook(id) {
		const book =  await this.getResource(`/books/${id}`)
		return this._transformBook(book)
	}

	async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

	_transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        };
    }

    _transformCharacter(char) {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died), 
            culture: this.isSet(char.culture)
        };
    }
}