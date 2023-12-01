
const DAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const MONTH = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const getDayName = (date) => {
  let dayNumber = date.getDay();

  return DAYS[dayNumber];
};

const getMonthName = (date) => {
  let monthNumber = date.getMonth();

  return MONTH[monthNumber];
};

const getTime = () => {
  let date = new Date();
  let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
  let time = `${date.getHours()}:${minutes}:${date.getSeconds()}`;

  return time;
};

export const dateToString = (date, fullDate = true) => {
  // 1900 -> URL:
  let dateString = "";

  if (!fullDate) {
    // Se formatea el número de día porque cuando es menor que 10 el día queda con un sólo dígito
    let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

    // Se formatea el número del mes porque cuando es menor que 10 el mes queda con un sólo dígito
    let month =
      date.getMonth() + 1 > 9
        ? date.getMonth() + 1
        : `0${date.getMonth() + 1}`;

    dateString = `${day}/${month}/${date.getFullYear()}`;
    return dateString;
  }

  dateString = `${getDayName(date)}, ${date.getDate()} de ${getMonthName(
    date
  )} de ${date.getFullYear()}`;

  return dateString;
};