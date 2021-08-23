# Pruebas entrevista Agilika

Prueba desarrollada para entrevista de Agilika

## Lenguaje

- JS

## Instrucciones

- clonar repositorio
- abrir index.html
- abrir la consola
- ejecutar las instrucciones

## Prueba logaritmos

Materia Oscura
Han pasado varios meses desde que Bender resolvió su problema de doblar. Un requerimiento especial
ha llegado a Planet Express Inc., la empresa de envíos interplanetaria donde Bender trabaja. El profesor
Fansworth (fundador, CEO y presidente de la junta) inmediatamente preparo la misión y reunió a su
equipo: Philip J. Fry, Turanga Leela, y Bender. Para poder tener éxito en la misión, el equipo tiene que
hacer 𝑛 trayectos 𝑇 , en el orden exacto establecido por el profesor. El también entrego a su
1
, 𝑇
2
, …, 𝑇
𝑛
equipo un cuaderno con notas que especifican cuantos minutos les tomará cada trayecto en la nave
espacial.
Mordelon, la estúpida mascota de Leela, es también un miembro del equipo y un elemento critico para
poder tener éxito en la misión. Las heces de Mordelon, las cuales expulsa de vez en cuando, consisten en
esferas de materia oscura que puede ser usada para aumentar la velocidad de la nave. De hecho, una
esfera usada durante un trayecto reduce a la mitad su duración. El rol de Bender en la misión es el de
recoger estas pesadas esferas y ponerlas en el reactor de la nave. Sin embargo, el nunca podrá poner dos
esferas durante el mismo trayecto ya que la acumulación de materia oscura es muy peligrosa y podría
causar la destrucción de la nave.
En cada trayecto de la misión, Mordelon expulsa una cierta cantidad de esferas que pueden ser usadas
para reducir la duración de cualquiera de los próximos trayectos. En otras palabras, una esfera de
materia oscura producida durante un trayecto 𝑇 , puede ser usada para duplicar la velocidad de la nave
𝑖
en otros de los trayectos 𝑇 , con un .
𝑗
𝑖 < 𝑗 ≤ 𝑛
Fry es el responsable de planear como usar las esferas para reducir el total del tiempo de los trayectos.
Tu tarea es ayudar a Fry en determinar cual es la duración mínima de la misión si usa las esferas de
Mordelon.
Valores de Entrada:
Los valores de entrada consisten en diferentes casos de pruebas. La primera línea de cada caso contiene
un numero entero 𝑛 que indica la cantidad de trayectos (1 ≤ 𝑛 ≤ 100). Luego, 𝑛 líneas describiendo
cada uno de los trayectos 𝑇 ,: cada línea consta de dos números enteros y separados por
1
, 𝑇
2
, …, 𝑇
𝑛
𝑡
𝑖
𝑏
𝑖
espacios en blanco, donde 𝑡 indica la duración en minutos especificada por el profesor
𝑖
(2 ≤ 𝑡𝑖 ≤ 1000)
para cada trayecto es 𝑡 ( es siempre igual) y indicando el número de esferas de materia
𝑖
𝑡
𝑖
𝑏
𝑖
(0 ≤ 𝑏𝑖 ≤ 𝑛)
oscura que Mordelon va a expulsar en el trayecto 𝑇 . El ultimo caso esta seguido de una línea que
𝑖
contiene un solo cero.
Valores de Salida:
Para cada caso de prueba, imprimir una línea con el numero entero indicando el tiempo mínimo
requerido para completar la misión.
Ejemplos de entrada:
2
24 1
10 0
2
10 1
24 0
3
10 0
24 0
38 0
3
10 1
24 0
14 0
3
10 1
24 0
38 0
3
10 1
24 1
38 0
3
10 3
24 0
38 1
0
Ejemplos de Salida:
29
22
72
36
53
41
41
