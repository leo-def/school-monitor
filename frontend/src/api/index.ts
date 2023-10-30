import { Absence } from "@/absence/_types/absence";
import { Appraisal } from "@/appraisal/_types/appraisal";
import { Grade } from "@/grade/_types/grade";
import { Homework } from "@/homework/_types/homework";
import { Manager } from "@/manager/_types/manager";
import { Meal } from "@/meal/_types/meal";
import { Parent } from "@/parent/_types/parent";
import { SchoolClass } from "@/schoolClass/_types/schoolClass";
import { Student } from "@/student/_types/student";
import { Subject } from "@/subject/_types/subject";
import { Teacher } from "@/teacher/_types/teacher";
import { Notification } from "@/notification/_types/notification";
import { Event } from "@/event/_types/event";
import { addBusinessDays, subBusinessDays } from "date-fns";
import { v4 as uuidv4 } from "uuid";

const parent = [
  {
    id: uuidv4(),
    name: "Luis Alvarez Silva",
    img: "https://m.media-amazon.com/images/M/MV5BMjJhMDVkNGEtNTYwMi00YWY2LTgzNWYtYzczYzM2N2NlOTM4XkEyXkFqcGdeQXVyMTI0NzYzNjE1._V1_.jpg",
  },
  {
    id: uuidv4(),
    name: "Maria Alvarez Silva",
    img: "https://www.cambridgema.gov/-/media/Images/cambridgepubliclibrary/libcaleventimages/5922400.jpg",
  },
] as Array<Parent>;

const schoolClass = [
  {
    id: uuidv4(),
    title: "5º Série A - Manhã",
  },
  {
    id: uuidv4(),
    title: "5º Série  - Tarde",
  },
  {
    id: uuidv4(),
    title: "6º Série A - Manhã",
  },
  {
    id: uuidv4(),
    title: "6º Série  - Tarde",
  },
] as Array<SchoolClass>;

const student = [
  {
    id: uuidv4(),
    name: "José Elias Silva",
    img: "https://static-hotsites.edufindme.com/tsw-event/f26a7d9d8f33888b6f766d133e1e56538199d252/static/img/hub/img/img-student-6.png",
  },
  {
    id: uuidv4(),
    name: "Luiza Silva",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-aAJoWGIzK8jgWvwCTbh7dwW3gT2aHVGrg&usqp=CAU",
  },
] as Array<Student>;

const teacher = [
  {
    id: uuidv4(),
    name: "José Alves Santos",
    img: "https://www.frontiersin.org/image/researchtopic/40688",
  },
  {
    id: uuidv4(),
    name: "Maria Nascimento",
    img: "https://www.thoughtco.com/thmb/GO3vneYcP8XrkCpA0_euAPqcgHU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/teachculturarmdavidjaklecollectionmixsubject-56a939965f9b58b7d0f965d1.jpg",
  },
] as Array<Teacher>;

const manager = [
  {
    id: uuidv4(),
    name: "Rodrigo Silveira",
    img: "https://st4.depositphotos.com/2208684/30213/i/450/depositphotos_302139812-stock-photo-portrait-shot-smiling-businessman-wearing.jpg",
  },
] as Array<Manager>;

const absence = [
  {
    id: uuidv4(),
    desc: "",
    hasJustification: true,
    justification: "Consulta médica",
    start: subBusinessDays(new Date(), 3),
    date: subBusinessDays(new Date(), 3),
    fullDay: true,
  },
  {
    id: uuidv4(),
    desc: "Faltou",
    hasJustification: false,
    justification: "",
    start: subBusinessDays(new Date(), 5),
    date: subBusinessDays(new Date(), 35),
    fullDay: true,
  },
] as Array<Absence>;

const event = [
  {
    id: uuidv4(),
    title: "Gincana",
    desc: "",
    recess: false,
    start: addBusinessDays(new Date(), 4),
    end: addBusinessDays(new Date(), 4),
    fullDay: true,
  },
  {
    id: uuidv4(),
    title: "Feira de ciências",
    desc: "",
    recess: false,
    start: addBusinessDays(new Date(), 12),
    end: addBusinessDays(new Date(), 12),
    fullDay: true,
  },
  {
    id: uuidv4(),
    title: "Dia das crianças",
    desc: "",
    recess: true,
    start: addBusinessDays(new Date(), 8),
    end: addBusinessDays(new Date(), 8),
    fullDay: true,
  },
] as Array<Event>;

const grade = [
  {
    id: uuidv4(),
    title: "Prova Bimestral",
    desc: "Precisa melhorar",
    value: 5,
    max: 10,
    min: 0,
    passingScore: 7,
  },
  {
    id: uuidv4(),
    title: "Nota final bimestral",
    desc: "Passou na tampa",
    value: 7,
    max: 10,
    min: 0,
    passingScore: 7,
  },
  {
    id: uuidv4(),
    title: "Trabalho de pintura",
    desc: "Parabéns",
    value: 10,
    max: 10,
    min: 0,
    passingScore: 7,
  },
] as Array<Grade>;

const homework = [
  {
    id: uuidv4(),
    title: "Trabalho de pintura",
    desc: "Pintar desenho página 10.",
    status: "DELIVERED",
    date: subBusinessDays(new Date(), 6),
    deadline: subBusinessDays(new Date(), 4),
    deliveryDate: subBusinessDays(new Date(), 4),
    grade: {
      id: uuidv4(),
      title: "Trabalho de pintura",
      desc: "Parabéns",
      value: 10,
      max: 10,
      min: 0,
      passingScore: 7,
    },
  },
  {
    id: uuidv4(),
    title: "Tarefa de recorte",
    desc: "Recortar pontilhados página 14.",
    status: "PENDING",
    date: subBusinessDays(new Date(), 2),
    deadline: addBusinessDays(new Date(), 4),
    deliveryDate: null,
    grade: null,
  },
  {
    id: uuidv4(),
    title: "Página 12.",
    desc: "Preencher página 12 do livro",
    status: "PENDING",
    date: subBusinessDays(new Date(), 4),
    deadline: subBusinessDays(new Date(), 2),
    deliveryDate: null,
    grade: null,
  },
  {
    id: uuidv4(),
    title: "Página 27.",
    desc: "Preencher página 27 do livro",
    status: "LATE",
    date: subBusinessDays(new Date(), 6),
    deadline: subBusinessDays(new Date(), 4),
    deliveryDate: subBusinessDays(new Date(), 2),
    grade: null,
  },
] as Array<Homework>;

const appraisal = [
  {
    id: uuidv4(),
    title: "Prova bimestral de matemática",
    desc: "",
    date: subBusinessDays(new Date(), 6),
    grade: {
      id: uuidv4(),
      title: "Prova bimestral de matemática",
      desc: "Parabéns",
      value: 10,
      max: 10,
      min: 0,
      passingScore: 7,
    },
  },
  {
    id: uuidv4(),
    title: "Prova surpresa de matemática",
    desc: "",
    date: addBusinessDays(new Date(), 4),
    grade: null,
  },
] as Array<Appraisal>;

const meal = (
  [
    { weekDays: "MONDAY", label: "segunda feira" },
    { weekDays: "TUESDAY", label: "terça feira" },
    { weekDays: "WEDNESDAY", label: "quarta feira" },
    { weekDays: "THURSDAY", label: "quinta feira" },
    { weekDays: "FRIDAY", label: "sexta feira" },
  ] as Array<{ weekDays: string; label: string }>
).reduce(
  (prev, curr) => [
    ...prev,
    {
      id: uuidv4(),
      title: `Café da manhã de ${curr.label}`,
      desc: "pão, queijo, presunto, café, suco geleia, requeijão, frutas e biscoito ",
      type: "BREAKFAST",
      weekDays: curr.weekDays,
    },
    {
      id: uuidv4(),
      title: `Almoço de ${curr.label}`,
      desc: "Arroz, feijão, salada e macarrão",
      type: "LUNCH",
      weekDays: curr.weekDays,
    },
    {
      id: uuidv4(),
      title: `Jantar de ${curr.label}`,
      desc: "pão, queijo, presunto, café, suco geleia, requeijão, frutas e biscoito ",
      type: "DINNER",
      weekDays: curr.weekDays,
    },
  ],
  [] as Array<Meal>
);

const notification = [
  {
    id: uuidv4(),
    title: "Mal comportamento",
    desc: "Aluno apresentou comportamento inadequado",
    date: subBusinessDays(new Date(), 2),
  },
  {
    id: uuidv4(),
    title: "A note de cortes vai ser 6.0 a partir de  proximo mês ",
    desc: "As tarefas anteriores continuaram a ser avaliadas pelo corte padrão anterior.",
    date: subBusinessDays(new Date(), 4),
  },
] as Array<Notification>;

const subject = [
  {
    id: uuidv4(),
    title: "Artes",
  },
  {
    id: uuidv4(),
    title: "Português",
  },
  {
    id: uuidv4(),
    title: "Matemática",
  },
] as Array<Subject>;

interface Api {
  [x: string]: Array<any>;
}
const api = {
  parent,
  schoolClass,
  student,
  teacher,
  manager,
  absence,
  event,
  grade,
  homework,
  appraisal,
  meal,
  notification,
  subject,
} as Api;

export default function apiFetch(
  href: string,
  prev?: Array<{ path: string; id?: string }>
):
  | Array<Parent>
  | Parent
  | Array<SchoolClass>
  | SchoolClass
  | Array<Student>
  | Student
  | Array<Teacher>
  | Teacher
  | Array<Manager>
  | Manager
  | Array<Absence>
  | Absence
  | Array<Event>
  | Event
  | Array<Grade>
  | Grade
  | Array<Homework>
  | Homework
  | Array<Appraisal>
  | Appraisal
  | Array<Meal>
  | Meal
  | Array<Notification>
  | Notification
  | Array<Subject>
  | Subject {
  if (href.startsWith("/")) {
    href = href.substring(1);
  }
  const [path, id, ...other] = href.split("/");
  if (other && other.length > 0) {
    return apiFetch(other.join("/"), [...(prev ?? []), { path, id }]);
  }
  const response = api[path] ?? [];
  return id ? response.find((item) => item?.id === id) : response;
}
