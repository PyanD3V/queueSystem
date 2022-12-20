const priorityEnum = Object.freeze({ "Alta": 3, "Media": 2, "Baja": 1 });
const priorityEnumReverse = Object.freeze({ "3": "Alta", "2": "Media", "1": "Baja" });

class Queue {
    constructor() {
        this.items = [];
    }

    // Agregar un nuevo cliente a la cola
    enqueue(user) {
        // Encontrar la posicion correcta para el nuevo cliente basado en su prioridad
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (user.priority > this.items[i].priority) {
                this.items.splice(i, 0, user);
                added = true;
                break;
            }
        }
        // Si el cliente tiene la menor prioridad, lo agregamos al final de la cola
        if (!added) {
            this.items.push(user);
        }
    }
    //Listar los clientes en la cola con su prioridad correspondiente
    list() {
        return this.items.map((user, index) => {
            return `${index + 1}. ${user.name} - ${priorityEnumReverse[user.priority]}`;
        });
    }
    //Remover un cliente de la cola
    remove(user) {
        this.items.splice(this.items.indexOf(client), 1);
    }
    //Comparar dos clientes y retornar el de mayor prioridad
    compare(user1, user2) {
        if (user1.priority > user2.priority) {
            return user1;
        } else {
            return user2;
        }
    }
    //Verificar si un cliente esta en la cola
    check(user) {
        return this.items.includes(user);
    }
    //Revisar si la cola esta vacia
    isEmpty() {
        return this.items.length === 0;
    }
}

const queueSystem = new Queue();
queueSystem.enqueue({ name: 'Aguinaldo', priority: priorityEnum.Baja });
queueSystem.enqueue({ name: 'Alice', priority: priorityEnum.Alta });
queueSystem.enqueue({ name: 'Bob', priority: priorityEnum.Media });
queueSystem.enqueue({ name: 'Eve', priority: priorityEnum.Baja });
queueSystem.enqueue({ name: 'Eduardo', priority: priorityEnum.Alta });
queueSystem.enqueue({ name: 'Fernando', priority: priorityEnum.Media });
queueSystem.enqueue({ name: 'Daniel', priority: priorityEnum.Alta });

console.log(queueSystem.list());