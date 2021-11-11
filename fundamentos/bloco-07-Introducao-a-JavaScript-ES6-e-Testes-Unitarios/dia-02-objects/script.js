// const  obejetoTeste = {}


// const criarObj = (obj,key,value)=>{
   
//     obj[key] = value
//     return obj
// }

// console.log(criarObj(obejetoTeste,'nome','jose'))


// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
  
// //   const listSkills = (student) => {
// //     const arrayOfSkills = Object.keys(student);
// //     const arrayValue = Object.values(student)
// //     for(index in arrayOfSkills){
// //       console.log(`${arrayOfSkills[index]}, Nível: ${arrayValue[index]}`);
     
// //     }
// //   };
// //   listSkills(student2)

// const getDayName = (number) => {
//     const dayNumber = number - 1;
//     const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//     return days[dayNumber];
//   };
  
//   const printDayname = (dayNumber) => {
//     console.log(getDayName(dayNumber));
//   };

//   console.log(getDayName(1))



  const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`)
  }
  
  customerInfo(order);
  

//   const orderModifier = (order) => {
//     // Adicione abaixo as informações necessárias.
  
//   }
  
//   orderModifier(order);