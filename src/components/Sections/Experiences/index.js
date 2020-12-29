import React from 'react'

import Section from '../../Section'

import { SectionExperience } from './styles'

const SectionExperiences = () => (
  <Section title='experiences()' id='experiences'>
    <SectionExperience>
      <h3 className="-featured-color">@Climatempo, São José dos Campos/Remoto</h3>
      <h4>Fullstack Developer</h4>
      <time dateTime="2017-06">June 2017</time> - <time dateTime="2020-12">December 2020</time>

      <ul>
        <li>Integrante da equipe de desenvolvimento do Portal e Aplicativos Climatempo.</li>
        <li>Desenvolvimento de novas features e redesign front-end do Portal Climatempo, usando PHP como linguagem back-end, linguagens web, como HTML, CSS/SASS e Javascript e ferramentas de automatização de tarefas.</li>
        <li>Auxílio na construção do Aplicativo Climatempo usando tecnologias como React Native, Redux, MongoDB, GraphQL e Node.js.</li>
      </ul>
    </SectionExperience>

    <SectionExperience>
      <h3 className="-featured-color">@Prodweb, Passa Quatro</h3>
      <h4>Fullstack Developer</h4>
      <time dateTime="2015-06">June 2015</time> - <time dateTime="2017-05">May 2017</time>

      <ul>
        <li>Desenvolvimento de landing pages, sites, e-commerces, CRMs e customização de templates Wordpress, usando PHP e Java no back-end e linguagens web, como HTML, CSS/SASS e Javascript.</li>
        <li>Experiência com desenvolvimento de interfaces responsivas e cross-browser.</li>
        <li>Integrações com gateways de pagamento, como PagSeguro e Vindi.</li>
      </ul>
    </SectionExperience>

    <SectionExperience>
      <h3 className="-featured-color">@CPTEC/INPE, Cachoeira Paulista</h3>
      <h4>Web Develop Intern</h4>
      <time dateTime="2014-06">June 2014</time> - <time dateTime="2015-05">May 2015</time>

      <ul>
        <li>Integrante do time de desenvolvimento do novo portal web do Serviço de Supercomputação e Suporte do CPTEC, usando PHP e o Framework Symfony 2.</li>
        <li>Primeiro contato com frameworks CSS (no caso Metro UI) e consumo de webservices.</li>
      </ul>
    </SectionExperience>
  </Section>
)

export default SectionExperiences