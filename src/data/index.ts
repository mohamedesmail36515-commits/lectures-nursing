import { Subject } from "../types";
import { ebpLectures } from "./ebp";
import { psychologyLectures } from "./psychology";
import { skillsLectures } from "./skills";
import { pediatricsLectures } from "./pediatrics";

export const subjects: Subject[] = [
  {
    id: "pediatrics",
    title: "Pediatric Medicine & Nursing Theory",
    titleAr: "طب وجراحة الأطفال ونظريات التمريض",
    description: "Explore normal pediatric development milestones, pediatric respiratory/urologic diseases, congenital anomalies, and neonatal intensive care workflows.",
    iconName: "Baby",
    lectures: pediatricsLectures
  },
  {
    id: "ebp",
    title: "Evidence-Based Nursing MCH 242",
    titleAr: "التمريض المبني على الأدلة",
    description: "Learn to systematically search, appraise, and apply clinical research findings to maternal and child healthcare.",
    iconName: "FileSpreadsheet",
    lectures: ebpLectures
  },
  {
    id: "psychology",
    title: "Developmental Psychology MCH 223",
    titleAr: "عصبيات وعلم نفس النمو للأطفال",
    description: "Examine childhood anxiety, abnormal pediatric psychology, and core psychosocial development stages (Erikson, Freud).",
    iconName: "Brain",
    lectures: psychologyLectures
  },
  {
    id: "skills",
    title: "Teaching Strategies in Nursing MCH 251",
    titleAr: "استراتيجيات التدريس والتعليم التمريضي",
    description: "Master interactive pedagogical techniques including Brainstorming, E-Learning, and Bloom's Taxonomy domains.",
    iconName: "GraduationCap",
    lectures: skillsLectures
  }
];
