import Descripcion from "./Acercadenosotros";

function Acercade() {
    return (
<div className='Acercadenosotros'>      
<div class="w-75 m-auto text-center" id="equipo">
    <p class="mb-5 fs-2 border-top border-3"> Equipo de Profesionales
     <span class="text-primary"> Expertos
            en Meteorología </span></p>
    <p class="fs-4" style={{ textAlign: 'justify' }}> En Sky Alert, somos un equipo de profesionales comprometidos y  dedicados a comprender y comunicar las complejidades del clima. Desde Modeladores y científicos de datos, hasta ingenieros ambientales que estudiamos  el clima diario, y eventos climáticos extremos. Nos esforzamos en proporcionar datos actualizados y pronósticos confiables para que puedas tomar decisiones informadas. Valoramos la seguridad y el bienestar de nuestros usuarios, y nuestro objetivo es brindarte una experiencia meteorológica intuitiva y completa. Con tecnología de vanguardia y una red global de observación, estamos aquí para acompañarte en cada paso que des, sin importar dónde te encuentres. Bienvenido a Sky Alert, donde la experiencia de 20 años en meteorología se une a nuestra dedicación para brindarte la mejor información climática posible.</p>
    <br/>
</div>
<div class="mt-5 text-center">
    <img class="img-fluid" src={require("../img/testimonio-datos.jpg")} alt="equipo"/> 
</div>
      
          <div className="contenedor-descripcion">
            <hr/>
              <p className="text-primary" style={{ fontSize: '60px', color: 'MidnightBlue', fontWeight: 'bold'}}>Lo que hacemos
              </p>
              <hr />
                  <Descripcion 
                      skill1='Recopilación de datos innovadores.'
                      skill2='Datos satelitales.'
                     /*  imagen= 'datos' */
                      skill3='Información de radar de precipitaciones.'
                      skill4='Modelo meteorológico EURO1k.'
                      detalle='Combinamos datos meteorológicos actuales e históricos de varias fuentes en todo el mundo, incluidos modelos meteorológicos, datos satelitales, información de radar de precipitaciones, datos oceánicos y observaciones de estaciones. Además, a diferencia de otros proveedores de datos meteorológicos, desarrollamos y fabricamos nuestros propios drones meteorológicos autónomos, Meteodrones, que vuelan hasta 6 km sobre el nivel del suelo para recopilar datos de la capa límite planetaria. Gracias a un permiso especial de la Oficina Federal de Aviación Civil, los meteodrones pueden volar más allá de la línea de visión visual (BVLOS), lo que nos permite recopilar datos incluso dentro de las nubes y la niebla. Integramos los datos recopilados por Meteodrones en el cálculo de nuestro modelo meteorológico EURO1k, brindando pronósticos aún más precisos y confiables. ' />
                   <Descripcion 
                      skill1='Supercomputación y procesamiento de datos.'
                      skill2='Especialistas en TI.'
                        src={require("../img/testimonio-emma.jpg")} 
                      skill3='15 petabytes de datos meteorológicos.'
                      skill4='Pronósticos en tiempo real.'
                      detalle='Sky Alert comprende tanto meteorólogos como especialistas en TI, lo que nos permite ofrecer datos meteorológicos sin precedentes. Hoy, nuestra base de datos contiene más de 15 petabytes de datos meteorológicos y crece cada día. Hacer accesibles cantidades tan grandes de datos está asociado con grandes desafíos. Con nuestro sofisticado sistema de almacenamiento en caché en segundo plano, Meteocache, almacenamos grandes cantidades de observaciones, lo que permite que nuestra API meteorológica vuelva a calcular los pronósticos en tiempo real utilizando la información atmosférica más reciente. Nuestro sistema Meteocache hace coincidir los datos en el tiempo y el espacio, lo que garantiza que incluso los grandes conjuntos de datos se puedan consultar de manera eficiente y rápida en cualquier formato.
                      ' />
                   <Descripcion 
                      skill1='Pronósticos hiperlocales y de alta precisión.'
                      skill2='Modelo de terreno digital de la NASA.'
                      src={require("../img/testimonio-sara.jpg")} 
                      skill3='Pronósticos hiperlocales a nivel mundial.'
                      skill4='Resolución de 1 km.'
                      detalle='El modelo meteorológico EURO1k de SkyAlert cuenta con una resolución única de 1 km, lo que proporciona pronósticos meteorológicos muy precisos en toda Europa, adaptados a varios sectores. Además, nuestra tecnología meteorológica API emplea una reducción de escala de 90 metros utilizando el modelo de terreno digital de la NASA, lo que nos permite proporcionar pronósticos hiperlocales a nivel mundial.'
                      />
                     
          </div>
      </div>
);
}



export default Acercade;

