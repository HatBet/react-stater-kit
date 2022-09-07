function AddTodo({submitHandle, onChange, state}){
    return (
    <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button type="submit" disabled={!state.todo}> Ekle</button>
    </form>
    )
}
export default AddTodo;