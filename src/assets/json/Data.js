export const planetas = [{
    nombre: "Sol",
    codigo: 1,
    diametro: 1391016,
    rotacionDias: 25,
    img: "sol.png",
    descripcion: "El Sol es la estrella única y central del sistema solar; por tanto, es la estrella más cercana a la Tierra y el astro con mayor brillo aparente. Su presencia o su ausencia en el cielo terrestre determinan, respectivamente, el día y la noche. La energía radiada por el Sol es aprovechada por los seres fotosintéticos, que constituyen la base de la cadena trófica, y es por ello la principal fuente de energía de la vida. También aporta la energía que mantiene en funcionamiento los procesos climáticos. El Sol es una estrella que se encuentra en la fase denominada secuencia principal, con un tipo espectral G2, que se formó hace unos 5000 millones de años, y permanecerá en la secuencia principal aproximadamente otros 5000 millones de años. ",
    temperatura: 5500,
    satelites: []
},
{
    nombre: "Mercurio",
    codigo: 2,
    diametro: 4878,
    rotacionDias: 58,
    img: "mercurio.png",
    descripcio: "Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño. Forma parte de los denominados planetas interiores o terrestres y carece de satélites naturales al igual que Venus. Al ser un planeta cuya órbita es interior a la de la Tierra, lo observamos pasar periódicamente delante del Sol, fenómeno que se denomina tránsito astronómico.",
    temperatura: 440,
    satelites: []
},
{
    nombre: "Venus",
    codigo: 3,
    diametro: 12100,
    rotacionDias: 243,
    img: "venus.png",
    descripcion: "Venus es el segundo planeta del sistema solar en orden de distancia desde el Sol, el sexto en cuanto a tamaño, ordenados de mayor a menor. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (gr. Afrodita). Se trata de un planeta de tipo rocoso y terrestre, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas (la temperatura media de Venus es de 463,85 ºC). Su órbita es una elipse con una excentricidad de menos del 1%, formando la órbita más circular de todos los planetas; apenas supera la de Neptuno. Su presión atmosférica es 90 veces superior a la terrestre; es, por tanto, la mayor presión atmosférica de las de todos los planetas rocosos del sistema solar. ",
    temperatura: 730,
    satelites: []
},
{
    nombre: "Tierra",
    codigo: 4,
    diametro: 12756,
    rotacionDias: 1,
    img: "tierra.png",
    descripcion: "La Tierra es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos. La Tierra se formó hace aproximadamente 4550 millones de años y la vida surgió unos mil millones de años después. Es el hogar de millones de especies, incluidos los seres humanos y actualmente el único cuerpo astronómico donde se conoce la existencia de vida.19​ La atmósfera y otras condiciones abióticas han sido alteradas significativamente por la biosfera del planeta, favoreciendo la proliferación de organismos aerobios, así como la formación de una capa de ozono que junto con el campo magnético terrestre bloquean la radiación solar dañina, permitiendo así la vida en la Tierra.​ Las propiedades físicas de la Tierra, la historia geológica y su órbita han permitido que la vida siga existiendo. Se estima que el planeta seguirá siendo capaz de sustentar vida durante otros 500 millones de años, ya que según las previsiones actuales, pasado ese tiempo la creciente luminosidad del Sol terminará causando la extinción de la biosfera",
    temperatura: 288,
    satelites: ["Luna"]
},
{
    nombre: "Marte",
    codigo: 5,
    diametro: 6787,
    rotacionDias: 1.02,
    img: "marte.png",
    descripcion: "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Recibió su nombre en homenaje al dios de la guerra de la mitología romana (Ares en la mitología griega), y también es conocido como «el planeta rojo»3​4​ debido a la apariencia rojiza5​ que le confiere el óxido de hierro predominante en su superficie. Marte es el planeta interior más alejado del Sol. Es un planeta telúrico con una atmósfera delgada de dióxido de carbono, y posee dos satélites pequeños y de forma irregular, Fobos y Deimos (hijos del dios griego), que podrían ser asteroides capturados6​7​ similares al asteroide troyano (5261) Eureka. Sus características superficiales recuerdan tanto a los cráteres de la Luna como a los valles, desiertos y casquetes polares de la Tierra. ",
    temperatura: 265,
    satelites: ["Fobos", "Deimos"]
},
{
    nombre: "Jupiter",
    codigo: 6,
    diametro: 142984,
    rotacionDias: 0.41,
    img: "jupiter.png",
    descripcion: "Júpiter es el quinto planeta del sistema solar. Forma parte de los denominados planetas exteriores o gaseosos. Recibe su nombre del dios romano Júpiter (Zeus en la mitología griega). Se trata del planeta que ofrece un mayor brillo a lo largo del año dependiendo de su fase. Es, además, después del Sol, el mayor cuerpo celeste del sistema solar, con una masa casi dos veces y media la de los demás planetas juntos (con una masa 318 veces mayor que la de la Tierra y tres veces mayor que la de Saturno, además de ser, en cuanto a volumen, 1317 veces más grande que la Tierra). También es el planeta más antiguo del sistema solar, siendo incluso más antiguo que el sol",
    temperatura: 186,
    satelites: ["Io", "Europa", "Ganimede", "Calisto"]
},
{
    nombre: "Saturno",
    codigo: 7,
    diametro: 120536,
    rotacionDias: 0.44,
    img: "saturno.png",
    descripcion: "Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos. El aspecto más característico de Saturno son sus brillantes anillos. Antes de la invención del telescopio, Saturno era el más lejano de los planetas conocidos y, a simple vista, no parecía luminoso ni interesante. El primero en observar los anillos fue Galileo en 1610,1​ pero la baja inclinación de los anillos y la baja resolución de su telescopio le hicieron pensar en un principio que se trataba de grandes lunas.",
    temperatura: 152,
    satelites: ["Titan", "Tetis", "Dione", "Febe"]
},
{
    nombre: "Urano",
    codigo: 8,
    diametro: 51108,
    rotacionDias: 0.71,
    img: "urano.png",
    descripcion: "Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano (del griego antiguo Οὐρανός), el padre de Crono (Saturno) y el abuelo de Zeus (Júpiter). Aunque es detectable a simple vista en el cielo nocturno, no fue catalogado como planeta por los astrónomos de la antigüedad debido a su escasa luminosidad y a la lentitud de su órbita.13​ Sir William Herschel anunció su descubrimiento el 13 de marzo de 1781, ampliando las fronteras entonces conocidas del sistema solar, por primera vez en la historia moderna. Urano es también el primer planeta descubierto por medio de un telescopio. ",
    temperatura: 134,
    satelites: ["Titania", "Oberon", "Ariel"]
},
{
    nombre: "Neptuno",
    codigo: 9,
    diametro: 49538,
    rotacionDias: 0.67,
    img: "neptuno.png",
    descripcion: "Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas. Su nombre fue puesto en honor al dios romano del mar —Neptuno—, y es el cuarto planeta en diámetro y el tercero más grande en masa. Su masa es diecisiete veces la de la Tierra y ligeramente mayor que la de su planeta «gemelo» Urano, que tiene quince masas terrestres y no es tan denso. En promedio, Neptuno orbita el Sol a una distancia de 30,1 ua. Su símbolo astronómico es ♆, una versión estilizada del tridente del dios Neptuno. ",
    temperatura: 76,
    satelites: ["Proteo", "Nereida", "Galatea"]
}]


