import {updatePostActionCreator} from "./redux/state1";

BrowserRouter
Route path='/profile'
Link to='/profile'


const dialogElements = dialogs.map(el => {
    return (
        <Link to={`/dialogs/`+el.id}>{el.name}</Link>
    )
})

{ dialogElements }

Всегда обновлять стейт
1. Под массивом NewPostText
2. В стейте функция обновить текст (текст)
3. addNewText = текст
4. Пропсами прокинуть в нужное место функцию
5. Вызвать onchange(props функция(value))


//  Избежать зацикливания п.с Фиг пойми что

index.js
Обернуть апп в reRender и вызвать
в стейте созать доп функц reRender (console.log)
export default subcribe (observer)
reRender = observer

И в индексе вызвать subcribe(reRender)


// диспатч

вместо передачи методов по одному
делаем методи dispatch

if ({type: 'CHANGE-NEW-POST'}) {
        action.newText
    //
}
// let action = {type: "чендж", newText: text}
// props.dispatch(action)


// Action Creator

updatePost_ActionCreator(text) {
    return {type, text}
}





