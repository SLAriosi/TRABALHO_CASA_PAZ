import Image from "next/image";
import imagem1 from "../../../public/images/DSC_0689.jpg"
import imagem2 from "../../../public/images/DSC_0559.jpg"
import imagem3 from "../../../public/images/DSC_0724.jpg"
import imagem4 from "../../../public/images/DSC_0413.jpg"

export default function Atuacao() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Projetos Section */}

      <h1 className="flex justify-center items-center text-4xl sm:text-4xl md:text-5xl font-extrabold pb-3" style={{ color: "#4970B1", fontFamily: 'Poppins, sans-serif' }} >Nossas áreas de atuação</h1>

      <section className="flex justify-center items-center pt-10 pb-10 m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-screen-xl">
          <div className="order-2">
            <Image className="rounded-lg" src={imagem1} alt="aboutImage" width={450} height={300} />
          </div>
          <div className="flex order-1 flex-col-reverse md:flex-row-reverse">
            <div className="flex flex-col">
              <h3 className="text-5xl font-black pb-6" style={{ color: "#a2bd30", fontFamily: 'Poppins, sans-serif' }}>Oficinas de Musicalização</h3>
              <span className="text-sm text-justify max-w-lg text-neutral-700 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Oferecemos aulas gratuitas de instrumentos musicais para crianças e adolescentes, utilizando a música como uma ferramenta de inclusão e desenvolvimento pessoal. As aulas cobrem desde o aprendizado de noções básicas sobre música até a prática com diversos instrumentos, estimulando a coordenação motora, o trabalho em equipe e a expressão criativa. Além das aulas regulares, a organização realiza workshops e apresentações para incentivar o interesse pela música e o desenvolvimento de habilidades artísticas. O ambiente promovido é seguro e colaborativo, com o objetivo de transformar vidas, abrindo novas oportunidades culturais e profissionais, com o apoio de voluntários e doações para expandir seu alcance.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center pt-10 pb-10 m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-screen-xl">
          <div className="order-1">
            <Image className="rounded-lg" src={imagem2} alt="aboutImage" width={450} height={300} />
          </div>
          <div className="flex order-2 flex-col-reverse md:flex-row-reverse">
            <div className="flex flex-col">
              <h3 className="text-5xl font-black pb-6" style={{ color: "#a2bd30", fontFamily: 'Poppins, sans-serif' }}>Oficinas de Judô</h3>
              <span className="text-sm text-justify max-w-lg text-neutral-700 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Oferecemos aulas gratuitas de judô para crianças e adolescentes, usando o esporte como ferramenta de inclusão social e desenvolvimento pessoal. Além de ensinar técnicas de judô, as aulas promovem valores como disciplina, respeito, e autoconfiança, ajudando os jovens a desenvolver habilidades físicas e emocionais. A organização também realiza eventos e competições para fortalecer laços comunitários e o espírito esportivo, proporcionando um ambiente seguro e estimulante. A iniciativa visa transformar vidas e abrir novas oportunidades, contando com apoio de voluntários e doações para expandir seu alcance.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center pt-10 pb-10 m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-screen-xl">
          <div className="order-2">
            <Image className="rounded-lg" src={imagem3} alt="aboutImage" width={450} height={300} />
          </div>
          <div className="flex order-1 flex-col-reverse md:flex-row-reverse">
            <div className="flex flex-col">
              <h3 className="text-5xl font-black pb-6" style={{ color: "#a2bd30", fontFamily: 'Poppins, sans-serif' }}>Oficinas de computação</h3>
              <span className="text-sm text-justify max-w-lg text-neutral-700 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Oferecemos aulas gratuitas de computação para crianças e adolescentes, usando a tecnologia como uma ferramenta de inclusão e desenvolvimento. As aulas abordam desde noções básicas de informática até programação e habilidades digitais, estimulando o raciocínio lógico e a criatividade. Além das atividades em sala de aula, a organização promove oficinas e eventos para incentivar o interesse pela tecnologia e o trabalho em equipe, criando um ambiente seguro e colaborativo. A iniciativa busca transformar vidas, abrindo novas oportunidades educacionais e profissionais, com o apoio de voluntários e doações para expandir seu alcance.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center pt-10 pb-10 m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-screen-xl">
          <div className="order-1">
            <Image className="rounded-lg" src={imagem4} alt="aboutImage" width={450} height={300} />
          </div>
          <div className="flex order-2 flex-col-reverse md:flex-row-reverse">
            <div className="flex flex-col">
              <h3 className="text-5xl font-black pb-6" style={{ color: "#a2bd30", fontFamily: 'Poppins, sans-serif' }}>Desfiles</h3>
              <span className="text-sm text-justify max-w-lg text-neutral-700 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Oferecemos brincadeiras de desfile para crianças e adolescentes, utilizando a arte do desfile como uma ferramenta de inclusão e desenvolvimento pessoal. As atividades permitem que as crianças se divirtam e experimentem a passarela de forma leve e criativa, estimulando a autoestima, a confiança e o trabalho em equipe. Além dos desfiles, a organização promove oficinas e eventos para incentivar a expressão artística e a diversão, criando um ambiente seguro e colaborativo. A iniciativa busca transformar momentos, proporcionando novas oportunidades de socialização e aprendizado, com o apoio de voluntários e doações para expandir seu alcance.
              </span>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
