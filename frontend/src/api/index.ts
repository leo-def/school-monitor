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

const parent = [
  {
    id: "58aee737-6258-4e2d-ba24-ed10cb68282b",
    name: "Luis Alvarez Silva",
    img: "https://m.media-amazon.com/images/M/MV5BMjJhMDVkNGEtNTYwMi00YWY2LTgzNWYtYzczYzM2N2NlOTM4XkEyXkFqcGdeQXVyMTI0NzYzNjE1._V1_.jpg",
  },
  {
    id: "013622c1-0efe-4252-bc43-a1655774731a",
    name: "Maria Alvarez Silva",
    img: "https://www.cambridgema.gov/-/media/Images/cambridgepubliclibrary/libcaleventimages/5922400.jpg",
  },
] as Array<Parent>;

const schoolClass = [
  {
    id: "e110a75e-eedc-40bf-b557-e4c7c030b735",
    title: "5º Série A - Manhã",
  },
  {
    id: "7107d224-570e-4495-a2b3-7574b89c8b4a",
    title: "5º Série  - Tarde",
  },
  {
    id: "a62096cc-90a3-4f4f-880b-e4239bd8f193",
    title: "6º Série A - Manhã",
  },
  {
    id: "3bdeecb6-9e41-4682-9eb1-fc0469559f23",
    title: "6º Série  - Tarde",
  },
] as Array<SchoolClass>;

const student = [
  {
    id: "d20bcb40-7b3d-4338-b073-f48587549013",
    name: "José Elias Silva",
    img: "https://marista.edu.br/wp-content/uploads/2022/07/EF1.png",
  },
  {
    id: "708f2625-ca68-42ba-894c-907f9d5de76d",
    name: "Luiza Silva",
    img: "https://img.freepik.com/fotos-gratis/vida-universitaria-estilo-de-vida-moderno-e-conceito-de-educacao-aluna-ruiva-bonita-alegre-com-cabelo-comprido-sexy-usando-fones-de-ouvido-no-pescoco-mochila-camera-sorridente_1258-73003.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698364800&semt=sph",
  },
] as Array<Student>;

const teacher = [
  {
    id: "9418a579-7c55-4814-87a2-7a505811627d",
    name: "José Alves Santos",
    img: "https://www.frontiersin.org/image/researchtopic/40688",
  },
  {
    id: "0ea70bd1-ed2c-495f-a1bf-6ba3abebe6bc",
    name: "Maria Nascimento",
    img: "https://www.escoladireta.com.br/wp-content/uploads/2017/09/Fotolia_52571231_Subscription_Monthly_M.jpg",
  },
] as Array<Teacher>;

const manager = [
  {
    id: "1f5c1ade-516c-4c04-af02-3cc62f4f1fe6",
    name: "Rodrigo Silveira",
    img: "https://st4.depositphotos.com/2208684/30213/i/450/depositphotos_302139812-stock-photo-portrait-shot-smiling-businessman-wearing.jpg",
  },
] as Array<Manager>;

const absence = [
  {
    id: "ca743492c-24e5-455b-a0ab-a8252911f9f6",
    desc: "",
    hasJustification: true,
    justification: "Consulta médica",
    start: subBusinessDays(new Date(), 3),
    end: subBusinessDays(new Date(), 3),
    fullDay: false,
  },
  {
    id: "1d6a9e8c-a887-453f-80fc-64027af1c6c2",
    desc: "Faltou",
    hasJustification: false,
    justification: "",
    start: subBusinessDays(new Date(), 5),
    end: subBusinessDays(new Date(), 35),
    fullDay: true,
  },
  {
    id: "ca743492c-24e5-455b-a0ab-a8252911f9f6",
    desc: "Feriado",
    hasJustification: true,
    justification: "Feriado nacional",
    start: subBusinessDays(new Date(), 13),
    end: subBusinessDays(new Date(), 13),
    fullDay: true,
  },
] as Array<Absence>;

const event = [
  {
    id: "589fe2bf-a814-4136-b5c9-7b29ab70b53b",
    title: "Gincana",
    desc: "",
    recess: false,
    start: addBusinessDays(new Date(), 4),
    end: addBusinessDays(new Date(), 4),
    fullDay: true,
  },
  {
    id: "39a2db28-c8b6-48e9-87fd-443cf419a75b",
    title: "Feira de ciências",
    desc: "",
    recess: false,
    start: addBusinessDays(new Date(), 12),
    end: addBusinessDays(new Date(), 12),
    fullDay: false,
  },
  {
    id: "601131a5-27c9-4ed1-a179-473998b6641b",
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
    id: "affec412-10d3-40d2-b050-cc43454b89c7",
    title: "Prova Bimestral",
    desc: "Precisa melhorar",
    value: 5,
    max: 10,
    min: 0,
    passingScore: 7,
  },
  {
    id: "7dbfb95b-368a-44e6-bc7b-78297743c671",
    title: "Nota final bimestral",
    desc: "Passou na tampa",
    value: 7,
    max: 10,
    min: 0,
    passingScore: 7,
  },
  {
    id: "52489e01-90a7-4400-bb79-cab1058198fa",
    title: "Trabalho de pintura",
    desc: "Parabéns",
    value: 10,
    max: 10,
    min: 0,
    passingScore: 7,
  },
  {
    id: "38fb12ea-ad9a-49bd-bff9-2c66db6293ef",
    title: null,
    desc: "Presisa melhorar",
    value: 3,
    max: 10,
    min: 0,
    passingScore: 7,
  },
  {
    id: "2f02e9d9-247d-426c-aa08-b17b511f02ef",
    title: "Prova bimestral de matemática",
    desc: "Parabéns",
    value: 10,
    max: 10,
    min: 0,
    passingScore: 7,
  },
  {
    id: "5764ed35-e605-4ff6-961d-642add0d2293",
    title: null,
    desc: "Presisa melhorar",
    value: 3,
    max: 10,
    min: 0,
    passingScore: 7,
  },
] as Array<Grade>;

const homework = [
  {
    id: "95d62677-09b4-4b14-868f-e477d2db6df6",
    title: "Trabalho de pintura",
    desc: "Pintar desenho página 10.",
    status: "DELIVERED",
    date: subBusinessDays(new Date(), 6),
    deadline: subBusinessDays(new Date(), 4),
    deliveryDate: subBusinessDays(new Date(), 4),
    grade: {
      id: "52489e01-90a7-4400-bb79-cab1058198fa",
      title: "Trabalho de pintura",
      desc: "Parabéns",
      value: 10,
      max: 10,
      min: 0,
      passingScore: 7,
    },
  },
  {
    id: "e7a498c9-c3d6-4125-8328-15e1e140d2f4",
    title: "Tarefa de recorte",
    desc: "Recortar pontilhados página 14.",
    status: "PENDING",
    date: subBusinessDays(new Date(), 2),
    deadline: addBusinessDays(new Date(), 4),
    deliveryDate: null,
    grade: null,
  },
  {
    id: "4090de5e-7a9b-49ab-a1e7-d0c33d21969d",
    title: "Página 12.",
    desc: "Preencher página 12 do livro",
    status: "PENDING",
    date: subBusinessDays(new Date(), 4),
    deadline: subBusinessDays(new Date(), 2),
    deliveryDate: null,
    grade: null,
  },
  {
    id: "d6ba7eb0-4eb5-43d9-82cf-6d73c1f2305e",
    title: "Página 27.",
    desc: "Preencher página 27 do livro",
    status: "LATE",
    date: subBusinessDays(new Date(), 6),
    deadline: subBusinessDays(new Date(), 4),
    deliveryDate: subBusinessDays(new Date(), 2),
    grade: {
      id: "5764ed35-e605-4ff6-961d-642add0d2293",
      title: null,
      desc: "Presisa melhorar",
      value: 3,
      max: 10,
      min: 0,
      passingScore: 7,
    },
  },
] as Array<Homework>;

const appraisal = [
  {
    id: "e59e59db-4cf2-4bc0-8a98-464ae4f08443",
    title: "Prova bimestral de matemática",
    desc: "",
    date: subBusinessDays(new Date(), 6),
    grade: {
      id: "2f02e9d9-247d-426c-aa08-b17b511f02ef",
      title: "Prova bimestral de matemática",
      desc: "Parabéns",
      value: 10,
      max: 10,
      min: 0,
      passingScore: 7,
    },
  },
  {
    id: "95888f9b-f6f5-4900-a9dc-fc2aacbda295",
    title: "Prova surpresa de matemática",
    desc: "",
    date: addBusinessDays(new Date(), 4),
    grade: null,
  },
  {
    id: "286470d2-973d-47a5-b65f-262052d98054",
    title: "Prova sobre o livro XYZ",
    desc: "",
    date: addBusinessDays(new Date(), 8),
    grade: null,
  },
] as Array<Appraisal>;

const meal = (
  [
    {
      weekDays: "MONDAY",
      label: "segunda feira",
      breakfast: "23b972a0-fa5d-420c-8f5d-3eaec3ad7569",
      lunch: "0024a957-a49a-4945-9107-77658cd81f3c",
      dinner: "b8e7226c-b306-4da6-8c78-99b68fcaf2b5",
    },
    {
      weekDays: "TUESDAY",
      label: "terça feira",
      breakfast: "8b8079ee-4e62-430d-a633-993e1458f37c",
      lunch: "6d1ef52d-f101-4fc2-93e2-6532429160c3",
      dinner: "d69be9d9-16dd-4239-9706-da53365ed3b1",
    },
    {
      weekDays: "WEDNESDAY",
      label: "quarta feira",
      breakfast: "d9fcbaa2-9cf0-4d3f-b1fc-d6fe11586784",
      lunch: "0ea5a1cd-080b-4646-92ff-81d23b9d0bae",
      dinner: "58db1b9d-0524-4169-a894-83fe85777c33",
    },
    {
      weekDays: "THURSDAY",
      label: "quinta feira",
      breakfast: "589f3e67-7916-439f-bff6-8affb65c97e3",
      lunch: "7a73d3db-7a75-4632-b837-113d481775f1",
      dinner: "b654ddaa-1bd9-4c42-9bfb-0ee5f6b5358a",
    },
    {
      weekDays: "FRIDAY",
      label: "sexta feira",
      breakfast: "eb5a467a-a260-4f5f-bece-60a025d80978",
      lunch: "c58c1c2d-1098-48df-815d-bc8eb2ddd875",
      dinner: "4335ea07-6090-44fd-858c-36e36807d926",
    },
  ] as Array<{
    weekDays: string;
    label: string;
    breakfast: string;
    lunch: string;
    dinner: string;
  }>
).reduce(
  (prev, curr) => [
    ...prev,
    {
      id: curr.breakfast,
      title: `Café da manhã de ${curr.label}`,
      desc: "pão, queijo, presunto, café, suco geleia, requeijão, frutas e biscoito ",
      type: "BREAKFAST",
      weekDays: curr.weekDays,
    },
    {
      id: curr.lunch,
      title: `Almoço de ${curr.label}`,
      desc: "Arroz, feijão, salada e macarrão",
      type: "LUNCH",
      weekDays: curr.weekDays,
    },
    {
      id: curr.dinner,
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
    id: "d04d709a-1804-4e33-a042-7431f56fd511",
    title: "Mal comportamento",
    desc: "Aluno apresentou comportamento inadequado",
    date: subBusinessDays(new Date(), 2),
  },
  {
    id: "3250ac62-f2b6-4c93-89c9-b0f6c0a53b16",
    title: "A nota de cortes vai ser 6.0 a partir de  proximo mês ",
    desc: "As tarefas anteriores continuaram a ser avaliadas pelo corte padrão anterior.",
    date: subBusinessDays(new Date(), 4),
  },
] as Array<Notification>;

const subject = [
  {
    id: "ca743492c-24e5-455b-a0ab-a82e2911f9f6",
    title: "Artes",
    teacher: {
      id: "9418a579-7c55-4814-87a2-7a505811627d",
      name: "José Alves Santos",
      img: "https://www.frontiersin.org/image/researchtopic/40688",
    },
  },
  {
    id: "2b30110e-a6fc-4e1b-8dcf-11433dc1fc84",
    title: "Português",
    teacher: {
      id: "0ea70bd1-ed2c-495f-a1bf-6ba3abebe6bc",
      name: "Maria Nascimento",
      img: "https://www.escoladireta.com.br/wp-content/uploads/2017/09/Fotolia_52571231_Subscription_Monthly_M.jpg",
    },
  },
  {
    id: "9b23c69f-d8d8-4d17-b789-77d02553f4a9",
    title: "Matemática",
    teacher: {
      id: "0ea70bd1-ed2c-495f-a1bf-6ba3abebe6bc",
      name: "Maria Nascimento",
      img: "https://www.escoladireta.com.br/wp-content/uploads/2017/09/Fotolia_52571231_Subscription_Monthly_M.jpg",
    },
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
