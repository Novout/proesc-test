import { ListItem, ListType } from "@/types"

export const useList = () => {
  const get = (target: ListType): Promise<ListItem[]> => {
    return new Promise((res, rej) => {
      fetch(`https://api.potterdb.com/v1/${target}`)
        .then(async (response) => {
          const { data } = await response.json()
  
          res(data)
        })
        .catch((err) => {
          rej(err)
        })
    })
  }

  const getItem = (id: string, type: ListType): Promise<ListItem> => {
    return new Promise((res, rej) => {
      fetch(`https://api.potterdb.com/v1/${type}/${id}`)
        .then(async (response) => {
          const { data } = await response.json()
  
          res(data)
        })
        .catch((err) => {
          rej(err)
        })
    })
  }

  const getAttributeKey = (target: string): string => {
    return {
      'books': 'title',
      'characters': 'name',
      'movies': 'title',
      'potions': 'name',
      'spells': 'name'
    }[target] || 'name'
  }

  const getKeyName = (key: string): string => {
    return {
      'author': 'Autor',
      'dedication': 'Dedicatória',
      'pages': 'Páginas',
      'release_date': 'Data de Lançamento',
      'summary': 'Sumário',
      'title': 'Título',
      'wiki': 'Wiki',
      'alias_names': 'Nomes Parecidos',
      'animagus': 'Animago',
      'blood_status': 'Sangue',
      'boggart': 'Bicho Papao',
      'born': 'Nascimento',
      'died': 'Morreu em',
      'eye_color': 'Cor dos Olhos',
      'family_members': 'Membros da Família',
      'gender': 'Gênero',
      'hair_color': 'Cor do Cabelo',
      'height':'Altura',
      'house': 'Casa',
      'jobs': 'Trabalhos',
      'marital_status': 'Estado Civil',
      'name': 'Nome',
      'nationality': 'Nacionalidade',
      'patronus': 'Patrono',
      'romances': 'Romances',
      'skin_color': 'Cor de Pele',
      'species': 'Espécies',
      'titles': 'Títulos',
      'wands': 'Varinhas',
      'weight': 'Peso',
      'box_office': 'Bilheteria',
      'budget': 'Orçamento',
      'cinematographers': 'Cineastas',
      'directors': 'Diretores',
      'distributors': 'Distribuidores',
      'editors': 'Editores',
      'music_composers': 'Compositores Musicais',
      'producers': 'Produtores',
      'rating': 'Avaliação',
      'running_time': 'Tempo de Duração',
      'screenwriters': 'Roteiristas',
      'trailer': 'Trailer',
      'characteristics': 'Características',
      'difficulty': 'Dificuldade',
      'effect': 'Efeito',
      'inventors': 'Inventores',
      'ingredients': 'Ingredientes',
      'manufacturers': 'Fabricantes',
      'side_effects': 'Efeitos Colaterais',
      'time': 'Tempo',
      'category': 'Categoria',
      'creator': 'Criador',
      'hand': 'Mão',
      'incantation': 'Encantamento',
      'light': 'Luz'
    }[key] || key
  }

  return { get, getItem, getAttributeKey, getKeyName }
}