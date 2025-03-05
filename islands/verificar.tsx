import { useState } from "preact/hooks";

const Verificar = (props: {
    correctAnswer: string;
}) => {
  const [respuesta, setRespuesta] = useState(""); 

  const verificarRespuesta = () => {
    if (respuesta.trim().toLowerCase() === props.correctAnswer.trim().toLowerCase()) {
      console.log("¡Respuesta correcta!");
      window.location.href = "/acierto";
    } else {
      console.log("Respuesta incorrecta. Intenta de nuevo.");
      window.location.href = "/fallo";
    }
  };
  

  return (
    <div>
      <input id="input"
        type="text"
        placeholder="Tu respuesta"
        value={respuesta}
        onInput={(e) => setRespuesta((e.target as HTMLInputElement).value)} 
      />
      <button class="button" onClick={verificarRespuesta}>Enviar</button>  {}
    </div>
  );
};

export default Verificar;
