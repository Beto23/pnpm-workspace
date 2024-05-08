import { HeroSection, SectionCompanyRepo } from 'shared-ui'

function Home({ children }: { children?: React.ReactNode }) {
  return (
    <section>
      <HeroSection>
        {children}
      </HeroSection>
      <SectionCompanyRepo />
    </section>
  )
}

export default Home
