import Testimonio from "./Acercadenosotros";

function Acercade() {
    return (
<div className='Acercadenosotros'>      
<div class="w-75 m-auto text-center" id="equipo">
    <h2 class="mb-5 fs-2 border-top border-3"> Equipo de Profesionales
     <span class="text-danger"> Expertos
            en Meteorología </span></h2>
    <p class="fs-4"> En Sky Alert, somos un equipo de profesionales comprometidos y  dedicados a comprender y comunicar las complejidades del clima. Desde Modeladores y científicos de datos, hasta ingenieros ambientales que estudiamos  el clima diario, y eventos climáticos extremos. Nos esforzamos en proporcionar datos actualizados y pronósticos confiables para que puedas tomar decisiones informadas. Valoramos la seguridad y el bienestar de nuestros usuarios, y nuestro objetivo es brindarte una experiencia meteorológica intuitiva y completa. Con tecnología de vanguardia y una red global de observación, estamos aquí para acompañarte en cada paso que des, sin importar dónde te encuentres. Bienvenido a Sky Alert, donde la experiencia de 20 años en meteorología se une a nuestra dedicación para brindarte la mejor información climática posible.</p>
</div>
<div class="mt-5 text-center">
    <img class="img-fluid" src= {`../img/testimonio-emma.jpg`} alt="equipo"/>
</div>
      
          <div className="contenedor-testimmonio">
              <h1>Sobre nosotros:</h1>
                   <Testimonio
                      nombre='Shawn Wang'
                      pais='Singapur'
                      imagina='shawn'
                      cargo='Ingeniero de software'
                      empresa='Amazon'
                      testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
                   <Testimonio
                      nombre='Sara Chima'
                      pais='Nigeria'
                      imagina='sara'
                      cargo='Ingeniero de software'
                      empresa='ChatDesk'
                      testimonio='FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />
                   <Testimonio
                      nombre='Emma Bostian'
                      pais='Suecia'
                      imagina='emma'
                      cargo='Ingeniero de software'
                      empresa='Spotify'
                      testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify.'
                      />
                      {/* hola soy yo  */}
          </div>
      </div>
);
}

export default Acercade;

