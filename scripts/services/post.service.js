let posts = [
    {id: 1, title: 'pierwszy post', text: 'tresc posta'},
    {id: 2, title: 'drugi post', text: 'tresc posta drugiego'}
]
export class PostService {

    static list() {
        return $.get('posts')
    }

    static create(data) {
        return $.post('posts', data)
    }

    static get(id) {
        return $.get('posts/' + id)
    }
}
