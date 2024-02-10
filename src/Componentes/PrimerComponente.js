import React from 'react'

export const PrimerComponente = () => {
    return (
        <div><h1>Backlog</h1>
        <table>
          <thead>
            <tr>
              <th>Identificador (ID) de la Historia</th>
              <th>Enunciado de la Historia</th>
              <th>Alias</th>
              <th>Estado</th>
              <th>Dimensión/ Esfuerzo</th>
              <th>Interacción (Sprint)</th>
              <th>Prioridad</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td>HU01</td>
                <td>Como administrador de la comunidad, quiero crear y editar el contenido de la aplicación para gestionar las actividades administrativas de la comunidad vecinal
Condiciones:
	Se deberá utilizar los colores de identidad de la comunidad (verde Pantone: 626 C) y la tipografía en cada uno de los contenidos dentro de la aplicación (fuente tipográfica Gotham)
	El administrador puede acceder a la opción de crear contenido desde el menú principal de la aplicación
	El administrador debe poder crear diferentes tipos de contenido, como:
-Noticias y anuncios
-Eventos y actividades
-Encuestas y votaciones
-Documentos y archivos
	El administrador debe tener permisos específicos para acceder a diferentes funcionalidades de la aplicación, como:
-Crear y editar contenido
-Eliminar contenido
</td>
                <td>Creación de la aplicación web</td>
                <td>Planificada</td>
                <td>10 días </td>
                <td>Sprint 1</td>
                <td>Alta</td>
                
              </tr>
        
          </tbody>
          <tbody>
              <tr >
                <td>HU03</td>
                <td>Como miembro de la comunidad, quiero registrarme para obtener una cuenta que me permita acceder a en la aplicación
Condiciones:
	El miembro de la comunidad puede acceder a la opción de registro desde la página de inicio de la aplicación
	El usuario debe poder registrarse en la aplicación proporcionando la siguiente información:
*Nombre completo
*Correo electrónico
*Contraseña
*Confirmación de contraseña
	El usuario hace clic en el enlace del correo electrónico de confirmación y activa su cuenta correctamente.
	El usuario inicia sesión correctamente en la aplicación.
</td>
                <td>Registro de vecino</td>
                <td>Planificada</td>
                <td>8 días </td>
                <td>Sprint 1</td>
                <td>Alta</td>
                
              </tr>
        
          </tbody>
          <tbody>
              <tr >
                <td>HU05</td>
                <td>Como miembro de la comunidad quiero poder pagar mis cuotas de mantenimiento en la aplicación para evitar el traslado a una oficina física.
Condiciones:
	El miembro de la comunidad puede acceder a la opción de pago desde la aplicación.
	El miembro de la comunidad puede elegir el método de pago que prefiera y realizar el pago desde la aplicación.
	La información de pago del usuario debe ser encriptada y protegida para garantizar la seguridad.
	Se debe enviar un recibo electrónico al usuario por correo electrónico después de que se haya realizado el pago.
	El usuario debe poder ver un historial de sus pagos en la aplicación.
</td>
                <td>Pago de cuotas</td>
                <td>Planificada</td>
                <td>9 días </td>
                <td>Sprint 1</td>
                <td>Alta</td>
                
              </tr>
        
          </tbody>
          <tbody>
              <tr >
                <td>HU04</td>
                <td>Como miembro de la comunidad, quiero poder votar en las elecciones y responder encuestas para conocer las preferencias   de la comunidad.
Condiciones:
	El miembro de la comunidad puede acceder a la opción de votar en las elecciones desde la aplicación
	El miembro de la comunidad puede acceder a la opción de responder encuestas desde la aplicación
	Los resultados de las elecciones y encuestas deben ser publicados en la aplicación
	El usuario debe recibir una notificación en la aplicación cuando se publiquen nuevas elecciones o encuestas
</td>
                <td>Votación en elecciones/ encuestas</td>
                <td>Planificada</td>
                <td>10 días </td>
                <td>Sprint 1</td>
                <td>Alta</td>
                
              </tr>
        
          </tbody>
          <tbody>
              <tr >
                <td>HU02</td>
                <td>ComComo miembro de la comunidad, quiero poder informar de problemas al administrador para que puedan ser resueltos
Condiciones:
	El miembro de la comunidad puede acceder a la opción de informar de problemas desde la aplicación.
	La aplicación debe tener un formulario que permita a los usuarios informar de problemas.
	El administrador debe recibir una notificación en la aplicación cuando se informa de un nuevo problema
	El miembro de la comunidad puede consultar el estado del problema informado desde la aplicación.
	El administrador debe resolver el problema y notificar al usuario cuando se haya resuelto.
</td>
                <td>Reporte de problemas</td>
                <td>Planificada</td>
                <td>5 días </td>
                <td>Sprint 1</td>
                <td>Media</td>
                
              </tr>
        
          </tbody>
        </table>
            
        </div>
    )
}