import ImgManPointerScreen from "../../assets/homem-apontando-tela.jpg"
import ImgManReading from "../../assets/homem-lendo.png"
import ImgIconCompany from "../../assets/icon-company.svg"
import ImgIconControl from "../../assets/icon-control.svg"
import ImgIconMoney from "../../assets/icon-money.svg"
import ImgIconTraining from "../../assets/icon-training.svg"
import ImgWomanPointer from "../../assets/mulher-apontando.webp"

import { useEffect, useState } from "react"

import { RiMailOpenFill, RiWhatsappFill } from "react-icons/ri"


export function Main() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


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
              <p className="text-justify">
                ... oferecemos soluções personalizadas em <span className="underline underline-offset-1">CAPACITAÇÃO EMPRESARIAL</span>,
                focando o desenvolvimento das suas equipes, seja operacional ou liderança,
                utilizando ferramentas, conceitos, técnicas e habilidades, de modo a
                atender as demandas estratégicas da companhia.</p>
              <img src={ImgIconTraining} alt="icone de pessoas sendo treinadas" className="h-20" />
            </div>
          </div>

        </article>
        <div
          className={`flex text-center items-center text-black mx-auto gap-4
            md:align-middle md:text-white 
            md:bg-contain md:bg-no-repeat md:bg-center'}`
          }
          style={{ backgroundImage: `url(${ImgWomanPointer})` }}
        >

          <div className="md:flex md:flex-col md:justify-between md:h-full">
            <div className="md:flex md:flex-col gap-6">
              <h4 className="md:mt-6 md:text-3xl font-bold " >
                Agende uma reunião sem compromisso!
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <span className="md:text-4xl md:font-bold">
                FALE CONOSCO
              </span>
              <a href="tel:+55 85 99847 6785" className="flex items-center gap-1 md:text-xl">
                <span className="border p-1 border-white">
                  <RiWhatsappFill size={isMobile ? 12 : 18} />
                </span>
                +55 85 99847-6785
              </a>

              <a href="mailto:in9.gestao@gmail.com" className="flex items-center gap-2 md:text-xl">
                <span className="border p-1 border-white">
                  <RiMailOpenFill size={isMobile ? 12 : 18} />
                </span>
                in9.gestao@gmail.com
              </a>
            </div>
            <div className="md:h-28">
              {/* Colocar a imagem do mapa do brasil */}
            </div>
          </div>
          {isMobile &&
            <img
              src={ImgWomanPointer} alt="Mulher apontando para esquerda"
              className="h-24"
            />
          }


        </div>

      </section>
    </main>
  )
}