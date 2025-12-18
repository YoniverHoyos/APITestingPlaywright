# APITestingPlaywright
Este repositorio contiene dos archivos .feature los cuales cumplen con sus respectivos ejercicios de codificación en API testing con Playwright y Cucumber:

Ejercicio 2:
Considere como SUT la API https://petstore.swagger.io/ el cual es un servicio destinado a la gestión de una tienda de venta de mascotas. Implementar los casos de pruebas asociados a las siguientes funcionalidades:
● Consultar una orden de compra
● Buscar la orden de compra creada
● Verificar el inventario de ventas
● Eliminar una orden de compra

Ejercicio 3
Considere como SUT la API https://openweathermap.org/current la cual emite información del clima en tiempo real. Implementar los casos de pruebas asociados a las siguientes funcionalidades:
● Obtener la información del clima consultando por nombre de ciudad
● Obtener la información del clima consultando por latitud y longitud
● Obtener la información del clima en formato Json
● Obtener la información del clima en formato XML

Es importante recalcar que el ejercicio 1 no se pudo realizar debido a que la plataforma API https://reqres.in/api-docs/ no funciono de la manera esperada obteniendo la respuesta que se observa en la imagen:
<img width="700" height="416" alt="image" src="https://github.com/user-attachments/assets/f3ed909b-d8ba-4721-8685-f1b27ce1b50d" />

# Prerequisitos
Para la ejecucion del repositorio es necesario cumplir estos prerequisitos
● Node.js
● Visual Studio Code e instalar las extenciones: Cucumber Playwright
Antes de la configuración del proyecto es necesario clonar este repositorio dentro de un nuevo directorio. 

# Configuración del proyecto
Por medio de Visual Studio Code abrir una nueva terminal. Luego realizar la configuración del proyecto con los siguientes comandos:

Inicializar un nuevo proyecto de Node.js usando npm init -f.
Instalar la ultima version de Playwright usando npm init playwright@latest.
Instalar Cucumber usando npm install -D @cucumber/cucumber.
Instalar ts node usando npm install -D ts-node.

# Ejecución del repositorio
Para la ejecución del repositorio se utiliza el comando npm run cucumber, por medio del cual se ejecutan los archivos .feature y se generan los reportes dentro de la carpeta reports del proyecto. Estos reportes son generados en formato .json y .html, permitiendo verificar la ejecución de los casos de prueba desarrollados.
