 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTwitterService {

  constructor() { }

  messages = [
    {id: 1, mess: 'Сегодня прекрасный день чтобы нарушуить режим карантина и всех заразить!', img: 'https://intocode.ru/d/react-chat/avatars/admin.jpg', favorite: false},
    {id: 2, mess: 'Отличная идея! Я за!', img: 'https://intocode.ru/d/react-chat/avatars/adam.jpg', favorite: false},
    {id: 3, mess: 'Где актив? ', img: 'https://intocode.ru/d/react-chat/avatars/admin.jpg', favorite: false},
    {id: 4, mess: 'Ребята, давайте сделаем это! пусть нас и потом побреют налысо и ного переломают', img: 'https://intocode.ru/d/react-chat/avatars/no-avatar.jpg', favorite: false},
    {id: 5, mess: 'Сегодня, в выходной день, после 19:00 самое то!', img: 'https://intocode.ru/d/react-chat/avatars/adam.jpg', favorite: false}
  ];

  onlyFavorite = false;

  toggleAll = true;

  toggleOnlyFavorite() {
    this.onlyFavorite = !this.onlyFavorite;
  }

  getMessage() {
    let messages;

    if (this.onlyFavorite){
      return  messages = this.messages.filter(mess => mess.favorite);
    }
    if (this.toggleAll){
      return this.messages;
    }
  }


  toggleFavorite(id) {
    this.messages = this.messages.map(mess => {
      if (mess.id === id ) {
        return {
          ...mess,
          favorite: !mess.favorite
        };
      }
      return mess;
    });
  }

}
