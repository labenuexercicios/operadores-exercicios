# Exercise 3

### Part 1
Write the logical operations below in code format. Print to the console whether the value of the operation is true or false:

a) 5 is greater than 20 and is also less than 2;

b) 5 is equal to 5 or is equal to “5”;

c) negation of (twenty is greater than fifty)

d) negation of (twenty is greater than fifty OR fifty is greater than sixty)

Example:

```jsx
const operarion1 = 20 < 50 && 50 > 90;
console.log(operation1);
/*false, because 50 is not greater than 90, hence we have true && false,
which returns false*/
```

### Part 2

In the last class you started to implement a system for the HR of a company.

Let's continue? Let's assume that the exercise of the last class results in the report below:**

**The employee Fulano de Silva, with CPF: 000.000.000-00, was born on 02/10/1990, resides at: Rua dos Bobos nº 0 and has 2 children. Do you have a license? Yup. He holds the position of salesperson, receives a salary of 2,000.00 reais, plus a 10% commission on total sales in the month and joined the company in 2019.**

Calculate the salary of Fulano da Silva taking into account the following data:

a) Daycare allowance per child: R$45.50

b) 10% commission on total monthly sales

c) Total sales from January to June:

    - January: BRL 5,784.50
    - February: BRL 3,418.41
    - March: BRL 4,124.10
    - April: BRL 1,874.00
    - May: BRL 7,000.00
    - June: BRL 9,450.00

d)  INSS discount 5% of salary

Calculate:

1) The fixed salary plus the daycare allowance

2) How much commission will Fulano de Silva receive in January ( tip: to calculate 20% of some amount, we do the calculation: value*0.2)

3) How much so-and-so will be deducted in January by the INSS (the amount to be calculated must take into account the salary + percentage of sales.)

4) Print on the console the salary calculation for all months with additions and discounts.

5) Average salary in six months (from January to June), taking into account commissions and allowance.
  (Hint: The arithmetic mean is calculated by adding a group of numbers and dividing by the number of elements added together. For example, the sum of 2, 3, 3, 5, 7, and 10 is 30 divided by 6, giving an average of 5.)