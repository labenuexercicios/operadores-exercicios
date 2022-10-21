# Ejercicio 3

### Parte 1
Escriba las siguientes operaciones lógicas en formato de código. Imprime en la consola si el valor de la operación es verdadero o falso:

a) 5 es mayor que 20 y también es menor que 2;

b) 5 es igual a 5 o es igual a “5”;

c) negación de (veinte es mayor que cincuenta)

d) negación de (veinte es mayor que cincuenta O cincuenta es mayor que sesenta)

Ejemplo:

```jsx
const operacion1 = 20 < 50 && 50 > 90;
console.log(operacion1);
/*falso, porque 50 no es mayor que 90, por lo tanto tenemos verdadero && falso,
que devuelve falso*/
```

### Parte 2

En la última clase empezaste a implementar un sistema para los RRHH de una empresa.

¿Vamos a seguir? Supongamos que el ejercicio de la última clase da como resultado el siguiente informe:**

**El empleado Fulano de Silva, con CPF: 000.000.000-00, nació el 10/02/1990, reside en: Rua dos Bobos nº 0 y tiene 2 hijos. ¿Tienes una licencia? Sí. Ocupa el cargo de vendedor, recibe un salario de 2.000,00 reales, más una comisión del 10% sobre el total de las ventas del mes e ingresó a la empresa en 2019.**

Calcula el sueldo de Fulano da Silva teniendo en cuenta los siguientes datos:

a) Subsidio de guardería por hijo: R$ 45,50

b) 10% de comisión sobre el total de las ventas mensuales

c) Ventas totales de enero a junio:

    - Enero: BRL 5.784,50
    - Febrero: BRL 3.418,41
    - Marzo: BRL 4.124,10
    - Abril: BRL 1.874,00
    - Mayo: BRL 7.000,00
    - Junio: BRL 9.450,00

d) descuento INSS 5% del salario

Calcular:

1) El salario fijo más el subsidio de guardería

2) Cuanta comisión recibirá Fulano de Silva en enero (consejo: para calcular el 20% de alguna cantidad, hacemos el cálculo: valor*0.2)

3) Cuánto se descontará fulano en enero por el INSS (el monto a calcular debe tener en cuenta el salario + porcentaje de ventas).

4) Imprimir en la consola el cálculo del salario de todos los meses con adiciones y descuentos.

5) Salario promedio en seis meses (de enero a junio), teniendo en cuenta comisiones y dietas.
  (Sugerencia: la media aritmética se calcula sumando un grupo de números y dividiendo por el número de elementos sumados. Por ejemplo, la suma de 2, 3, 3, 5, 7 y 10 es 30 dividido por 6, dando un promedio de 5.)
  