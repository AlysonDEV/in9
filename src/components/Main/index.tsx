import ImgManPointerScreen from "../../assets/homem-apontando-tela.jpg"
import ImgManReading from "../../assets/homem-lendo.png"
import ImgIconCompany from "../../assets/icon-company.svg"
import ImgIconControl from "../../assets/icon-control.svg"
import ImgIconMoney from "../../assets/icon-money.svg"
import ImgIconTraining from "../../assets/icon-training.svg"

import { useEffect } from "react"
import { RiMailOpenFill, RiWhatsappFill } from 'react-icons/ri'



export function Main() {
  const [isMobile, setIsMobile] = useEffect<Boolean>(false)


  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="grid grid-col-1 md:grid-cols-2 md:col-span-2 gap-4">
          <div className="grid grid-col-1 gap-4 items-center text-center">
            <h3 className="font-bold text-3xl uppercase">
              Quer transformar custos em oportunidades
            </h3>
            <picture className="mx-auto">
              <img
                src={ImgManReading}
                alt="Homem segurando um papel e fazendo uma leitura"
              />
            </picture>
          </div>
          <div className="items-center text-center grid grid-cols-1 gap-8">
            <h2 className="font-bold text-3xl pl-32">
              Observa esse problemas na sua <span className="uppercase font-extrabold">empresa</span>?
            </h2>
            <p className="">
              Perda de vendas?
              Atraso nas entregas?
              Local desorganizado?
              Liderança despreparada?
              Problemas com funcionários?
              Problemas com qualidade?
              Decisões diferêntes para o mesmo problema?
            </p>


            <span>
              Temos uma solução para você não perder dinheiro!
            </span>
          </div >
        </div >

        <div className="grid grid-cols-1 gap-6">
          <picture>
            <img src={ImgManPointerScreen} alt="Homem apontando para tela com gráficos" />
          </picture>
          <div>
            <h3 id="QuemSomos" className="font-bold text-2xl uppercase">
              Quem somos
            </h3>
            <p className="text-justify">
              Desde 2017, o <span className="underline underline-offset-2">Grupo In9</span> nasceu com objetivo de oferecer serviços de consultoria em gestão e capacitação empresarial.</p>
          </div>

          <div>
            <h3 id="NossaMissao" className="font-bold text-right text-2xl uppercase">
              Nossa Missão
            </h3>
            <p className="text-justify">
              Oferecer produtos e serviços que apoiem nossos clientes na realização da gestão do seu negócio, proporcionando maior performance empresarial , auxiliando na transformação de custos em oportunidades.
            </p>

          </div>
        </div>

      </section >

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <article className="grid md:col-span-2 gap-8">
          <h4 className="uppercase text-2xl font-bold">Nossos serviços</h4>
          <p className="text-justify">
            ... buscamos oferecer o melhor da consultoria empresarial,
            focando no aumento da performance, lucratividade e competitividade do seu negócio,
            tendo como premissa o compartilhamento do conhecimento para continuidade das atividades.
          </p>
          <div className="flex items-center gap-4">
            <img src={ImgIconMoney} alt="icone com duas mãos passando dinheiro" className="h-16" />
            <p className="text-justify"><span className="uppercase underline underline-offset-1">CONSULTORIA FINANCEIRA:</span> Diagnóstico financeiro, análise de custos e
              despesas para tomadas de decisão, cálculo e definição de preço de
              venda, implementação de indicadores financeiros.</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-justify"><span className="uppercase underline underline-offset-1">CONSULTORIA EM PROCESSO PRODUTIVO:</span> Implementação de PPCP,
              o timização da logística interna , cronoanálise, documentação e
              padronização de processos, Lean Manufaturing, eventos kaizen,
              ferramentas avançadas da qualidade, Manutenção Produtiva Total
              (TPM), implementação de indicadores de desempenho.</p>
            <img src={ImgIconCompany} alt="icone de uma empresa" className="h-16" />
          </div>

          <div className="flex items-center gap-4">
            <img src={ImgIconControl} alt="icone de um carro e um globo representando o controle logistico" className="h-16" />
            <p className="text-justify"><span className="uppercase underline underline-offset-1">CONSULTORIA EM LOGÍSTICA:</span> Organização da cadeia de suprimentos
              (homologação de fornecedores, fluxo e processo de compras), administração de materiais (sistema de armazenagem, dimensionamento e
              controle de estoques, sistemas de distribuição), logística reversa, implementação de indicadores de desempenho.</p>
          </div>

          <div>
            <h5 className="uppercase text-2xl font-bold" >E NÃO É SÓ ISSO...</h5>
            <div className="flex items-center gap-4">
              <p className="text-justify">... oferecemos soluções personalizadas em <span className="underline underline-offset-1">CAPACITAÇÃO EMPRESARIAL</span>,
                focando o desenvolvimento das suas equipes, seja operacional ou liderança,
                utilizando ferramentas, conceitos, técnicas e habilidades, de modo a
                atender as demandas estratégicas da companhia.</p>
              <img src={ImgIconTraining} alt="icone de pessoas sendo treinadas" className="h-20" />
            </div>
          </div>

        </article>
        <div className="grid text-center align-middle bg-woman-pointing bg-contain bg-no-repeat bg-center">
          <h4 className="text-2xl font-bold" >
            Agende uma reunião sem compromisso!
          </h4>
          <span>
            FALE CONOSCO
          </span>
          <div className="flex flex-col items-center">
            <a href="tel:+55 85 99847 6785" className="flex items-center gap-1">
              <span className="border p-1 border-black">
                <RiWhatsappFill size={12} />
              </span>
              +55 85 99847-6785
            </a>

            <a href="mailto:in9.gestao@gmail.com" className="flex items-center gap-2">
              <span className="border p-1 border-black">
                <RiMailOpenFill size={12} />
              </span>
              in9.gestao@gmail.com
            </a>

          </div>
        </div>

      </section>
    </main>
  )
}