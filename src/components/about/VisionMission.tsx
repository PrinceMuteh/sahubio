const statements = [
  {
    title: "Our Vision",
    body: "To become a leading indigenous agricultural and biological resources company in Nigeria, recognized for reliability, innovation, research, and sustainable impact across the agricultural value chain.",
    tone: "dark" as const,
  },
  {
    title: "Our Mission",
    body: "To deliver high-quality, sustainable agricultural solutions—from farm inputs and production to engineering, logistics, and export—through expertise, innovation, and strong partnerships.",
    tone: "accent" as const,
  },
];

export function VisionMission() {
  return (
    <div className="grid gap-[18px] md:grid-cols-2 md:gap-6">
      {statements.map((statement) => (
        <article
          key={statement.title}
          className={
            statement.tone === "dark"
              ? "rounded-[20px] bg-brand-800 p-8 lg:p-10 lg:pt-[38px]"
              : "rounded-[20px] bg-accent p-8 lg:p-10 lg:pt-[38px]"
          }
        >
          <h2
            className={
              statement.tone === "dark"
                ? "text-[30px] leading-[1.2] font-bold text-white lg:text-[36px] lg:leading-[44px]"
                : "text-[30px] leading-[1.2] font-bold text-heading lg:text-[36px] lg:leading-[44px]"
            }
          >
            {statement.title}
          </h2>
          <p
            className={
              statement.tone === "dark"
                ? "mt-[26px] text-[17px] leading-[1.7] text-on-dark lg:text-[19px] lg:leading-[31px]"
                : "mt-[26px] text-[17px] leading-[1.7] text-body lg:text-[19px] lg:leading-[31px]"
            }
          >
            {statement.body}
          </p>
        </article>
      ))}
    </div>
  );
}
