import { Button } from '@/app/components/util/button';
import Link from 'next/link';

export default function Cadastro() {


  return (
               <div className="p-10">
                <div className='p2'>
                  <label>AppClient</label>
                </div>
                <div className='p2'>
                <input name="inptAppClient" className='border border-gray-300 ...'  />
                </div>
                <div className='p2'>
                  <label>Algorítmo</label>
                </div>
                <div className='p2'>
                <select name="slctAlgoritmo" className='border border-gray-300 ...'>
                <option value="0">Selecione</option>
                <option value="1">AES (Advanced Encryption Standard)</option>
                <option value="2">DES</option>
                <option value="3">Triple DES</option>
                <option value="4">Blowfish</option>
                <option value="5">Twofish</option>
                </select>
                </div>
                <div className='p2'>
                  <label>Chave</label>
                </div>
                <div className='p2'>
                <input name="inptChave" className='border border-gray-300 ...'  />
                </div>
                <div className='p2'>
                  <label>Data Início</label>
                </div>
                <div className='p2'>
                <input name="inptDtInicio" className='border border-gray-300 ...'  />
                </div>
                <div className='p2'>
                  <label>Data Fim</label>
                </div>
                <div className='p2'>
                <input name="inptDtFim" className='border border-gray-300 ...' />
                </div>
                <div className='p2'>
                  <label>Ativo</label>
                </div>
                <div className='p2'>

                </div>
                <div className='p2'>
                  <Button className="border border-blue-200 p-2 rounded cursor-pointer bg-blue-300 hover:bg-blue-400 text-[#fff] font-bold">Salvar</Button>
                  <Button className="border border-red-200 p-2 rounded cursor-pointer bg-red-300 hover:bg-red-400 text-[#fff] font-bold">Limpar</Button>
                  <Button className="border border-gray-200 p-2 rounded cursor-pointer bg-gray-300 hover:bg-gray-400 text-[#fff] font-bold">
                    <Link href='./'>Voltar</Link>
                  </Button>
                </div>
               </div>
  );

}