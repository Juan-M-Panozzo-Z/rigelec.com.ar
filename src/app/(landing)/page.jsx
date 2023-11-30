import SectionFluid from "@/components/SectionFluid";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import UltimosMovimientos from "@/components/UltimosMovimientos";

export default async function Home() {
  return (
    <main>
      <Hero />
      <UltimosMovimientos />
      <ContactUs />
      <SectionFluid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.958804991934!2d-58.0255689251823!3d-31.387699394863642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade810c013decd%3A0xed4b0d1cc11c9336!2sRIGELEC%20ELECTRICIDAD%20e%20ILUMINACI%C3%93N%20%2B%20ENERGIAS%20RENOVABLES!5e0!3m2!1sen!2sar!4v1688583605125!5m2!1sen!2sar"
          loading="lazy"
          className="w-full h-96 rounded-box"
        ></iframe>
      </SectionFluid>
    </main>
  );
}
