
const validarTelefone = (telefone) => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(telefone);
};


class Reserva {
    constructor(nome, telefone, data, hora, mesas) {
        this.nome = nome;
        this.telefone = telefone;
        this.data = data;
        this.hora = hora;
        this.mesas = mesas;
    }
}


class ReservaService {
    constructor() {
        this.reservas = [];
        this.capacidadeTotal = 10; 
        this.datasBloqueadas = ['2024-09-15', '2024-09-16', '2024-09-17', '2024-09-18', '2024-09-19', '2024-09-20']; 
    }

    adicionarReserva(reserva) {
        this.reservas.push(reserva);
    }

    filtrarReservasPorData(data) {
        return this.reservas.filter(reserva => reserva.data === data);
    }


    verificarDisponibilidade(data, mesasSolicitadas) {
        if (this.datasBloqueadas.includes(data)) {
            return false; 
        }
        const reservasDoDia = this.filtrarReservasPorData(data);
        const mesasOcupadas = reservasDoDia.reduce((total, reserva) => total + reserva.mesas, 0);
        return (mesasOcupadas + mesasSolicitadas) <= this.capacidadeTotal;
    }


    calcularMesasDisponiveis(data) {
        if (this.datasBloqueadas.includes(data)) {
            return 0;
        }
        const reservasDoDia = this.filtrarReservasPorData(data);
        const mesasOcupadas = reservasDoDia.reduce((total, reserva) => total + reserva.mesas, 0);
        return this.capacidadeTotal - mesasOcupadas;
    }


    adicionarReservasPreDefinidas() {
        const reservasPreDefinidas = [
            new Reserva('Carlos Silva', '(11) 98765-4321', '2024-09-15', '19:00', 4),
            new Reserva('Ana Souza', '(21) 91234-5678', '2024-09-16', '20:00', 3),
            new Reserva('Mariana Oliveira', '(31) 99876-5432', '2024-09-17', '21:00', 5),
            new Reserva('José Pereira', '(41) 91234-6789', '2024-09-18', '18:30', 2),
            new Reserva('Clara Lima', '(51) 93456-7890', '2024-09-19', '19:45', 4),
            new Reserva('Pedro Ferreira', '(61) 94567-8901', '2024-09-20', '19:00', 6),
        ];

        reservasPreDefinidas.forEach(reserva => this.adicionarReserva(reserva));
    }
}


const reservaService = new ReservaService();


const formReserva = document.getElementById('formReserva');
const listaReservas = document.getElementById('listaReservas');
const formDisponibilidade = document.getElementById('formDisponibilidade');
const mesasDisponiveisText = document.getElementById('mesasDisponiveis');

const atualizarReservas = () => {
    listaReservas.innerHTML = '';
    reservaService.reservas.forEach(reserva => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reserva.nome}</td>
            <td>${reserva.telefone}</td>
            <td>${reserva.data}</td>
            <td>${reserva.hora}</td>
            <td>${reserva.mesas}</td>
        `;
        listaReservas.appendChild(row);
    });
};


formReserva.addEventListener('submit', (event) => {
    event.preventDefault();


    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const mesas = parseInt(document.getElementById('mesas').value, 10);


    if (!validarTelefone(telefone)) {
        alert('Telefone inválido! Utilize o formato (XX) XXXXX-XXXX.');
        return;
    }


    if (!reservaService.verificarDisponibilidade(data, mesas)) {
        if (reservaService.datasBloqueadas.includes(data)) {
            alert(`Não há disponibilidade de reservas para o dia ${data}.`);
        } else {
            alert('Capacidade excedida para essa data. Tente um número menor de mesas ou outra data.');
        }
        return;
    }


    const novaReserva = new Reserva(nome, telefone, data, hora, mesas);
    reservaService.adicionarReserva(novaReserva);


    atualizarReservas();


    formReserva.reset();
});


formDisponibilidade.addEventListener('submit', (event) => {
    event.preventDefault();

    const dataDisponibilidade = document.getElementById('dataDisponibilidade').value;
    const mesasDisponiveis = reservaService.calcularMesasDisponiveis(dataDisponibilidade);

    if (reservaService.datasBloqueadas.includes(dataDisponibilidade)) {
        mesasDisponiveisText.textContent = `Não há disponibilidade de reservas para o dia ${dataDisponibilidade}.`;
    } else {
        mesasDisponiveisText.textContent = `Mesas disponíveis para ${dataDisponibilidade}: ${mesasDisponiveis}`;
    }
});


reservaService.adicionarReservasPreDefinidas();
atualizarReservas();
