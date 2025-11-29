// Inicialización de variables
var salarioBruto = 0;
var deduccionSalud = 0;
var deduccionPension = 0;
var retencionFuente = 0;
var salarioNeto = 0;
var opcion = 0;
var salarioIngresado = 0; // 0 = no, 1 = si

while (true) {
  console.log("=== Calculadora Salario Neto - NominaFácil ===");
  console.log("1. Ingresar Salario Bruto");
  console.log("2. Calcular Deducción Salud (4%)");
  console.log("3. Calcular Deducción Pensión (4%)");
  console.log("4. Calcular Retención en la Fuente");
  console.log("5. Calcular y Mostrar Salario Neto");
  console.log("6. Salir");
  opcion = prompt("Elija una opción (1-6):");

  // Convertir opcion a número
  opcion = parseInt(opcion, 10);

  if (opcion === 1) {
    var entradaSalario = prompt("Ingrese el salario bruto (número positivo):");
    entradaSalario = parseFloat(entradaSalario);
    if (!isNaN(entradaSalario) && entradaSalario > 0) {
      salarioBruto = entradaSalario;
      salarioIngresado = 1;
      console.log("Salario bruto registrado: " + salarioBruto);
      // Resetear deducciones por si el usuario cambia el salario
      deduccionSalud = 0;
      deduccionPension = 0;
      retencionFuente = 0;
      salarioNeto = 0;
    } else {
      console.log("Valor inválido. Debe ingresar un número positivo.");
    }
  } else if (opcion === 2) {
    if (salarioIngresado === 0) {
      console.log("Primero debe ingresar el salario bruto (opción 1).");
    } else {
      deduccionSalud = salarioBruto * 0.04;
      console.log("Deducción Salud (4%): " + deduccionSalud);
    }
  } else if (opcion === 3) {
    if (salarioIngresado === 0) {
      console.log("Primero debe ingresar el salario bruto (opción 1).");
    } else {
      deduccionPension = salarioBruto * 0.04;
      console.log("Deducción Pensión (4%): " + deduccionPension);
    }
  } else if (opcion === 4) {
    if (salarioIngresado === 0) {
      console.log("Primero debe ingresar el salario bruto (opción 1).");
    } else {
      if (salarioBruto < 4000000) {
        retencionFuente = 0;
        console.log("No aplica retención en la fuente.");
      } else {
        retencionFuente = salarioBruto * 0.05;
        console.log("Aplica retención del 5% (simulado): " + retencionFuente);
      }
    }
  } else if (opcion === 5) {
    if (salarioIngresado === 0) {
      console.log("Primero debe ingresar el salario bruto (opción 1).");
    } else {
      // Asegurarse que las deducciones estén calculadas
      if (deduccionSalud === 0) {
        deduccionSalud = salarioBruto * 0.04;
      }
      if (deduccionPension === 0) {
        deduccionPension = salarioBruto * 0.04;
      }
      if (salarioBruto < 4000000) {
        retencionFuente = 0;
      } else {
        retencionFuente = salarioBruto * 0.05;
      }

      salarioNeto = salarioBruto - deduccionSalud - deduccionPension - retencionFuente;

      console.log("=== Desglose de Pago ===");
      console.log("Salario bruto: " + salarioBruto);
      console.log("Deducción Salud (4%): " + deduccionSalud);
      console.log("Deducción Pensión (4%): " + deduccionPension);
      if (retencionFuente === 0) {
        console.log("Retención en la fuente: No aplica");
      } else {
        console.log("Retención en la fuente (5%): " + retencionFuente);
      }
      console.log("Salario neto a pagar: " + salarioNeto);
    }
  } else if (opcion === 6) {
    console.log("Saliendo. ¡Gracias!");
    break;
  } else {
    console.log("Opción inválida. Por favor elija entre 1 y 6.");
  }

  console.log(""); // línea en blanco para separar iteraciones
}








