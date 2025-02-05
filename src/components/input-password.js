
function Password(){
    const Input = (
        <div className="exemplo">
            <input type="password" id="campoSenha" name="campoSenha" placeholder="******">
            </input>
        </div>

    );
    return(
        <div>
            {Input}
            <div>
            <input type="password" id="campoSenha" name="campoSenha" placeholder="******" ></input>
                <label for="botaoMostrar" className="legenda">Mostrar</label>
                <input type="checkbox" id="botaoMostrarSenha"/>
            </div>
        </div>
    );
}

const campoSenha = document.querySelector("#campoSenha");
const botaoMostrarSenha = document.querySelector("#botaoMostrarSenha");
const legenda = document.querySelector(".legenda");

botaoMostrarSenha.addEventListener("change", function(){
    const estadoAtualDoCampoDeSenha = campoSenha.getAttribute("type") === "password" ? "text" : "password"

    campoSenha.setAttribute("type",estadoAtualDoCampoDeSenha);

    legenda.innerHTML = estadoAtualDoCampoDeSenha === "password" ? "Mostrar" : "Ocultar";
});

export default  Password;