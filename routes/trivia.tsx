/*Daniel Berzal & Raul Letrado*/
/**
 * Pagina web que accede a una api para recibir una pregunta de trivia.
 * Se muestra la pregunta y depende si se responde bien te lleva a una ruta o a otra con un boton para volver.
 */
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Verificar from "../islands/verificar.tsx";


export type Trivia = {
  question: string;
  answer: string;
};

export const handler: Handlers<Trivia> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Trivia>) => {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/trivia", {
        headers: {
          "X-Api-Key": "gMuh4ovcjrkpJMCZvS5IHA==y54mQwVAfrKWE3oL",
        },
      });

      if (!response.ok) {
        throw new Error(`Error de API: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API response:", data); 

      if (!data || data.length === 0) {
        throw new Error("No se recibió ninguna pregunta.");
      }

      return ctx.render({ question: data[0].question, answer: data[0].answer });
    } catch (error) {
      console.error("Error al obtener la trivia:", error);
      return ctx.render({
        question: "No se pudo cargar la pregunta",
        answer: "No se pudo cargar la respuesta",
      });
    }
  },
};


const Page = (props: PageProps<Trivia>) => {
  const { question, answer } = props.data;

  if (!question) {
    return <div>No se encontraron preguntas</div>;
  }
  if (!answer) {
    return <div>No se encontraron respuestas</div>;
  }
  


  return (
    <div class="general">
      <h1 class="title">Trivia</h1>
      <div class="pregunta">
        <h2>{question}</h2>
        <Verificar correctAnswer={answer} />
      </div>
    </div>
  );
};

export default Page;
