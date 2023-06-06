import Testimonio from "./Acercadenosotros";

function Acercade() {
    return (
<div className='Acercadenosotros'>      
<div class="w-75 m-auto text-center" id="equipo">
    <h2 class="mb-5 fs-2 border-top border-3"> Equipo de Profesionales
     <span class="text-danger"> Expertos
            en Meteorología </span></h2>
    <p class="fs-4"> En Sky Alert, somos un equipo de profesionales comprometidos y  dedicados a comprender y comunicar las complejidades del clima. Desde Modeladores y científicos de datos, hasta ingenieros ambientales que estudiamos  el clima diario, y eventos climáticos extremos. Nos esforzamos en proporcionar datos actualizados y pronósticos confiables para que puedas tomar decisiones informadas. Valoramos la seguridad y el bienestar de nuestros usuarios, y nuestro objetivo es brindarte una experiencia meteorológica intuitiva y completa. Con tecnología de vanguardia y una red global de observación, estamos aquí para acompañarte en cada paso que des, sin importar dónde te encuentres. Bienvenido a Sky Alert, donde la experiencia de 20 años en meteorología se une a nuestra dedicación para brindarte la mejor información climática posible.</p>
    <br/>
</div>
<div class="mt-5 text-center">
    <img class="img-fluid" src= {`../img/testimonio-datos.jpg`} alt="equipo"/>
</div>
      
          <div className="contenedor-testimmonio">
              <h1>Lo que hacemos
              </h1>
              <hr />
              <Testimonio
                      nombre='Recopilación de datos innovadores'
                      pais='Datos satelitales'
                      /* imagina='datos' */
                      cargo='Información de radar de precipitaciones'
                      empresa='Modelo meteorológico EURO1k'
                      testimonio='Combinamos datos meteorológicos actuales e históricos de varias fuentes en todo el mundo, incluidos modelos meteorológicos, datos satelitales, información de radar de precipitaciones, datos oceánicos y observaciones de estaciones. Además, a diferencia de otros proveedores de datos meteorológicos, desarrollamos y fabricamos nuestros propios drones meteorológicos autónomos, Meteodrones, que vuelan hasta 6 km sobre el nivel del suelo para recopilar datos de la capa límite planetaria. Gracias a un permiso especial de la Oficina Federal de Aviación Civil, los meteodrones pueden volar más allá de la línea de visión visual (BVLOS), lo que nos permite recopilar datos incluso dentro de las nubes y la niebla. Integramos los datos recopilados por Meteodrones en el cálculo de nuestro modelo meteorológico EURO1k, brindando pronósticos aún más precisos y confiables. ' />
                   <Testimonio
                      nombre='Supercomputación y procesamiento de datos'
                      pais='Especialistas en TI'
                     /*  imagina='sara' */
                      cargo='15 petabytes de datos meteorológicos'
                      empresa='Pronósticos en tiempo real'
                      testimonio='Sky Alert comprende tanto meteorólogos como especialistas en TI, lo que nos permite ofrecer datos meteorológicos sin precedentes. Hoy, nuestra base de datos contiene más de 15 petabytes de datos meteorológicos y crece cada día. Hacer accesibles cantidades tan grandes de datos está asociado con grandes desafíos. Con nuestro sofisticado sistema de almacenamiento en caché en segundo plano, Meteocache, almacenamos grandes cantidades de observaciones, lo que permite que nuestra API meteorológica vuelva a calcular los pronósticos en tiempo real utilizando la información atmosférica más reciente. Nuestro sistema Meteocache hace coincidir los datos en el tiempo y el espacio, lo que garantiza que incluso los grandes conjuntos de datos se puedan consultar de manera eficiente y rápida en cualquier formato.
                      ' />
                   <Testimonio
                      nombre='Pronósticos hiperlocales y de alta precisión'
                      pais='Modelo de terreno digital de la NASA'
                      /* imagina='emma' */
                      cargo='Pronósticos hiperlocales a nivel mundial'
                      empresa='Resolución de 1 km'
                      testimonio='El modelo meteorológico EURO1k de SkyAlert cuenta con una resolución única de 1 km, lo que proporciona pronósticos meteorológicos muy precisos en toda Europa, adaptados a varios sectores. Además, nuestra tecnología meteorológica API emplea una reducción de escala de 90 metros utilizando el modelo de terreno digital de la NASA, lo que nos permite proporcionar pronósticos hiperlocales a nivel mundial.'
                      />
                      {/* hola soy yo  */}
                      {/* de nuevo */}
                      {/* again */}
          </div>
      </div>
);
}



export default Acercade;

