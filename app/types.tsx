export type Curso = {
  nrc: string;
  nombre_curso: string;
  creditos: number;
  mas: number;
  menos: number;
  promedio: number;
};

export type CursoApi = {
  course: string;
  average_liked: number;
  average_estimated_credits: number;
  area: string;
};

export type OfgApi = {
  area: string;
  cursos: Array<CursoApi>;
};
