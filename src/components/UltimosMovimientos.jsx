import { lastArticles } from "@/actions/paljet/articles";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Slide from "./Slide";

export const revalidate = 150;

export default async function UltimosMovimientos() {
  const articles = await lastArticles()

  return (
    <Section>
      <SectionTitle title="Últimos ingresos" />
      <Slide articles={articles} />
    </Section>
  )
}