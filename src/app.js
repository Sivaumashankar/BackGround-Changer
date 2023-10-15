import "./app.css";
function App(){
    return (
        <div className="Wrapper">
            <h1>Background color Changer</h1>
            <input type="color" onChange={
                (e)=>{
                    document.body.style.background= e.target.value

                }
            }/>
        </div>
    )
}
export default App;