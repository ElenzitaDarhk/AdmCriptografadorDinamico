import { Button } from '@/app/components/util/button';
import Link from 'next/link';

import { AlgorithmType } from "@/app/configuracoes/types";

export default async function Cadastro() {

    const url: string = "https://68c0970e0b196b9ce1c4a941.mockapi.io/algorithm";
    //const url: string = "http://localhost:8080/Algorithm";

  try
  {
    const response = await fetch(url);

    if(response.status == 200)
    {
      const algorithms: AlgorithmType[] = await response.json();
      console.log(algorithms);
      return (
                  <div className="p-10 mt-10 ml-80">
                    <div className='p2 mt-2'>
                      <label>AppClient</label>
                    </div>
                    <div className='p2'>
                    <input name="inptAppClient" className='border border-gray-300 ...'  />
                    </div>
                    <div className='p2 mt-2'>
                      <label>Algorítmo</label>
                    </div>
                    <div className='p2'>
                    <select name="slctAlgoritmo" className='border border-gray-300 ...'>
                    <option value="0">Selecione</option>
                    {algorithms.map((algorithm) => (
                      <option value={algorithm.id}>{algorithm.name}</option>
                    ))}
                    </select>
                    </div>
                    <div className='p2 mt-2'>
                      <label>Chave</label>
                    </div>
                    <div className='p2'>
                    <input name="inptChave" className='border border-gray-300 ...'  />
                    </div>
                    <div className='p2 mt-2'>
                      <label>Data Início</label>
                    </div>
                    <div className='p2'>
                    <input name="inptDtInicio" className='border border-gray-300 ...'  />
                    </div>
                    <div className='p2 mt-2'>
                      <label>Data Fim</label>
                    </div>
                    <div className='p2'>
                    <input name="inptDtFim" className='border-gray-300 ...' />
                    </div>
                    <div className='p2 mt-2'>
                      <label>Ativo</label>
                      <input name="inptAtivo"className="p-2 ml-2" type="checkbox" checked={true} readOnly={true} />
                    </div>
                    <div className='p2 mt-2'>
                      <Button className="ml-2 p-2 border border-blue-200 rounded cursor-pointer bg-blue-300 hover:bg-blue-400 text-[#fff] font-bold">Salvar</Button>
                      <Button className="ml-2 p-2 border border-red-200 rounded cursor-pointer bg-red-300 hover:bg-red-400 text-[#fff] font-bold">Limpar</Button>
                      <Button className="ml-2 p-2 border border-gray-200 rounded cursor-pointer bg-gray-300 hover:bg-gray-400 text-[#fff] font-bold">
                        <Link href='./'>Voltar</Link>
                      </Button>
                    </div>
                  </div>
        );
      }
      else if(response.status == 404)
      {
              return (
                  <div className="mt-20 items-center justify-items-center">
                      <p>Nenhum dado auxiliar encontrado!</p>
                      <p>
                          <Link className='underline' href='./'>Voltar</Link>
                      </p>
                  </div>
              );
      }
      else {
              return (
                  <div className="mt-20 items-center justify-items-center">
                      <p>Falha ao carregar dados auxiliares: {response.status}: {response.statusText}</p>
                      <p>
                          <Link className='underline' href='./'>Voltar</Link>
                      </p>
                  </div>
              );
      }
  } catch (error) {
            return (
                <div className="mt-20 items-center justify-items-center">
                    <p>Falha ao carregar dados auxiliares: API fora do ar!</p>
                    <p>
                        <Link className='underline' href='./'>Voltar</Link>
                    </p>
                </div>
            );
    }
}